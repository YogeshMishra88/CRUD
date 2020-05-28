import React, { Component } from 'react';
import Employee from './data';

 const EmployeeContext = React.createContext();

class EmployeeProvider extends Component {
    constructor(props){
        super(props);
        this.state = {
            Employee:Employee,
            isNewEmp : true
        }
    }
    render() {
        return (
            <EmployeeContext.Provider value={{
                ...this.state
            }}>
                {this.props.children}
            </EmployeeContext.Provider>
        );
    }
}

const EmployeeConsumer = EmployeeContext.Consumer;
export {EmployeeProvider,EmployeeConsumer};