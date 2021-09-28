const path = require("path");
const fs = require("fs");
const productList = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../data/products.json"), "utf-8")
);

function writeJSON(data) {
    return fs.writeFileSync(path.join(__dirname, "../data/products.json"), JSON.stringify(data));
};

const productsController = {
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

        if (req.file) {
            const newProduct = {

                id: productList.length + 1,
                nombre: req.body.nombre,
                desc: req.body.desc,
                imagen: req.file.filename,
                categoria: req.body.categoria,
                precio: req.body.precio
            }

            let addProduct = [...productList, newProduct]

            writeJSON(addProduct);

            res.redirect("/products");
        } else {
            res.render(path.join(__dirname, "../views/crearProducto.ejs"))
        }



    },

    edit: (req, res) => {
        const product = productList.find(
            producto => producto.id == req.params.id
        );
        res.render(path.join(__dirname, "../views/editProducto.ejs"), { product })

    },
    actualizar: (req, res) => {
        const updateProduct = productList.map(product => {
            if (product.id == req.params.id) {
                product.nombre = req.body.nombre
                product.desc = req.body.desc
                product.categoria = req.body.categoria
                product.precio = req.body.precio
            }
            return product;
        });
        writeJSON(updateProduct);
        res.redirect("/productDetail/" + req.params.id);
    },
    destroy: (req, res) => {
        let productosJSON = productList;
        let dataNueva = productosJSON.filter(function (product) {
            return product.id != req.params.id
        });
        writeJSON(dataNueva);
        res.redirect("/products");
    }
}

module.exports = productsController