const path = require("path");
const fs = require("fs");
const bcrypt = require("bcryptjs");

const userList = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../data/users.json"), "utf-8")
);

function writeJSON(data) {
    return fs.writeFileSync(path.join(__dirname, "../data/users.json"), JSON.stringify(data));
};


const usersController = {
    login: (req, res) => {
        res.render(path.join(__dirname, "../views/login.ejs"))
    },  
    register: (req, res) => {
        res.render(path.join(__dirname, "../views/register.ejs"))
    },
    store: (req, res) => {
    
        if (req.file) {
            const newUser = {

                id: userList.length +1,
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                pw: bcrypt.hashSync(req.body.pw, 10),
                imagen: req.file.filename,
                mail: req.body.mail
            }

            let addProduct = [...userList, newUser]
            writeJSON(addProduct);
            res.redirect("/home");
        } else {
            res.render(path.join(__dirname,"../views/register.ejs"))
        }
    },
    processLogin: (req,res) =>{
        let userLogin = userList.findByField("mail", req.body.mail);
        if(userLogin){
            let passwordOk = bcrypt.compareSync(req.body.pw, userLogin.pw);
            if(passwordOk){
                delete userLogin.pw;
                req.session.userLogged = userLogin;
                return res.redirect("/user/profile")
            } else {
                res.redirect("/login")
            }
        }
    },
    profile: (req, res) => {
        res.render(path.join(__dirname, '../views/usuarioProfile.ejs'), { 
            user: req.session.userLogged 
        });
    },
    logout: (req,res) =>{
        req.session.destroy();
        return res.redirect("/login");
    }
}

module.exports = usersController