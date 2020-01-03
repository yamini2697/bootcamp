import React,{useState} from 'react';
import {Form} from "./Form";
import axios from "axios"

const SignUp=(props)=>{
const data = {
    Name:'',
    Age:'',
    Gender:'',
    Bloodgrp:'',
    Project:'',
    Experience:'',
    Reportingmanager:'',
    Email:'',
    Salary:''
  }
  
  const [name,setName]=useState(data.Name)
  const [age,setAge]=useState(data.Age)
  const [gender,setGender]=useState(data.Gender)
  const [bloodgrp,setBloodgrp]=useState(data.Bloodgrp)
  const [project,setProject]=useState(data.Project)
  const [experience,setExperience]=useState(data.Experience)
  const [reportingmanager,setReportingmanager]=useState(data.Reportingmanager)
  const [email,setEmail]=useState(data.Email)
  const [salary,setSalary]=useState(data.Salary)

  const changeHandler = (e) => {
    switch (e.target.name) {
      case "Name":
        setName(e.target.value);
        break;
      case "Age":
        setAge(e.target.value);
        break;
      case "Gender":
        setGender(e.target.value);
        break;
      case "Bloodgrp":
        setBloodgrp(e.target.value);
        break;
      case "Project":
        setProject(e.target.value);
        break;
      case "Experience":
        setExperience(e.target.value);
        break;
      case "Reportingmanager":
        setReportingmanager(e.target.value);
        break;
    case "Email":
        setEmail(e.target.value);
        break;
    case "Salary":
        setSalary(e.target.value);
        break;
    default:
        console.log('default')
        break; 
    }
  };

    const submitHandler=(event)=>{
        event.preventDefault();
        axios.post('/employees',{name,age,gender,bloodgrp,project,experience,reportingmanager,email,salary})
        .then(res=>{
           alert('successfully posted')
           props.history.push("/")
        })
        .catch(err=>{
            console.log(err)
        })
    }

    return(
        <div>
            <Form empData={data} submit={(event)=>submitHandler(event)} changeHandler={(e)=>changeHandler(e)}/>
        </div>
    )
}
export default SignUp