import React, { useState } from "react";
import shortid from "shortid";

function App() {
  const [task, setTask] = useState();
  const [tasks, setTasks] = useState([]);

  const AgregarTask = (e) => {
    e.preventDefault();
    if (!task.trim()) {
      console.log("elemento vacio");
      return;
    }
    console.log(task);
    setTasks([
      ...task,
      {
        id: shortid.generate(),
        nameTask: task,
      },
    ]);
    setTask("");
  };

  return (
    <div className="container mt-5">
      <div className="text-center">CRUD Simple</div>
      <hr />
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Lista de Tareas</h4>
          <ul className="list-group">
            <li className="list-group-item">
              <span className="lead">Nombre de la tarea</span>
              <button className="btn btn-danger btn-sm float-end mx-2">
                Eliminar
              </button>
              <button className="btn btn-warning btn-sm float-end">
                Editar
              </button>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">Formulario</h4>
          <form onSubmit={AgregarTask}>
            <input
              className="form-control mb-2"
              placeholder="Ingrese Tarea"
              type="text"
              onChange={(e) => setTask(e.target.value)}
              value={task}
            />
            <div className="d-grid gap-2">
              <button className="btn btn-dark" type="submit">
                Agregar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
