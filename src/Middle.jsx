import React from 'react';

function Middle(props){


    
    return <table class="table detail">
    
    <tbody >
      <tr>
      <td></td>
        <td></td>
        <th scope="row">Name</th>
        <td>:</td>
        <td></td>
        <td placeholder='Employee Name'>{props.name}</td>
        <td></td>
        <td></td>
        <td></td>
        
      </tr>
      <tr>
      <td></td>
        <td></td>
        <th scope="row">SurName</th>
        <td>:</td>
        <td></td>
        <td>{props.sname}</td>
        <td></td>
        <td></td>
        <td></td>
        
      </tr>
      <tr>
        <td></td>
        <td></td>
        <th scope="row">Age</th>
        <td>:</td>
        <td></td>
        <td>{props.age}</td>
        <td></td>
        <td></td>
        <td></td>
        
      </tr>
      <tr>
        <td></td>
        <td></td>
        <th scope="row">Phone</th>
        <td>:</td>
        <td></td>
        <td>{props.phone}</td>
        <td></td>
        <td></td>
        <td></td>
        
      </tr>
      <tr>
        <td></td>
        <td></td>
        <th scope="row">Mail</th>
        <td>:</td>
        <td></td>
        <td>{props.email}</td>
        <td></td>
        <td></td>
        <td></td>
        
      </tr>
      <tr>
        <td></td>
        <td></td>
        <th scope="row">Company</th>
        <td>:</td>
        <td></td>
        <td>{props.company}</td>
        <td></td>
        <td></td>
        <td></td>
        
      </tr>
     
    </tbody>
  </table>
}

export default Middle;