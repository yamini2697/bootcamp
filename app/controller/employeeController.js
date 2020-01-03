'use strict';

var Emp = require('../model/employeeModel.js');

exports.list_all_emps = function(req, res) {
  Emp.getAllEmp(function(err, emp) {
    if (err)
      res.send(err);
    res.send(emp);
  });
};

exports.list_total_sal = function(req, res) {
  Emp.getTotalSal(function(err, emp) {
    if (err){
      res.send(err);
    }
      else{
          const total=emp.reduce((acc,emp)=>acc+emp.salary,0)
          res.send({total});
      }
  });
};

exports.read_a_emp = function(req, res) {
  Emp.getEmpById(req.params.empName, function(err, emp) {
    if (err){
      res.json({ message: 'error'});
    }
    else{
                if(emp == "")
                {
                  res.json({ message: 'emp does not exist'});
                }
                else if(emp[0].name == req.params.empName){
                res.json(emp);
               }
               else{
                res.json({ message: 'Enter valid Id'});
               }
           }
  });
};

exports.create_a_emp = function(req, res) {
  var new_emp = new Emp(req.body);
   if(!new_emp){
            res.status(400).send({ error:true, message: 'Please provide emp/status' });
        }
else{ 
  Emp.createEmp(req.body, function(err, emp) {   
    if (err)
      res.send(err);
      res.json({ message: 'successfully inserted' });
  });
}
};

exports.update_a_emp = function(req, res) {
  Emp.updateById(req.params.empName, new Emp(req.body), function(err, emp) {
    if (err)
      res.send(err);
    res.json(emp);
  });
};

exports.delete_a_emp = function(req, res) {
  Emp.remove( req.params.empName, function(err, emp) {
    if (err){
      res.send(err);
    }
    else{
      if(emp=="")
      {
        res.json({ message: 'emp does not exist'});
      }
      else{
        res.json(emp);
      }
    }
  });
};

exports.emp_login=function(req,res){
  Emp.login(req.body.email,function(err,resp){
    if(err){
    res.send(err);
    }
    else{
             if(resp.length >0){
               if(resp[0].password == req.body.password){
                 res.send({
                   "code":200,
                   "success":"login sucessfull"
                     });
               }
               else{
                 res.send({
                   "code":204,
                   "success":"Email and password does not match"
                     });
               }
             }
             else{
               res.send({
                 "code":204,
                 "success":"Email does not exits"
                   });
             }
           }
  })
}








