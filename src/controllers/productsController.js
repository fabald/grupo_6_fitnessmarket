const path = require("path");
const db = require("../database/models");

const allProducts = db.Product.findAll();


const productsController = {
    home: (req, res) => {
        console.log("home→ " + db.Product.findAll());
        allProducts
            .then((productList) => {
                res.render(path.join(__dirname, "../views/index.ejs"), { productList }) //creo que poner esto asi es = a poner productList: productList
            })
            .catch((e) => {
                console.log(e);
            });
    },
    listadoProd: (req, res) => {
        allProducts
            .then((productList) => {
                res.render(path.join(__dirname, "../views/listadoProd.ejs"), { productList })
            })
            .catch((e) => {
                console.log(e);
            });

    },
    productCart: (req, res) => {
        allProducts
            .then((productList) => {
                res.render(path.join(__dirname, "../views/productCart.ejs"), { productList })

            })
            .catch((e) => {
                console.log(e);
            });
    },
    productDetail: (req, res) => {
        db.Product.findByPk(req.params.id, {
            include: [{ association: "users", association: "categories", association: "brands", association: "cart" }]
        })
            .then((product) => {
                res.render(path.join(__dirname, "../views/productDetail.ejs"), { product })
            })

    },
    create: (req, res) => {

        res.render(path.join(__dirname, "../views/crearProducto.ejs"))
    },
    store: (req, res) => {
        if (req.file) {
            db.Product.create({
                id: 8, // averiguar como usarle el auto-increment
                product_name: req.body.nombre,
                description: req.body.desc,
                brand_name: req.body.marca,
                product_img: req.file.filename,
                category_id: parseInt(req.body.categoria),
                price: req.body.precio,
                user_id: 1, //averiguar como hacer esto, habria que logearse y tomar algun valor de ahi?
            });
        } else {
            db.Product.create({
                id: 8, // averiguar como usarle el auto-increment
                product_name: req.body.nombre,
                description: req.body.desc,
                brand_name: req.body.marca,
                product_img: null,
                category_id: parseInt(req.body.categoria),
                price: req.body.precio,
                user_id: 1, //averiguar como hacer esto, habria que logearse y tomar algun valor de ahi?
            });
        }

        res.redirect("/products");
    },
    edit: (req, res) => {

        const requestProduct = db.Product.findByPk(req.params.id);
        const requestCategory = db.Category.findByPk(req.params.id);

        Promise.all([requestProduct, requestCategory])
            .then(([product, category]) => {
                res.render(path.join(__dirname, "../views/editProducto.ejs"), { product, category })
            })
            .catch((e) => {
                console.log(e);
            });


    },
    actualizar: (req, res) => {
        console.log(req.file);
        if (req.file) {
            db.Product.update({
                id: req.params.id,
                product_name: req.body.nombre,
                description: req.body.desc,
                product_img: req.file.filename, //No esta tomando el file, WHY??
                category_id: req.body.categoria,
                price: req.body.precio
            }, {
                where: {
                    id: req.params.id
                }
            });
        } else {
            db.Product.update({
                id: req.params.id,
                product_name: req.body.nombre,
                description: req.body.desc,
                product_img: null,
                category_id: req.body.categoria,
                price: req.body.precio
            }, {
                where: {
                    id: req.params.id
                }
            });
        }
        res.redirect("/productDetail/" + req.params.id);

    },
    destroy: (req, res) => {
        db.ProductCart.destroy({
            where: {
                product_id: req.params.id
            }
        })
        db.Product.destroy({
            where: {
                id: req.params.id
            }
        });
        res.redirect("/products");
    }
}

module.exports = productsController