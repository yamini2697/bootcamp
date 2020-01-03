import React,{useState, useEffect} from 'react';
import {Form} from "./Form";
import axios from "axios"

const Edit=(props)=>{
    let emp = props.match.params.name;
    const [employee,setEmployee]=useState({
      name:'',
      age:'',
      gender:'',
      bloodgrp:'',
      project:'',
      experience:'',
      reportingmanager:'',
      email:'',
      salary:''
    })

    const [name,setName] = useState(employee.name)
    const [age,setAge]=useState(employee.age)
    const [gender,setGender]=useState(employee.gender)
    const [bloodgrp,setBloodgrp]=useState(employee.bloodgrp)
    const [project,setProject]=useState(employee.project)
    const [experience,setExperience]=useState(employee.experience)
    const [reportingmanager,setReportingmanager]=useState(employee.reportingmanager)
    const [email,setEmail]=useState(employee.email)
    const [salary,setSalary]=useState(employee.salary)

    useEffect(()=>{
      axios
      .get(`http://localhost:3000/employees/${emp}`)
      .then(res=>{
        setEmployee(res.data[0])
        setName(res.data[0].name)
        setAge(res.data[0].age)
        setGender(res.data[0].gender)
        setBloodgrp(res.data[0].bloodgrp)
        setProject(res.data[0].project)
        setExperience(res.data[0].experience)
        setReportingmanager(res.data[0].reportingmanager)
        setEmail(res.data[0].email)
        setSalary(res.data[0].salary)
      })
      .catch(err=>{
        console.log(err)
      })
    },[emp])

  const changeHandler = (e) => {
    switch (e.target.name) {
      case "name":
        console.log('in case',e.target.value)
        setName(e.target.value);
        break;  
      case "age":
        setAge(e.target.value);
        break;
      case "gender":
        setGender(e.target.value);
        break;
      case "bloodgrp":
        setBloodgrp(e.target.value);
        break;
      case "project":
        setProject(e.target.value);
        break;
      case "experience":
        setExperience(e.target.value);
        break;
      case "reportingmanager":
        setReportingmanager(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "salary":
        setSalary(e.target.value);
        break;
      default:
        console.log('default')
        break; 
    }
  };

    const submitHandler=(event)=>{
        event.preventDefault();
        axios.put(`/employees/${name}`,{name,age,gender,bloodgrp,project,experience,reportingmanager,email,salary})
        .then(res=>{
           alert('successfully updated')
           props.history.push("/")
        })
        .catch(err=>{
            console.log(err)
        })
    }

    return(  
        <div>
            {employee && Object.keys(employee).length > 0 && <Form empData={employee} submit={(event)=>submitHandler(event)} changeHandler={(e)=>changeHandler(e)}/>}
        </div>
    )
}
export default Edit