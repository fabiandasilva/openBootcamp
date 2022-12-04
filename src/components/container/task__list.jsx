import React from "react";

import { Levels } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/task";

function TaskListComponent() {
  const defaultTask = new Task(
    "Example",
    "Default description",
    false,
    Levels.normal
  );

  const changeState = (id) => {
    console.log("TODO:Cambiar estado de una tarea");
  };

  return (
    <div>
      <div>
        <h1>Your Task:</h1>
      </div>
      {/* TODO: Aplicar un For/Map para renderizar una lista */}
      <TaskComponent task={defaultTask} />
    </div>
  );
}

export default TaskListComponent;
