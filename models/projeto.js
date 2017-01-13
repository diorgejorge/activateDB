var connection = require('../connections');

function Projeto() {
  this.listAll = function(res) {
   connection.acquire(function(err, con) {
     con.query('select * from projects', function(err, result) {
       con.release();
       res.send(result);
     });
   })};
 this.listTarefasProjeto = function(res) {
  connection.acquire(function(err, con) {
    con.query('select projects.name \'projectName\',issues.description,users.id \'userID\',issues.done_ratio,issues.id,issues.due_date,issues.subject,issues.estimated_hours,users.firstname,users.lastname,issue_statuses.name from issues inner join users on users.id = issues.assigned_to_id inner join issue_statuses on issue_statuses.id = issues.status_id inner join projects on projects.id = issues.project_id where due_date < now()', function(err, result) {
      con.release();
      res.send(result);
    });
  })};
  this.listTarefasProjetoCliente = function(id,res) {
   connection.acquire(function(err, con) {
     con.query('select projects.name \'projectName\',issues.description,users.id \'userID\',issues.done_ratio,issues.id,issues.due_date,issues.subject,issues.estimated_hours,users.firstname,users.lastname,issue_statuses.name from issues inner join users on users.id = issues.assigned_to_id inner join issue_statuses on issue_statuses.id = issues.status_id inner join projects on projects.id = issues.project_id where due_date < now() and users.id = ?',[id], function(err, result) {
       con.release();
       res.send(result);
     });
   })};
};
module.exports = new Projeto();
