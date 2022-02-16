import './App.scss';
import NewTask from "./components/newTask/NewTask";
import InProgress from "./components/InProgress/InProgress";
import Completed from "./components/Completed/Completed";
import Archived from "./components/Archived/Archived";

function App() {
    return (<div className={'task-grid'}>
        <NewTask/>
        <InProgress/>
        <Completed/>
        <Archived/>
    </div>);
}

export default App;
