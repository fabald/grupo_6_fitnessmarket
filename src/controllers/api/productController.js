const path = require("path");
const db = require("../../database/models");
const { Op } = require('sequelize');

const productController = {
    list: (req, res) => {
        db.Product.findAll({ include: [{ association: "categories" }] })
            .then(productos => {
                function objetoChanger(objeto) {
                    let objetoNuevo = {
                        id: objeto.id,
                        name: objeto.product_name,
                        categoría: objeto.categories.name,
                        descripcion: objeto.description,
                        detalle: "http://localhost:3050/api/products/" + objeto.id
                    }
                    return objetoNuevo
                }
                function dataForApi(arrayconDataVieja) {
                    let arrayNuevo = []
                    for (let i = 0; i < arrayconDataVieja.length; i++) {
                        arrayNuevo.push(objetoChanger(arrayconDataVieja[i]))
                    }
                    return arrayNuevo
                }

                return res.status(200).json({
                    url: "http://localhost:3050/api/products",
                    total: productos.length,
                    data: dataForApi(productos),
                    status: 200
                })
            })
            .catch(e => console.log(e))
    },
    detail: (req, res) => {
        db.Product.findByPk(req.params.id, { include: [{ association: "categories" }, {association: "users"}] })
            .then(productos => {
                return res.status(200).json(productos)
            })
    }
}

module.exports = productController
