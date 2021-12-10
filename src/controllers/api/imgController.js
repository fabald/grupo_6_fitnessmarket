////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const fs = require('fs');
const path = require("path");
const db = require("../../database/models");

const imgController = {
    userImg: (req, res) => {
        let ruta = (path.join(__dirname, "./../../../public/images/img-usuarios/" + req.params.id));
        res.sendFile(ruta)
    },
    productImg: (req, res) => {
        //res.send("../../../public//images/img-productos/" + req.params.id);
        let ruta = (path.join(__dirname, "./../../../public/images/img-productos/" + req.params.id));
        res.sendFile(ruta)
    }
}

module.exports = imgController
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
