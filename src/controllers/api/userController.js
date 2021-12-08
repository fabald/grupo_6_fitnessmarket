const fs = require('fs');
const path = require("path");
const db = require("../../database/models");
const Op = db.Sequelize.Op;



const userController = {

    list: (req, res) => {
        db.User.findAll()
            .then(usuarios => {
                function objetoChanger(objeto) {
                    let objetoNuevo = {
                        id: objeto.id,
                        name: objeto.first_name + " " + objeto.last_name,
                        email: objeto.email,
                        Detalle: "http://localhost:3050/api/users/" + objeto.id
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
                    url: "http://localhost:3050/api/users",
                    total: usuarios.length,
                    data: dataForApi(usuarios),
                    status: 200
                })
            })
    },
    detail: (req, res) => {
        db.User.findByPk(req.params.id)
            .then(usuarios => {
                return res.status(200).json(usuarios)
            })
    }
}

module.exports = userController
