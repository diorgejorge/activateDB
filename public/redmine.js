var redmineApp = angular.module('redmineApp',[]);
//inicio controller
redmineApp.filter('getAge', function() {
    return function(input) {
        input =   moment(input, "YYYY-MM-DD").locale('pt').fromNow();
        return input;
      };
  }
);

redmineApp.filter('renderHTML', function($sce) {
    return function(text) {
      return  $sce.trustAsHtml(text);
    };
  }
);
function mainController($scope,$http){
  $scope.formData = {};
  $http.get('/tarefas/cliente/p')
        .success(function( data ) {
          $scope.tarefas = data;
          console.log(data);
        })
        .error(function(data){
          console.log('Error: '+ data);
        });


}
