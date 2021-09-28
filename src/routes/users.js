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


router.get("/login", guestMiddleware, usersController.login);

router.get("/register", guestMiddleware, usersController.register);

router.post("/register/create", upload.single("imagenUsuario"), usersController.store);

router.get("/profile/:id", usersController.profile);

router.get("/login", authMiddleware, usersController.processLogin);

router.get("/logout", usersController.logout);


module.exports = router;