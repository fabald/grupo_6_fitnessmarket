const { trace } = require("console"); //revisar
const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require('multer');
const productsController = require("../controllers/productsController");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/images/img-productos'))
    },
    filename: (req, file, cb) => {
        const nombreArchivo = "product-" + Date.now() + path.extname(file.originalname);
        cb(null, nombreArchivo);
    }
});

const upload = multer({ 
    storage: storage,
    fileFilter: function (req, file, callback) {
        let ext = path.extname(file.originalname);
        if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
            return callback(newError('Solo se permiten imágenes'))
        }
        callback(null, true)
    }
 });


router.get("/home", productsController.home);

router.get("/products", productsController.listadoProd); //LIST

router.post("/products/create", upload.single("imagen-producto"), productsController.store);

router.get("/products/create", productsController.create);

router.get("/productCart", productsController.productCart);

router.get("/productDetail/:id", productsController.productDetail);

router.get("/productDetail/:id/edit", productsController.edit);

router.delete("/productDetail/:id/delete", productsController.destroy);

router.put("/productDetail/:id/actualizar", upload.single("imagen-producto"), productsController.actualizar);


module.exports = router;
