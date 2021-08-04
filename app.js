const express = require("express")
const app = express()
const port = 3050
const path = require("path") 



app.get("/", (req,res)=>{
    res.send("Pagina funcionando.")
})


app.get("/home", (req,res)=>{
    res.sendFile(path.join(__dirname, "views/index.html"))
})

app.get("/login", (req,res)=>{
    res.sendFile(path.join(__dirname, "views/login.html"))
})

app.get("/productCart", (req,res)=>{
    res.sendFile(path.join(__dirname, "views/productCart.html"))
})

app.get("/productDetail", (req,res)=>{
    res.sendFile(path.join(__dirname, "views/productDetail.html"))
})

app.get("/register", (req,res)=>{
    res.sendFile(path.join(__dirname, "views/register.html"))
})

app.use(express.static("public")) 
 

app.get("*", (req,res)=>{
    res.send("Ruta no encontrada") 
})


app.listen(port, ()=>{
    console.log("Servidor corriendo en el puerto: http://localhost:"+port+"/home")

})