const express = require("express");
const router = express.Router(); //manejador de rutas de express
const mascotaSchema = require("../models/mascota");


// Postear mascotas
router.post("/", (req, res) => {
  const mascota = mascotaSchema(req.body);
  mascota
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Consultar todos las mascotas
router.get("/", (req, res) => {
 mascotaSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Consultar una mascota por su id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  mascotaSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Modificar el nombre de una mascota por su id
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { idMascota, nombre, tipoAnimal, raza, edad, fechaIngreso, caracteristicas} = req.body;
  mascotaSchema
    .updateOne(
      { _id: id },
      {
        $set: { idMascota, nombre, tipoAnimal, raza, edad, fechaIngreso, caracteristicas },
      }
    )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Eliminar una mascota por su id

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  mascotaSchema
    .findByIdAndDelete(id)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error });
    });
});


module.exports = router;