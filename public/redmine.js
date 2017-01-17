var redmineApp = angular.module('redmineApp',['angular.filter']);
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
redmineApp.filter('startsWith', function() {
    return function (actual, expected) {
      console.log(actual);
      console.log(expected);
    var lowerStr = (actual + "").toLowerCase();
    return lowerStr.indexOf(expected.toLowerCase()) === 0;
    };
  }
);
redmineApp.filter('totalSum', function() {
  return function (data, key) {
         if (angular.isUndefined(data) || angular.isUndefined(key))
             return 0;
         var sum = 0;
         var count = 0;
         angular.forEach(data,function(value){
             count = count+1;
             sum = sum + parseInt(value[key]);
         });
         return ((sum/(count*100))*100).toFixed(2);
     };
   }
);
redmineApp.controller('mainController',function ($scope,$http){
  $scope.formData = {};
  $http.get('/tarefas/cliente/p')
  .then(function successCallback(response) {
    $scope.tarefas = response.data;
    console.log(response.data);
  }, function errorCallback(response) {
    console.log('Error: '+ response.data);
  });
});
redmineApp.controller('tarefasProjetoController',function ($scope,$http){
  $scope.formData = {};
  $http.get('/tarefas/')
  .then(function successCallback(response) {
    $scope.tarefas = response.data;
    console.log(response.data);
  }, function errorCallback(response) {
    console.log('Error: '+ response.data);
  });
});
redmineApp.controller('statusReportController',function ($scope,$http){
  $scope.formData = {};
  $http.get('/projeto/tarefas/')
  .then(function successCallback(response) {
    $scope.tarefas = response.data;
    console.log(response.data);
  }, function errorCallback(response) {
    console.log('Error: '+ response.data);
  });
});

redmineApp.controller('tarefasProjetoBanparaController',function ($scope,$http){
  $scope.formData = {};
  $http.get('/projeto/tarefasCliente/28/')
  .then(function successCallback(response) {
    $scope.tarefas = response.data;
    console.log(response.data);
  }, function errorCallback(response) {
    console.log('Error: '+ response.data);
  });
});

redmineApp.controller('tarefasProjetoBasaController',function ($scope,$http){
  $scope.formData = {};
  $http.get('/projeto/tarefasCliente/27/')
  .then(function successCallback(response) {
    $scope.tarefas = response.data;
    console.log(response.data);
  }, function errorCallback(response) {
    console.log('Error: '+ response.data);
  });
});
