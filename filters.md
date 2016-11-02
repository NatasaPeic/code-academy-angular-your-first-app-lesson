Well done! In the controller, you used an object to group together related data about a product. Then in the view, you used dot notation to display the values.
Instructions
1.
Currently the product price shows up as a number. It would be better to format it as a currency. Rather than change the data in the controller, let's use an AngularJS filter to format the data in the view.

In index.html in <p class="price">, change the expression to look like this:

{{ product.price | currency }}
We'll explain how this works in the next exercise.
