const path = require("path");
const bcrypt = require("bcryptjs");
const fs = require("fs");

const userList = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../data/users.json"), "utf-8")
);

function writeJSON(data) {
    return fs.writeFileSync(path.join(__dirname, "../data/users.json"), JSON.stringify(data));
};

const controladorDos = {
    login: (req,res)=>{
        res.render(path.join(__dirname, "../views/login.ejs"))
    },
    register: (req,res)=>{
        res.render(path.join(__dirname, "../views/register.ejs"))
    },
    profile: (req,res)=>{
        res.render(path.join(__dirname, "../views/usuarioProfile.ejs"))
    },
    processLogin: (req,res) =>{
        let userLogin = userList.findByField("email", req.body.email);
        if(userLogin){
            let passwordOk = bcrypt.compareSync(req.body.password, userLogin.password);
            if(passwordOk){
                delete userLogin.password;
                req.session.userLogged = userLogin;
                return res.redirect("/user/profile")
            } else {
                res.redirect("/login")
            }
        }
    },
    logout: (req,res) =>{
        req.session.destroy();
        return res.redirect("/login");
    }
}


module.exports = controladorDos