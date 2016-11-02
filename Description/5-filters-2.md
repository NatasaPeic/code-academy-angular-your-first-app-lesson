<!--
Great! The product price changed from a number to a formatted currency. How does it work?

AngularJS gets the value of product.price.
It sends this number into the currency filter. The pipe symbol (|) takes the output on the left and "pipes" it to the right.
The filter outputs a formatted currency with the dollar sign and the correct decimal places.
In this way, filters help to separate the content in the controller from its presentation in the view.
Instructions
1.
AngularJS comes with a few more built-in filters. Let's use two more.

In MainController.js inside $scope.product, add a third property named pubdate:

pubdate: new Date('2014', '03', '08')
2.
In index.html inside <p class="date">, display the product's pubdate.
3.
Format the product's pubdate by piping it to the date filter.
4.
Format the product's name by piping it to the uppercase filter.
-->
