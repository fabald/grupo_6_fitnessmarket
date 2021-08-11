const path = require("path")
const controlador = {
    home: (req,res)=>{
        res.render(path.join(__dirname, "../views/index.ejs"))}
}

module.exports = controlador