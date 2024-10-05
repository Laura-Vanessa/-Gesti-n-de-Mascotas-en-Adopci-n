const mongoose = require("mongoose"); // importando el componente mogoose
const mascotaSchema = mongoose.Schema({
    idMascota:{
        type: Number,
        required: true,
    },
    nombre: {
        type: String,
        required: true,
    },
    tipoAnimal: {
        type: String,
        required: true,
    },
    raza: {
        type: String,
        requiered: true,
    },
    edad: {
        type: Number,
        required: true
    },
    fechaingreso: {
        type: Date,
        required: true
    },
    Caracteristicas: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model("mascota", mascotaSchema);