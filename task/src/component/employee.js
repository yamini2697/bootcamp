import React, {Component} from "react";
import axios from "axios";
import ReactTable from "react-table";
import "react-table/react-table.css";
import logo from "../component/omni.png";
//import Info from "./component/info";
import '../App.css';

export default class employee extends Component {
    constructor() {
        super();
        this.state={
            employees:[],
            salaries:[]
        };
    }

    componentDidMount(){
        axios.get("http://localhost:5000/employee")
        .then(posts=>{
            this.setState({employees:posts.data})
            //console.log(employees)
            console.log(posts.data)
        });

        axios.get("http://localhost:5000/admin/ctc")
        .then(sal=>{
            this.setState({salaries:sal.data})
            console.log(sal.data)

        })

        
    };

    render() {

        const columns=[
            {
                Header:"Employee_Name",
                accessor:"name"
            },
            {
                Header:"Age",
                accessor:"age"
            },
            {
                Header:"Gender",
                accessor:"gender"
            },
            {
                Header:"Blood_Group",
                accessor:"bloodgrp"
            },
            {
                Header:"Project",
                accessor:"project"
            },
            {
                Header:"Experience",
                accessor:"experience"
            },
            {
                Header:"Reporting Manager",
                accessor:"reportingmanager"
            },
            {
                Header:"Email",
                accessor:"email"
            },
            {
                Header:"Salary",
                accessor:"salary"
            },
            {
                Header:"Actions",
                accessor:"actions"
            }
            
        ]
        

        return (
            <div>
            <div className="flex-container">
                <img src={logo} alt="no img" height="50" width="200" style={{marginLeft:"20px"}}/>
            </div>
            
            <div className="space">
            <div className="secondhead">
                   <div class="head">Employees List</div>  
                   <div class="total">
                       <span id="span1">Total CTC </span><span id="span2">{this.state.salaries}</span>
                   </div>
            </div>
            
            <ReactTable
            columns={columns}
            data={this.state.employees}
            >
            </ReactTable>
            </div>
            </div>
        );
    }
}

