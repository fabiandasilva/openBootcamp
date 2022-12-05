import React, { useEffect, useState } from "react";

import { Levels } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/task";
import "../../styles/task.css";

function TaskListComponent() {
  //Estado del componente
  const [task, setTask] = useState([defaultTask]);
  const [loading, setLoading] = useState(true);

  //Control del ciclo de vida del componente
  useEffect(() => {
    console.log("Modificacion de tareas");
    setLoading(false);

    return () => {
      console.log("TaskList componente cuando se desmonta");
    };
  }, [task]);

  const defaultTask = new Task(
    "Example",
    "Default description",
    false,
    Levels.normal
  );

  const changeCompleted = (id) => {
    console.log("TODO:Cambiar estado de una tarea");
  };

  return (
    <div className="lala">
      <div>
        <h1>Your Task:</h1>
      </div>
      {/* TODO: Aplicar un For/Map para renderizar una lista */}
      <TaskComponent task={defaultTask} />
    </div>
  );
}

export default TaskListComponent;
