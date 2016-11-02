<!--
Well done! You got both books in $scope.products to show up in the view. How does it work?

In the controller, we used products to store an array containing two objects.
Then in the view, we added <div ng-repeat="product in products">. Like ng-app and ng-controller, the ng-repeat is a directive. It loops through an array and displays each element. Here, the ng-repeat repeats all the HTML inside <div class="col-md-6"> for each element in the products array.
In this way, ng-repeat shows both products in the $scope.products array. Instead of writing the same HTML twice as before, we just use ng-repeat to generate the HTML twice.
Instructions
1.
The problem now is that both products have the same image. Let's fix this.

In the view inside <div class="col-md-6">, replace

<img src="img/the-book-of-trees.jpg">
with

<img ng-src="{{ product.cover }}">
The ng-src is a directive that sets the <img> element's src to a property in the controller.
-->
