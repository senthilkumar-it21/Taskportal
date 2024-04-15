import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./admin/Dashboard";
import Register from "./pages/Register"
import Addemp from "./admin/Addemp";
import Taskform from "./admin/Taskform";
import Navbar from "./admin/Navbar";
import Updateemp from "./admin/Updateemp";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/login" component={Login} />
        <Route path="/Register" component={Register} />
        <Route  path = "/Addemp" component ={Addemp} />
        <Route  path = "/Taskform" component ={Taskform} />
        <Route path= "/navbar" component={Navbar}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/updateemp" component={Updateemp}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
