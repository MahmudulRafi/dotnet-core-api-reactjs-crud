import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getEmployees, deleteEmployee } from "../../services/employee.service";

class Employees extends Component {
    state = {
        employees: [],
    };

    async componentDidMount() {
        const { data: employees } = await getEmployees();
        this.setState({ employees });
    }

    handleDelete = async (employeeID) => {
        const response = window.confirm("Would like to delete? ");

        if (response) {
            await deleteEmployee(employeeID);
            const employees = this.state.employees;
            const updatedEmployeeList = employees.filter(
                (employee) => employee.employeeID !== employeeID
            );
            this.setState({ employees: updatedEmployeeList });
        }
    };

    render() {
        return (
            <>
                <div className="container">
                    <br />
                    <Link to="/add-employee">
                        <button className="btn btn-success">Add New</button>
                    </Link>
                    <br />
                    <br />
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Designation</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.employees.map((employee) => (
                                <tr>
                                    <th scope="row">{employee.name}</th>
                                    <td>{employee.designation}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.phone}</td>
                                    <td>
                                        <Link
                                            to={
                                                "/employee/" +
                                                employee.employeeID
                                            }
                                        >
                                            <button className="btn btn-warning">
                                                Details
                                            </button>
                                        </Link>
                                    </td>
                                    <td>
                                        <Link
                                            to={{
                                                pathname:
                                                    "/update-employee/" +
                                                    employee.employeeID,
                                                state: {
                                                    employeeID:
                                                        employee.employeeID,
                                                    name: employee.name,
                                                    address: employee.address,
                                                    designation:
                                                        employee.designation,
                                                    email: employee.email,
                                                    phone: employee.phone,
                                                    salary: employee.salary,
                                                },
                                            }}
                                        >
                                            <button className="btn btn-dark">
                                                Update
                                            </button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() =>
                                                this.handleDelete(
                                                    employee.employeeID
                                                )
                                            }
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </>
        );
    }
}

export default Employees;
