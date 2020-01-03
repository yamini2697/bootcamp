'user strict';
var sql = require('./dbconnection.js');
const jwt=require('jsonwebtoken');
const secret='secret'
var Emp = function(emp){
    this.emp = emp;
    this.err = 'not done'
};

Emp.getAllEmp = function (result) {
        sql.query("Select * from omniwyse", function (err, res) {
                if(err) {
                    result(null, err);
                }
                else{  
                 result(null, res);
                }
            });   
};

Emp.getTotalSal = function (result) {
    sql.query("Select * from omniwyse", function (err, res) {
            if(err) {
                result(null, err);
            }
            else{
             result(null, res);
            }
        });   
};




Emp.getEmpById = function (empName, result) {
    sql.query("Select * from omniwyse where name = ? ", empName, function (err,res) {             
            if(err) {
                result('error', null);
            }      
            else{
                result(null, res); 
            }
            });
       };


Emp.createEmp = function (newEmp, result) {    
    sql.query("INSERT INTO omniwyse set ?", newEmp, function (err, res) {        
            if(err) {
                result(err, null);
            }
            else{
                result(null, res.insertId);
            }
        });           
};

Emp.updateById = function(id, emp, result){
    let{age,gender,bloodgrp,project,experience,reportingmanager,email,salary,name} =emp.emp
    sql.query( "UPDATE omniwyse SET age = ?, gender = ?, bloodgrp = ?, project = ?, experience = ?, reportingmanager = ?,email = ?, salary = ? WHERE name = ?", 
    [age,gender,bloodgrp,project,experience,reportingmanager,email,salary,name],function (err, res) {
            if(err) {
                  result(null, err);
               }
             else{   
               result(null, res);
                  }
              }); 
  };

  Emp.remove = function(name, result){
    sql.query("DELETE FROM omniwyse WHERE name = ?", [name], function (err, res) {
               if(err) {
                   result('error', null);
               }
               else{  
                result(null, res);
               }
           }); 
};

Emp.login = function(email, result){
        sql.query('SELECT * FROM employee WHERE email = ?',[email], function (err, res) {
        if (err) {
           result(null,err)
        }
        else{
            const signedToken=jwt.sign({name:res[0].name},secret,{expiresIn: "7h"})
            result(null,res)
        }
    });
}

module.exports= Emp;




