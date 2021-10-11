import Form from "../../common/form.component";
import Input from "../../common/input.component";
import { addEmployee } from "../../services/employee.service";

class AddEmployee extends Form {
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

    doSubmit = async () => {
        const employee = {
            name: this.state.data.name,
            address: this.state.data.address,
            phone: this.state.data.phone,
            email: this.state.data.email,
            designation: this.state.data.designation,
            salary: this.state.data.salary,
        };

        await addEmployee(employee);
        this.props.history.push("/employees");
    };

    render() {
        return (
            <div className="container w-50 mx-auto">
                {this.state.formError && (
                    <div className="alert alert-danger">
                        {this.state.formError}
                    </div>
                )}
                <br />
                <form onSubmit={this.handleSubmit}>
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
                        <button type="submit" class="btn btn-dark">
                            Submit
                        </button>
                        <br />
                    </div>
                </form>
            </div>
        );
    }
}

export default AddEmployee;
