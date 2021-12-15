const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const logger = require('morgan');
const session = require("express-session")
const cookieParser = require('cookie-parser');
const rutaProductos = require("./routes/products");
const rutaUsuarios = require("./routes/users");
const productsRoutes = require('./routes/api/productsRoutes');
const usersRoutes = require('./routes/api/usersRoutes');
const imgRoutes = require('./routes/api/imgRoutes');
const app = express();
const port = 3050;
const cors = require('cors')

const userLoggedMiddleware = require("./middlewares/userLoggedMiddleware");


// ************ Middlewares ************
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(logger('dev'));
app.use(cookieParser());
app.use(methodOverride('_method'));
app.use(session({ secret: "Mensaje secreto", resave: false, saveUninitialized: false }));
app.use(userLoggedMiddleware);
app.use(cors())
/********Template *********/

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, '/views'));




/****Routes  ******/
app.use("/user", rutaUsuarios);
app.use("/", rutaProductos);
app.use("/api", productsRoutes);
app.use("/api", usersRoutes);
app.use("/api/img", imgRoutes);

app.get("*", (req, res) => {
    res.send("Ruta no encontrada")
});


app.listen(port, () => {
    console.log("Servidor corriendo en el puerto: http://localhost:" + port + "/home")

});


module.exports = app;
