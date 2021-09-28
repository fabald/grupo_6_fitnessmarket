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
        res.render(path.join(__dirname, "../views/profile.ejs"))
    },
    processLogin: (req,res) =>{
        for(let i = 0; i < userList.length; i++){
            if(req.body.email == userList[i].email && bcrypt.compareSync(req.body.password, userList[i].password)) {
                res.render("/usuarioProfile.ejs")
            } else {
                res.redirect("/login")
            }
        } 
    }
}


module.exports = controladorDos