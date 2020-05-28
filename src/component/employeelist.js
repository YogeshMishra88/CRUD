import React, { Component } from 'react';
import {EmployeeConsumer} from '../context';
import Employee from './employee';

class EmployeeList extends Component {

     addNewEmployee = ()=>{
        console.log('New Employe Added');
    };

    render() {
        return (
            <React.Fragment>
                 <div className="emp">
                        <div className="addNewEmp" onClick={this.addNewEmployee}>Add New Employee</div>
                     <table id="employee">
                         <thead>
                            <tr>
                                <th>Name</th>
                                <th>Gender</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Action</th>
                            </tr>
                          </thead>
                        <tbody>
                        <EmployeeConsumer>
                         {
                             value=>{
                                 return value.Employee.map(v=><Employee data={v} key={v.id}/>)
                             }

                         }
                     </EmployeeConsumer>
                        </tbody>
                     </table>
                </div>
            </React.Fragment>
        );
    }
}

export default EmployeeList;