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
                        //img: objeto.user_img,
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
                return res.status(200).json({
                    id: usuarios.id,
                    first_name: usuarios.first_name,
                    last_name: usuarios.last_name,
                    user_image: "http://localhost:3050/api/img/userImg/" + usuarios.user_img,
                    email: usuarios.email
                })
            })
            .catch(err => console.log(err))
    }
}

module.exports = userController
