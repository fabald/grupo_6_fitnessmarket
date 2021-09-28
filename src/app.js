const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const logger = require('morgan');
const session = require("express-session")
const cookieParser = require('cookie-parser');
const rutaProductos = require("./routes/products");
const rutaUsuarios = require("./routes/users");
const app = express();
const port = 3050;


// ************ Middlewares ************
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(logger('dev'));
app.use(cookieParser());
app.use(methodOverride('_method'));
app.use(session({secret: "Mensaje secreto", reseave: false, saveUninitialized: false}));



/********Template *********/

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, '/views'));

/****Routes  ******/
app.use("/", rutaProductos);
app.use("/user", rutaUsuarios);




app.get("*", (req, res) => {
    res.send("Ruta no encontrada")
});


app.listen(port, () => {
    console.log("Servidor corriendo en el puerto: http://localhost:" + port + "/home")

});

module.exports = app;