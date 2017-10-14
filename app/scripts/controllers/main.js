'use strict';

angular.module('tareasApp')
  .controller('MainCtrl', function ($scope) {
  	$scope.tareas = [];
  	
  	$scope.addTarea = function(){
  		$scope.tareas.push($scope.tarea); //push para agregar lo que este en el campo $scope.tarea "ng-model='tarea"
  		$scope.tarea = ''; // se limpia el campo despues de agregar
  	};

  	$scope.eliminarTarea = function(index){
  		$scope.tareas.splice(index, 1);
  	};
  });
