<!--
Great! Each time you click on the number of likes, the number goes up. How does it work?

The ng-click is a directive. When <p class="likes"> is clicked, ng-click tells AngularJS to run the plusOne() function in the controller.
The plusOne() function gets the index of the product that was clicked, and then adds one to that product's likes property.
Notice that the plusOne() doesn't interact with the view at all; it just updates the controller. Any change made to the controller shows up in the view.
1.
In the controller in the $scope.products array, add a new property named dislikes to each element. Set dislikes to 0.
2.
In the view under <p class="likes">, add an element for <p class="dislikes">. Then display a product's dislikes using an expression.
3.
Back in the controller after $scope.products, attach a new property to $scope named minusOne. Set it equal to a function that adds one to a product's dislikes property. Adapt the code from the plusOne() function to do this.
4.
In the view, use ng-click to trigger the minusOne() function when <p class="dislikes"> is clicked.

View the AngularJS app in the browser. Click on the -0 in each product tile.
-->
