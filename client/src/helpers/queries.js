const uri = "http://localhost:4001/api/tareas";

//Get tareas 

export const getTareas = async () => {
  const response = await fetch(uri);
  const data = await response.json();
  return data;
};

//Add tareas

export const addTarea = async (tarea) => {
  const response = await fetch(uri, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tarea),
  });
  const data = await response.json();
  return data;
}

// Delete tareas

export const deleteTarea = async (id) => {
  const response = await fetch(`${uri}/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
}

// Update tareas

export const updateTarea = async (id, tarea) => {
  const response = await fetch(`${uri}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tarea),
  });
  const data = await response.json();
  return data;
}

// Search tareas

export const searchTarea = async (tarea) => {
  const response = await fetch(`${uri}/${tarea}`);
  const data = await response.json();
  console.log(data)
  return data;
}