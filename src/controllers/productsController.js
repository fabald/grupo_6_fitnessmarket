const path = require("path");
const fs = require("fs");
const productList = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../data/products.json"), "utf-8")
);

function writeJSON(data) {
    fs.writeFileSync(path.join(__dirname, "../data/products.json", JSON.parse(data)))
}

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

        res.render(path.join(__dirname, "../views/crearProducto.ejs"))
    },
    store: (req, res) => {
        console.log(req.body)
        // const newProduct = {
        //     id: productList+1 ,
        //     nombre: req.body.nombre ,
        //     desc: req.body.desc ,
        //     imagen: req.body.imagen ,
        //     categoria: req.body.categoria ,
        //     precio: req.body.precio
        // }

        // let addProduct = [...productList, newProduct]

        // writeJSON(addProduct);

        res.send(req.body)

        // res.redirect("/products")

    },

    edit: (req, res) => {
        const product = productList.find(
            producto => producto.id == req.params.id
        );
        res.render(path.join(__dirname, "../views/editProducto.ejs"), { product })

    },
    actualizar: (req, res) => {
        res.send("edicion actualizada")
    }
}

module.exports = controlador