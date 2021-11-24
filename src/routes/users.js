const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require('multer');
const usersController = require("../controllers/usersController");
const { trace } = require("console"); //revisar
const guestMiddleware = require("../middlewares/guestMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/images/img-usuarios'))
    },
    filename: (req, file, cb) => {
        const nombreArchivo = "userPicture-"+ Date.now() + path.extname(file.originalname);
        cb(null, nombreArchivo);
    }
});

const upload = multer({ storage });
const {check} = require("express-validator")

const validateRegister = [
    check("nombre")
        .notEmpty().withMessage("Este campo es Obligatorio.").bail()
        .isLength({min:2}).withMessage("El nombre debe tener como minimo 2 caracteres."),
    check("email")
        .notEmpty().withMessage("Este campo es Obligatorio.").bail()
        .isEmail().withMessage("El mail debe ser valido."),
    check("password")
        .notEmpty().withMessage("Este campo es Obligatorio.").bail()
        .isLength({min:8})
    // falta validacion de imagen y de chquear mail no existente en base de datos.

]


router.get("/login", guestMiddleware, usersController.login);

router.get("/register", guestMiddleware, validateRegister,  usersController.register);

router.post("/register/create", upload.single("imagenUsuario"), usersController.store);

router.post("/login", usersController.processLogin);

router.get("/profile", authMiddleware, usersController.profile);

router.get("/logout", usersController.logout);


module.exports = router;
