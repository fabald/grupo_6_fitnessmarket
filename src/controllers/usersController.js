const path = require("path");
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
    }
}


module.exports = controladorDos