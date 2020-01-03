import React from 'react';
import './View.css';

function View(props) {
    const {name,age,gender,bloodgrp,project,experience,reportingmanager,email,salary}=props.location.state.employee
return(
    <div>
    <h1 className="heading">Welcome {name}</h1>
    <div className="view-container">
       <table class="table">
                        <tr>
                            <td>Name</td>
                            <td>{name}</td>
                        </tr>
                        <tr>
                            <td>Age</td>
                            <td>{age}</td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td>{gender}</td>
                        </tr>
                        <tr>
                            <td>Blood Group</td>
                            <td>{bloodgrp}</td>
                        </tr>
                        <tr>
                            <td>Project</td>
                            <td>{project}</td>
                        </tr>
                        <tr>
                            <td>Experience</td>
                            <td>{experience}</td>
                        </tr>
                        <tr>
                            <td>Reporting Managee</td>
                            <td>{reportingmanager}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{email}</td>
                        </tr>
                        <tr>
                            <td>Salary</td>
                            <td>{salary}</td>
                        </tr>
                    </table>
                    </div>
    </div>
        )    
}

export default View
