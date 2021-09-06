const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const rutaProductos = require("./routes/products");
const rutaUsuarios = require("./routes/users");
const app = express();
const port = 3050;



app.use("/", rutaProductos);

app.use("/user", rutaUsuarios);

// ************ Middlewares ************
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(logger('dev'));
app.use(cookieParser());
app.use(methodOverride('_method'));



/********Template *********/

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, '/views'));



app.get("*", (req, res) => {
    res.send("Ruta no encontrada")
});


app.listen(port, () => {
    console.log("Servidor corriendo en el puerto: http://localhost:" + port + "/home")

});

module.exports = app;