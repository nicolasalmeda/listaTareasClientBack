import { Router } from "express";
import { listarTareas,eliminarTarea,actualizarTarea,buscarTarea,crearTarea } from '../controllers/tareas.controllers.js';

const router = Router();

router.route('/tareas').get(listarTareas).post(crearTarea);
router.route('/tareas/:id').delete(eliminarTarea).put(actualizarTarea);
router.route('/tareas/:nombreTarea').get(buscarTarea);

export default router;