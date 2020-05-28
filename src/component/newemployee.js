import React, { Component } from 'react';
import {EmployeeConsumer} from '../context';

class NewEmployee extends Component {
    render() {
        return (
            <div className="newEmp">
                <EmployeeConsumer>
                    {
                        value=>{
                            if(value.isNewEmp){
                                return(
                                    <div className="newform">
                                            <div className="formContainer">
                                                This is add form
                                            </div>
                                    </div>
                                ) 
                            }
                            else{
                                return <h3>Hello from else condition</h3>
                            }
                        }
                    }
                </EmployeeConsumer>
            </div>
        );
    }
}

export default NewEmployee;