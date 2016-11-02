So far we've made a static AngularJS app by adding properties in the controller and displaying them in the view. AngularJS is a framework for building dynamic web apps, so let's start to make this app interactive.
1.
In the controller in the $scope.products array, add a new property named likes to each element. Set all likes properties to 0.
2.
In the view under <p class="date">, type in a rating element:

<div class="rating">
  <p class="likes">+ </p>
</div>
Inside <p class="likes">, display a product's likes using an expression.
3.
Back in the controller after $scope.products, attach a new property to $scope named plusOne. Set it equal to function. Type in the contents exactly as you see here:

function(index) {
  $scope.products[index].likes += 1;
};
4.
In the view modify <p class="likes"> to look like this:

<p class="likes" ng-click="plusOne($index)">
View the AngularJS app in the browser. Click on the +0 in each product tile.
