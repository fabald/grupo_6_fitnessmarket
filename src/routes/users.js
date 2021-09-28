const { trace } = require("console"); //revisar
const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require('multer');
const usersController = require("../controllers/usersController");
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


router.get("/login", usersController.login);

router.get("/profile", usersController.profile)

router.post("/register/create", upload.single("imagenUsuario"), usersController.store );

router.get("/register", usersController.register);

module.exports = router;