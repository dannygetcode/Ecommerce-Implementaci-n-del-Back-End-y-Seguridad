const mongoose = require("mongoose");

const CategoriaSchema = mongoose.Schema({

    nombre: { type: String, require: true, trim: true},
    imagen: { type: String, require: true, trim: true},
    creador: {type: mongoose.Schema.Types.ObjectId, ref: "Usuario"},
    creado:{type: Date, default: Date.now()},


});


//definir el modelo

module.exports = mongoose.model("Categoria", CategoriaSchema);