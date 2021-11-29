const path = require("path");
const db = require("../../database/models");
const {Op} = require('sequelize');

const productController = {
    list: (req, res) => {
        db.Product.findAll()
        .then(productos =>{
            return res.status(200).json({
                url: "http://localhost:3050/api/products",
                total: productos.length,
                data: productos,
                status:200
            })
        })
    },
    detail: (req, res) => {
        db.Product.findByPk(req.params.id)
        .then(productos =>{
            return res.status(200).json(productos)
        })
    }
}

module.exports = productController