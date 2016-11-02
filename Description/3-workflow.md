<!--
So far this is our typical workflow when making an AngularJS app:

Create a module, and use ng-app in the view to define the application scope.
Create a controller, and use ng-controller in the view to define the controller scope.
Add data to $scope in the controller so they can be displayed with expressions in the view.
Instructions
1.
Let's add more data to the controller and display them in the view. In the controller, attach another property to $scope named product. Set it equal to an object with the following properties:

{
  name: 'The Book of Trees',
  price: 19
}
2.
Then, in index.html inside <p class="title">, access the product's name with product.name and display it using an expression.
3.
In <p class="price">, access and display the product's price.

-->
