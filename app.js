// app.js

var scheduleApp = angular.module('scheduleApp', ['firebase']);

scheduleApp.controller('mainController', ['$scope', function($scope, $firebase) {
	
	// connect to firebase
	var ref = new Firebase("https://fiery-torch-6995.firebaseIO.com/days");
	var fb = $firebase(ref);
	
	// function to set default data
	$scope.reset = function() {
		
		fb.$set({
			monday: {
				name: 'Monday',
				slots: {
					0900: {
						time: '9:00am',
						booked: false
					},
					01100: {
						time: '11:00am',
						booked: false
					}
				}
			},
			tuesday: {
				name: 'Tuesday',
				slots: {
					0900: {
						time: '9:00am',
						booked: false
					},
					01100: {
						time: '11:00am',
						booked: false
					}
				}
			}
		});
	};
	
}]);
