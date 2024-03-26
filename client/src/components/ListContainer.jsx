import React, { useState, useEffect } from "react";
import { Input } from "./Input";
import '../css/listContainer.css';
import { addTarea, deleteTarea, updateTarea, getTareas } from "../helpers/queries";

export const ListContainer = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [newTaskValues, setNewTaskValues] = useState({});

  useEffect(() => {
    obtenerTareas();
  }, []);

  const obtenerTareas = async () => {
    const data = await getTareas();
    setTasks(data);
  };

  const addTask = async (newTask) => {
    const objeto = {
      nombreTarea: newTask.nombreTarea,
      descripcion: newTask.descripcion
    }
    const data = await addTarea(objeto);
    alert("Tarea añadida exitosamente!. " + 'Tarea: ' + data.nombreTarea);
    obtenerTareas();
  };

  const deleteTask = async (id) => {
    const data = await deleteTarea(id);
    alert("Tarea eliminada exitosamente!. " + 'Tarea: ' + data.nombre);
    obtenerTareas();
  };

  const updateTask = async (id) => {
    const data = await updateTarea(id, newTaskValues);
    alert("Tarea actualizada exitosamente!. " + 'Tarea: ' + data.nombreTarea);
    setEditingTaskId(null);
    obtenerTareas();
  };

  const handleEditClick = (task) => {
    setEditingTaskId(task._id);
    setNewTaskValues({ nombreTarea: task.nombreTarea, descripcion: task.descripcion });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTaskValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  return (
    <div className='list-container'>
      <h2 className="title-h2">
        Bienvenido
      </h2>
      <Input onAddTask={addTask} setTasks={setTasks}/>
      <ul className="list-task">
        {tasks.map((task) => (
          <li key={task._id}>
            {editingTaskId === task._id ? (
              <>
                <input
                className="edit-input"
                  type="text"
                  name="nombreTarea"
                  value={newTaskValues.nombreTarea}
                  onChange={handleInputChange}
                />
                <input
                  className="edit-input"
                  type="text"
                  name="descripcion"
                  value={newTaskValues.descripcion}
                  onChange={handleInputChange}
                />
                <button className="btn-confirm" onClick={() => updateTask(task._id)}>Confirmar</button>
              </>
            ) : (
              <>
                <p>{task.nombreTarea}</p>
                <p>{task.descripcion}</p>
                <div>
                  <button className="btn-edit" onClick={() => handleEditClick(task)}>Actualizar</button>
                  <button className="btn-delete" onClick={() => deleteTask(task._id)}>Eliminar</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
