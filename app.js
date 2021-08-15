const express = require("express")
const app = express()
const port = 3050
const path = require("path") 
const rutaProductos = require("./routes/products")
const rutaUsuarios = require("./routes/users")
app.set("view engine", "ejs")

app.get("/", (req,res)=>{
    res.send("Pagina funcionando.")
})


app.use("/", rutaProductos)

app.use("/", rutaUsuarios)

app.use(express.static("public")) 
 

app.get("*", (req,res)=>{
    res.send("Ruta no encontrada") 
})


app.listen(port, ()=>{
    console.log("Servidor corriendo en el puerto: http://localhost:"+port+"/home")

})