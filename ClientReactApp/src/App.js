import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./common/navbar.component";
import UpdateEmployee from "./components/employee/update-employee.component";
import AddEmployee from "./components/employee/add-employee.component";
import Employees from "./components/employee/employees.component";
import Employee from "./components/employee/employee.component";

function App() {
    return (
        <>
            <Navbar />
            <Switch>
                <Route>
                    <Route path="/employee/:id" component={Employee} />
                    <Route
                        path="/update-employee/:id"
                        component={UpdateEmployee}
                    />
                    <Route path="/add-employee" component={AddEmployee} />
                    <Route path="/employees" component={Employees} />
                    <Route exact path="/" component={Employees} />
                </Route>
            </Switch>
        </>
    );
}

export default App;
