import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./admin/Dashboard";
import Register from "./pages/Register"
import Addemp from "./admin/Addemp";
import Taskform from "./admin/Taskform";
import Navbar from "./admin/Navbar";
import Updateemp from "./admin/Updateemp";
import Taskoverdue from "./admin/Taskoverdue";
import Fetchdata from "./admin/Fetchdata";

function App() {
  return (
    <div>
      <BrowserRouter>
      <div className="nav">
        <Route exact path="/login" component={Login} />
        <Route path="/Register" component={Register} />
        <Route  path = "/Addemp" component ={Addemp} />
        <Route  path = "/Taskform" component ={Taskform} />
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/updateemp" component={Updateemp}/>
        <Route path="/overdue" component={Taskoverdue}/>
        <Route path="/fetchdata" component={Fetchdata}/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
