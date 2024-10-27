const producto = require("../models/producto");

exports.leerProductoHome = async ( req, res ) => {
    try{
        const producto1 = await producto.find();
        res.json({ producto1 });
    }catch(error){
        console.log(error);
    }


}


exports.leerProducto = async (req, res) => {
    const {id} = req.params;
    const producto1 = await producto.find().where("categoriaId").equals(id);
    res.json(producto1);
}
exports.crearProducto = async ( req, res ) => {
   
    try{
        const producto1 = new producto(req.body);
        producto1.save();
        res.json(producto1);
    }catch(error){
        console.log(error);
    }


}
exports.actualizarProducto = async ( req, res ) => {
    res.json({ msg : "ejecuto actualizar Producto"});
}
exports.borrarProducto = async ( req, res ) => {
    res.json({ msg : "ejecuto borrar Producto"});
}