const Usuario = require("../models/usuario");
const bcryptjs = require("bcryptjs");

// exports.crearUsuario = async (req, res) => {

//   console.log("Petición recibida:", req.body);
//   //console.log(req.body);

//   const { password, email } = req.body;

//   try {
//     //revisar que sea un unico correo
//     let usuario = await Usuario.findOne({ email });

//     if (usuario) {
//       return res.status(400).json({ msg: "el usuario ya exite" });
//     }

//     //crear un nuevo usuario

//     usuario = new Usuario(req.body);

//     // hash significa ecriptar

//     usuario.password = await bcryptjs.hash(password, 8);

//     //Guardar usuario en la bd

//     const usuarioAlmacenado = await usuario.save();
//     res.json(usuarioAlmacenado);
//   } catch (error) {
//     console.log(error);
//   }
// };

exports.crearUsuario = async (req, res) => {
  console.log("Petición recibida:", req.body);  // <-- Añadir esta línea para ver qué datos estás recibiendo

  const { password, email } = req.body;

  // Verificar si el password es válido
  if (!password) {
    return res.status(400).json({ msg: "El password es obligatorio" });
  }

  try {
    // Revisar si ya existe un usuario con el mismo email
    let usuario = await Usuario.findOne({ email });

    if (usuario) {
      return res.status(400).json({ msg: "El usuario ya existe" });
    }

    // Crear un nuevo usuario
    usuario = new Usuario(req.body);

    // Hash (encriptar) el password
    console.log("Password recibido para encriptar:", password);  // <-- Añadir esta línea para verificar el password
    usuario.password = await bcryptjs.hash(password, 8);

    // Guardar el usuario en la base de datos
    const usuarioAlmacenado = await usuario.save();
    res.json(usuarioAlmacenado);
  } catch (error) {
    console.log("Error en crearUsuario:", error);
    res.status(500).json({ msg: "Hubo un error al crear el usuario" });
  }
};

