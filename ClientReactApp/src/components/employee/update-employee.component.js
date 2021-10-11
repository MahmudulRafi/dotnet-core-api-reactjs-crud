import Form from "../../common/form.component";
import Input from "../../common/input.component";
import {
    updateEmployee,
    getEmployeeById,
} from "../../services/employee.service";

class UpdateEmployee extends Form {
    state = {
        data: {
            employeeID: "",
            name: "",
            address: "",
            phone: "",
            email: "",
            designation: "",
            salary: "",
        },
        errors: {},
    };

    async componentDidMount() {
        const { data: employee } = await getEmployeeById(
            this.props.match.params.id
        );
        this.setState({ data: employee });
    }

    handleUpdate = async (empId, event) => {
        event.preventDefault();
        await updateEmployee(empId, this.state.data);
        this.props.history.push("/employees");
    };

    render() {
        return (
            <div className="container w-50 mx-auto">
                <br />
                <form onSubmit={() => this.handleSubmit}>
                    <div class="mb-3">
                        <Input
                            type="name"
                            label="Name"
                            id="name"
                            name="name"
                            value={this.state.data.name}
                            error={this.state.errors}
                            onChange={(event) => this.handleChange(event)}
                        />
                    </div>
                    <div class="mb-3">
                        <Input
                            type="address"
                            label="Address"
                            id="address"
                            name="address"
                            value={this.state.data.address}
                            error={this.state.errors}
                            onChange={(event) => this.handleChange(event)}
                        />
                    </div>
                    <div class="mb-3">
                        <Input
                            type="phone"
                            label="Phone"
                            id="phone"
                            name="phone"
                            value={this.state.data.phone}
                            error={this.state.errors}
                            onChange={(event) => this.handleChange(event)}
                        />
                    </div>
                    <div class="mb-3">
                        <Input
                            type="email"
                            label="Email"
                            id="email"
                            name="email"
                            value={this.state.data.email}
                            error={this.state.errors}
                            onChange={(event) => this.handleChange(event)}
                        />
                    </div>
                    <div class="mb-3">
                        <Input
                            type="designation"
                            label="Designation"
                            id="desingation"
                            name="designation"
                            value={this.state.data.designation}
                            error={this.state.errors}
                            onChange={(event) => this.handleChange(event)}
                        />
                    </div>
                    <div class="mb-3">
                        <Input
                            type="salary"
                            label="Salary"
                            id="salary"
                            name="salary"
                            value={this.state.data.salary}
                            error={this.state.errors}
                            onChange={(event) => this.handleChange(event)}
                        />
                    </div>
                    <div className="d-grid gap-2">
                        <button
                            type="submit"
                            class="btn btn-dark"
                            onClick={(event) =>
                                this.handleUpdate(
                                    this.props.match.params.id,
                                    event
                                )
                            }
                        >
                            Submit
                        </button>
                        <br />
                    </div>
                </form>
            </div>
        );
    }
}

export default UpdateEmployee;
