const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require('multer');
const usersController = require("../controllers/usersController");
const { trace } = require("console"); //revisar
const guestMiddleware = require("../middlewares/guestMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");
const User = require ("../database/models/User")

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
        .isEmail().withMessage("El mail debe ser valido.").bail()
        .custom(value => {
            return User.findAll({where:{email:value}}).then(user => {
              if (user) {
                return Promise.reject("Este email ya se encuentra en uso.");
              }
            });
        }),
    check("password")
        .notEmpty().withMessage("Este campo es Obligatorio.").bail()
        .isLength({min:8})
]

const validateLogin = [
    check("email")
        .notEmpty().withMessage("Ingresar Email para continuar.").bail()
        .isEmail().withMessage("El email debe ser valido").bail()
        .custom(value => {
            return User.findAll({where:{email:value}}).then(user => {
              if (!user) {
                return Promise.reject("El mail no se encuentra registrado.");
              }
            });
        }),
]


router.get("/login", guestMiddleware, usersController.login);

router.get("/register", guestMiddleware, validateRegister,  usersController.register);

router.post("/register/create", upload.single("imagenUsuario"), usersController.store);

router.post("/login", validateLogin,  usersController.processLogin);

router.get("/profile", authMiddleware, usersController.profile);

router.get("/logout", usersController.logout);


module.exports = router;
