'use strict';

angular.module('rastros')
.controller('RegisterController', function ($scope, user, fireb, flow) {
	$scope.form = {};

	$scope.register = function () {
		var form = $scope.form;

		if (!form.email || !form.password) {
			return;
		}

		user.create(form.email, form.password);
	};

	$scope.goToLogin = function () {
		flow.goTo('/meu/login');
	};

	$scope.$on('user:changed', function (event, data) {
		$scope.user = data;
	});

	$scope.$on('$viewContentLoaded', function () {
		$scope.user = user.isLogged();
	});
});