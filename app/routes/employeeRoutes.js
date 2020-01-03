'use strict';
module.exports = function(app) {
  var todoList = require('../controller/employeeController.js');
  var checkAuthorization=require('../middleware/checkauth.js');

  app.route('/employees')
    .get(todoList.list_all_emps)
    .post(todoList.create_a_emp);
      
  app.route('/employees/:empName',checkAuthorization)
    .get(todoList.read_a_emp)

  app.route('employees/admin/ctc')  
    .get(todoList.list_total_sal)

  app.route('/employees/:empName')
    .put(todoList.update_a_emp)

  app.route('/employees/:empName')
    .delete(todoList.delete_a_emp);

  app.route('/login')
    .post(todoList.emp_login);  
    };