const path = require("path");
const fs = require("fs");
const bcrypt = require("bcryptjs");
const db = require("../database/models");

const allUsers = db.User.findAll();


const usersController = {
    login: (req, res) => {
        res.render(path.join(__dirname, "../views/login.ejs"))
    },
    register: (req, res) => {
        res.render(path.join(__dirname, "../views/register.ejs"))
    },
    store: (req, res) => {
        console.log(req.body.nombre);
        console.log(req.body.apellido);
        console.log(req.body.password);
        //console.log(req.file.filename);
        console.log(req.body.email);
        if (req.file) {
            db.User.create({
                first_name: req.body.nombre,
                last_name: req.body.apellido,
                password: bcrypt.hashSync(req.body.password, 10),
                user_img: req.file.filename,
                email: req.body.email
            })
        } else {
            db.User.create({
                first_name: req.body.nombre,
                last_name: req.body.apellido,
                password: bcrypt.hashSync(req.body.password, 10),
                user_img: "userDefaultPic.jpg",
                email: req.body.email
            })
        }
        res.redirect("/home");

    },
    processLogin: (req, res) => {
        let userLogin = db.User.findOne({
            where: {
                mail: req.body.mail
            }
        });
        if (userLogin) {
            let passwordOk = bcrypt.compareSync(req.body.pw, userLogin.pw);
            if (passwordOk) {
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
    logout: (req, res) => {
        req.session.destroy();
        return res.redirect("/login");
    }
}

module.exports = usersController
