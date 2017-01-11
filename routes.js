var projeto = require('./models/projeto');
var tarefa = require('./models/tarefa');
var user = require('./models/user')

module.exports = {
  configure: function(app) {
    app.get('/projetos/', function(req, res) {
      projeto.listAll(res);
    });
    app.get('/tarefas/', function(req, res) {
      tarefa.listAll(res);
    });
    app.get('/tarefas/a/', function(req, res) {
      tarefa.emAndamento(res);
    });
    app.get('/tarefas/:id/', function(req, res) {
      tarefa.listFromProject(req.params.id, res);
    });
    app.get('/tarefas/a/:id/', function(req, res) {
      tarefa.emAndamentoProjeto(req.params.id,res);
    });
    app.get('/tarefas/cliente/p/', function(req, res) {
      tarefa.clientePendentes(res);
    });
    app.get('/users/',function(req,res){
      user.listAll(res);
    });

  }
};
