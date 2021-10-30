import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./common/Navbar.component";
import Employees from "./components/employee/Employees";
import { ToastContainer } from "react-toastify";

function App() {
    return (
        <>
            <Navbar />
            <ToastContainer />
            <Switch>
                <Route>
                    <Route path="/employees" component={Employees} />
                    <Route exact path="/" component={Employees} />
                </Route>
            </Switch>
        </>
    );
}

export default App;
