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


/**/

router.get("/login", usersController.login);

router.get("/register", usersController.register);

// router.post("/register/create", usersController.store); //fata middleware con name del campo

router.get("/user/profile", authMiddleware, usersController.profile);

router.get("/logout", usersController.logout);

router.post("/login", usersController.processLogin);

module.exports = router;