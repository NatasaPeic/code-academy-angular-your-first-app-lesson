var app = require('../app');

app.controller('MainController',  ['$scope',
 function($scope) {
   $scope.title = 'Hello Angular!';
   $scope.promo = 'Boo!';
   $scope.products = [
 {
   name: 'The Book of Trees',
   price: 19,
   pubdate: new Date('2014', '03', '08'),
   cover: 'http://i.imgur.com/ln4kQIu.jpg',
   likes: 0,
   dislikes: 0
 },
 {
   name: 'The Book of Trees',
   price: 8,
   pubdate: new Date('2013', '08', '01'),
   cover: 'http://i.imgur.com/ln4kQIu.jpg' ,
   likes: 0,
   dislikes: 0
 }
];
   $scope.plusOne = function(index){
     $scope.products[index].likes += 1;
   };
   $scope.minusOne = function(index){
     $scope.products[index].dislikes +=1;
   };
 }]);
