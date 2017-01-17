var projeto = require('./models/projeto');
var tarefa = require('./models/tarefa');
var user = require('./models/user')

module.exports = {
  configure: function(app) {
    app.get('/projetos/', function(req, res) {
      projeto.listAll(res);
    });
    app.get('/projeto/tarefas/', function(req, res) {
      projeto.listTarefasProjeto(res);
    });
    app.get('/projeto/tarefasCliente/:id/', function(req, res) {
      projeto.listTarefasProjetoCliente(req.params.id,res);
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
    app.get('/pendenteCliente',function(req,res){
      res.redirect('/views/pendenteCliente.html');
    });
    app.get('/tarefasBasa',function(req,res){
      res.redirect('/views/tarefasBasa.html');
    });
    app.get('/tarefasBanpara',function(req,res){
      res.redirect('/views/tarefasBanpara.html');
    });
    app.get('/tarefasProjeto',function(req,res){
      res.redirect('/views/tarefasProjeto.html');
    });
    app.get('/tarefasProjetoPendentes',function(req,res){
      res.redirect('/views/tarefasProjetoPendentes.html');
    });
    app.get('/statusReport',function(req,res){
      res.redirect('/views/statusReport.html');
    });
    app.get('/',function(req,res){
      res.redirect('/views/index.html');
    });

  }
};
