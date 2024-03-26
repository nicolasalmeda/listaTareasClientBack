import React, {useState} from "react"
import '../css/input.css'
import { searchTarea } from "../helpers/queries"

export const Input = ({onAddTask, setTasks}) => {
  const [nombreTarea,setNombreTarea] = useState('')
  const [descripcion,setDescripcion] = useState('')
  const [nombreSearch,setNombreSearch] = useState('')

  const handleNombreTarea = (e) => {
    setNombreTarea(e.target.value.toLowerCase())
    
  }

  const handleNombreSearch = (e) => {
    setNombreSearch(e.target.value.toLowerCase())
  }
  const handleDescripcion = (e) => {
    setDescripcion(e.target.value.toLowerCase())
  }

  const handleKeyPress = () => {
    if (nombreTarea.trim().length < 2 || descripcion.trim().length < 10) {
      alert('El nombre debe tener al menos 2 caracteres y la descripción al menos 10 caracteres.');
      return;
    }
    onAddTask({ nombreTarea, descripcion });
    setNombreTarea('');
    setDescripcion('');
  };

  const handleSearch = async () => {
    if (nombreSearch.trim().length < 2) {
      alert('El nombre debe tener al menos 2 caracteres.');
      return;
    }
  const tareaFound = await searchTarea(nombreSearch);
  setTasks([tareaFound]);
    setNombreTarea('');
  }
  
  return (
    <div className="input">
      <h3>Busque su tarea</h3>
      <div className="search">
        <input
          className="search-input"
          type="text"
          placeholder="Buscar tarea"
          value={nombreSearch}
          onChange={handleNombreSearch}
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>
      <h4>Ingrese tus tareas</h4>
      <input 
          type='text' 
          placeholder='Ingrese sus tareas'
          value={nombreTarea}
          onChange={handleNombreTarea}
      />
      <input
      type="text"
      placeholder="Ingrese la descripción de la tarea"
      value={descripcion}
      onChange={handleDescripcion}
      />

      <button className="btn-save" onClick={handleKeyPress}>Guardar</button>
    </div>
  )
}
