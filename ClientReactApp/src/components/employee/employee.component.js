import React, { Component } from "react";
import { getEmployeeById } from "../../services/employee.service";

class Employee extends Component {
    state = {
        employee: {
            employeeID: "",
            name: "",
            address: "",
            phone: "",
            email: "",
            designation: "",
            salary: "",
        },
    };

    async componentDidMount() {
        const { data: employee } = await getEmployeeById(
            this.props.match.params.id
        );
        this.setState({ employee });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-6">
                        <br />
                        <div style={{ textAlign: "left" }}>
                            <br />
                            <h1 class="display-6">
                                <u>Employee Details</u>
                            </h1>
                            <br />
                            <h5>
                                <kbd> Name</kbd> : {this.state.employee.name}
                            </h5>
                            <h5>
                                <kbd> Address</kbd> :{" "}
                                {this.state.employee.address}
                            </h5>
                            <h5>
                                <kbd> Designation</kbd> :
                                {this.state.employee.designation}
                            </h5>
                            <h5>
                                <kbd> Phone</kbd> : {this.state.employee.phone}
                            </h5>
                            <h5>
                                <kbd> Email</kbd> : {this.state.employee.email}
                            </h5>
                            <h5>
                                <kbd> Salary</kbd> :{" "}
                                {this.state.employee.salary}
                            </h5>
                        </div>
                    </div>
                    <div className="col-lg-2"></div>
                </div>
            </div>
        );
    }
}

export default Employee;
