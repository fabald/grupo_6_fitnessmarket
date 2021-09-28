const path = require("path");
const fs = require("fs");
const bcrypt = require("bcryptjs");

const userList = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../data/users.json"), "utf-8")
);

function writeJSON(data) {
    return fs.writeFileSync(path.join(__dirname, "../data/users.json"), JSON.stringify(data));
};

const userController = {
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
                pw: bcrypt.hashSync(req.body.password, 10),
                imagen: req.file.filename,
                mail: req.body.email
            }

            let addProduct = [...userList, newUser]
            writeJSON(addProduct);
            res.redirect("/home");
        } else {
            res.render(path.join(__dirname,"../views/register.ejs"))
        }
    }
}


module.exports = userController