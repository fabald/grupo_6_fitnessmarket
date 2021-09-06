const path = require("path");
const fs = require("fs");
const productList = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../data/products.json"))
);
const controlador = {
    home: (req, res) => {
        res.render(path.join(__dirname, "../views/index.ejs"), { productList })
    },
    listadoProd: (req, res) => {
        res.render(path.join(__dirname, "../views/listadoProd.ejs"), { productList })
    },
    productCart: (req, res) => {
        res.render(path.join(__dirname, "../views/productCart.ejs"), { productList })
    },
    productDetail: (req, res) => {
        const product = productList.find(
            producto => producto.id == req.params.id
        );
        res.render(path.join(__dirname, "../views/productDetail.ejs"), { product })
    },
    create: (req, res) => { 

        res.render(path.join(__dirname,"../views/crearProducto.ejs"))
    }
}

module.exports = controlador