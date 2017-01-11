var connection = require('../connections');

function Projeto() {
  this.listAll = function(res) {
   connection.acquire(function(err, con) {
     con.query('select * from projects', function(err, result) {
       con.release();
       res.send(result);
     });
   });
 };
}
module.exports = new Projeto();
