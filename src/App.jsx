import "./App.css";
import { ContactListComponent } from "./components/container/contact_list";
import TaskListComponent from "./components/container/task__list";

function App() {
  return (
    <div className="App">
      <TaskListComponent />
      <ContactListComponent />
    </div>
  );
}

export default App;
