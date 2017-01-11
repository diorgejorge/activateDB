var connection = require('../connections');

function Tarefa() {
  this.listAll = function(res) {
   connection.acquire(function(err, con) {
     con.query('select * from issues', function(err, result) {
       con.release();
       res.send(result);
     });
   });
 };
 this.listFromProject = function(id,res) {
  connection.acquire(function(err, con) {
    con.query('select * from issues where project_id = ?',[id] ,function(err, result) {
      con.release();
      res.send(result);
    });
  });
};
this.emAndamento = function(res) {
 connection.acquire(function(err, con) {
   con.query("select issues.id,issues.tracker_id,issues.subject,issues.estimated_hours,users.firstname,users.lastname,issue_statuses.name from issues inner join users on users.id = issues.assigned_to_id inner join issue_statuses on issue_statuses.id = issues.status_id where due_date > now()",function(err, result) {
     con.release();
     res.send(result);
   });
 });
};
this.emAndamentoProjeto = function(id,res) {
 connection.acquire(function(err, con) {
   con.query('select issues.project_id,issues.id,issues.tracker_id,issues.subject,issues.estimated_hours,users.firstname,users.lastname,issue_statuses.name from issues inner join users on users.id = issues.assigned_to_id inner join issue_statuses on issue_statuses.id = issues.status_id where due_date > now() and project_id = ?',[id],function(err, result) {
     con.release();
     res.send(result);
   });
 });
};
this.clientePendentes = function(res) {
 connection.acquire(function(err, con) {
   con.query('select issues.project_id,issues.id,issues.due_date,issues.subject,issues.estimated_hours,users.firstname,users.lastname,issue_statuses.name from issues inner join users on users.id = issues.assigned_to_id inner join issue_statuses on issue_statuses.id = issues.status_id where due_date < now() and (users.id = 28 or users.id = 27)', function(err, result) {
     con.release();
     res.send(result);
   });
 });
};
}
module.exports = new Tarefa();
