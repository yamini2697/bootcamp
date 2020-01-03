import React, {useState,useEffect} from 'react'
import axios from "axios";
import ReactTable from "react-table";
import "react-table/react-table.css";
import logo from "../component/omni.png";
import '../App.css';
import './Emp.css'


export const Employee=(props)=>{
    const [emp,setEmp]=useState({})
    useEffect(()=>{
        getEmployees()
    },[])

    const getEmployees = ()=> {
        axios
        .get("http://localhost:3000/employees")
        .then(posts=>{
            setEmp(posts.data)

        })
        .catch(error=>{
            console.log(error)
        })
    }

    const viewHandler=(employee)=>{
        props.history.push({
            pathname:'/view',
            state:{employee:employee}
        })
      }  

    const editHandler=(employee)=>{
      props.history.push({
          pathname: `/edit/${employee.name}`
      })
    }

    const signupHandler=()=>{
      props.history.push({
        pathname: '/signup'
      })
    }

    const deleteHandler=(employee)=>{
        const {name} =  employee;
        axios.delete(`http://localhost:3000/employees/${name}`)
        .then(res=>{
            getEmployees()
        }).catch(err=>{
            console.error('error',err)
        })
    }

    const columns=[
        {
           Header:"Actions",
           Cell:props=>{
               return(
                   <div>
                       <button className="view-btn" onClick={()=>viewHandler(props.original)}>View</button>
                   </div>
              )
           }
        },    
        {
            Header:"Employee_Name",
            accessor:"name",
            style:{textAlign:"center"}
        },
        {
            Header:"Age",
            accessor:"age",
            style:{textAlign:"center"}
        },
        {
            Header:"Gender",
            accessor:"gender",
            style:{textAlign:"center"}
        },
        {
            Header:"Blood_Group",
            accessor:"bloodgrp",
            style:{textAlign:"center"}
        },
        {
            Header:"Project",
            accessor:"project",
            style:{textAlign:"center"}
        },
        {
            Header:"Experience",
            accessor:"experience",
            style:{textAlign:"center"}
        },
        {
            Header:"Reporting Manager",
            accessor:"reportingmanager",
            style:{textAlign:"center"}
        },
        {
            Header:"Email",
            accessor:"email",
            style:{textAlign:"center"}
        },
        {
            Header:"Salary",
            accessor:"salary",
            style:{textAlign:"center"}
        },
        {
            Header:"Actions",
           Cell:props=>{
               return(
                   <div>
                       <button className="edit-btn" onClick={()=>editHandler(props.original)}>Edit</button>
                       <button className="delete-btn" onClick={()=> deleteHandler(props.original)}>Delete</button>
                   </div>
              )
           }
        }    
    ]
    
     return(
        <div>
        <div className="flex-container">
            <img src={logo} alt="no img" height="50" width="200" style={{marginLeft:"20px"}}/>
        </div>  
        <div className="space">
        <div className="secondhead">
               <div className="head">Employees List</div>  
                <div className="mt-3" >
                   <button onClick={()=>signupHandler()} className="signup-btn">Sign Up</button>
               </div> 
               
        </div>
        <div>
            {emp && emp.length >0 &&<ReactTable
            columns={columns}
            data ={emp}
            defaultPageSize = {10}
           />}           
        </div>
    </div>
    </div>
     )
}




