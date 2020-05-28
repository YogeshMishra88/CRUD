import React from 'react';

const Employee = (props)=>{
    const {name,email,phone,gender}= props.data;
    return (
        <React.Fragment>
         <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{gender==='M'?'Male':'Female'}</td>
            <td>Edit | Delete</td>
        </tr>
        </React.Fragment>
      
    )
}

export default Employee;