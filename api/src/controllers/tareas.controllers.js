import Tarea from "../database/models/tarea.js"


export const listarTareas = async (req, res) => {
  try {
    const tareas = await Tarea.find();
    res.status(200).json(tareas);
  } catch (error) {
    
    res.status(400).json({ mensaje: "Error al listar tareas" });
  }

};

export const crearTarea = async (req, res) => {
  console.log(req.body);
  try {
    const { nombreTarea, descripcion } = req.body;
    const nuevaTarea = new Tarea({ nombreTarea, descripcion });
    await nuevaTarea.save();
    res.status(201).json({ mensaje: "Tarea creada" });
  } catch (error) {
    console.log(error)
    res.status(400).json({ mensaje: "Error al crear tarea" });
  }
};

export const eliminarTarea = async (req, res) => {
  try {
    const { id } = req.params;
    await Tarea.findByIdAndDelete(id);
    res.status(200).json({ mensaje: "Tarea eliminada" });
  } catch (error) {
    console.log(error)
    res.status(400).json({ mensaje: "Error al eliminar tarea" });
  }
};

export const actualizarTarea = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombreTarea, descripcion } = req.body;
    await Tarea.findByIdAndUpdate(id, { nombreTarea, descripcion });
    res.status(200).json({ mensaje: "Tarea actualizada" });
  } catch (error) {
    res.status(400).json({ mensaje: "Error al actualizar tarea" });
  }
}

export const buscarTarea = async (req, res) => {
  try {
    const {nombreTarea} = req.params;
    console.log(nombreTarea)
    const tareaFound = await Tarea.findOne({ nombreTarea });
    res.status(200).json(tareaFound);
  } catch (error) {
    res.status(400).json({ mensaje: "Error al buscar tarea" });
  }
}