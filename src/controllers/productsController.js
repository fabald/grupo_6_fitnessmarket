const path = require("path")
const controlador = {
    home: (req,res)=>{
        res.render(path.join(__dirname, "../views/index.ejs"))
    },
    listadoProd: (req,res)=>{
        res.render(path.join(__dirname, "../views/listadoProd.ejs"))
    },
    productCart: (req,res)=>{
        res.render(path.join(__dirname, "../views/productCart.ejs"))
    },
    productDetail: (req,res)=>{
        res.render(path.join(__dirname, "../views/productDetail.ejs"))
    }
}

module.exports = controlador