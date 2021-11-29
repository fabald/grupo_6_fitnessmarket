const path = require("path");
const db = require("../../database/models");
const {Op} = require('sequelize');

const productController = {
    list: (req, res) => {
        db.Product.findAll()
        .then(productos =>{
            return res.status(200).json(productos)
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