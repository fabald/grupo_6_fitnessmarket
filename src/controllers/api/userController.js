const path = require("path");
const db = require("../../database/models");
const Op = db.Sequelize.Op;

const userController = {
    list: (req, res) => {
        db.User.findAll()
        .then(usuarios =>{
            return res.status(200).json({
                url: "http://localhost:3050/api/users",
                total: usuarios.length,
                data: usuarios,
                status: 200
            })
        })
    },
    detail: (req, res) => {
        db.User.findByPk(req.params.id)
        .then(usuarios =>{
            return res.status(200).json(usuarios)
        })
    }
}

module.exports = userController