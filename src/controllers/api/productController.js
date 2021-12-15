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
                        categoria: objeto.categories.name,
                        descripcion: objeto.description,
                        detalle: "http://localhost:3050/api/products/" + objeto.id,
                        category_id: objeto.category_id
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
                // funcionn para averiguar las categorias de los productos.
                function countCategorias(objeto){
                    let musculacion = 0
                    let suplementos = 0
                    let indumentaria = 0
                    let equipamiento = 0

                    for(let i= 0; i < objeto.length ; i++){
                        if(objeto[i].category_id == 1){
                            indumentaria++
                        }else if(objeto[i].category_id==2){
                            suplementos++
                        }else if(objeto[i].category_id==3){
                            equipamiento++
                        }else if(objeto[i].category_id==4){
                            musculacion++
                        }
                    }

                    contadorGeneral = {
                        indumentaria: indumentaria,
                        suplementos: suplementos,
                        equipamiento: equipamiento,
                        musculacion: musculacion
                    }

                    return contadorGeneral
                }

                return res.status(200).json({
                    url: "http://localhost:3050/api/products",
                    total: productos.length,
                    categorias: countCategorias(productos),
                    data: dataForApi(productos),
                    status: 200,
                })
            })
            .catch(e => console.log(e))
    },
    detail: (req, res) => {
        db.Product.findByPk(req.params.id, { include: [{ association: "categories" }, { association: "users" }] })
            .then(productos => {
                return res.status(200).json({
                    id: productos.id,
                    name: productos.product_name,
                    description: productos.description,
                    price: productos.price,
                    brand: productos.brand,
                    image: "http://localhost:3050/api/img/productImg/" + productos.product_img,
                    category: productos.categories.name,
                    user: productos.users.first_name+' '+productos.users.last_name
                })
            })
    }
}

module.exports = productController
