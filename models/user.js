var connection = require('../connections');

function User() {
  this.listAll = function(res) {
   connection.acquire(function(err, con) {
     con.query('select * from users', function(err, result) {
       con.release();
       res.send(result);
     });
   });
 };

 this.get = function(id,res) {
  connection.acquire(function(err, con) {
    con.query('select * from users where id = ?', [id] , function(err, result) {
      con.release();
      res.send(result);
    });
  });
};
}
module.exports = new User();
