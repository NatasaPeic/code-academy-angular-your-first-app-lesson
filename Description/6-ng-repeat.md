<!--
Let's do a quick review:

A module contains the different components of an AngularJS app
A controller manages the app's data
An expression displays values on the page
A filter formats the value of an expression
1.
Let's add more data to the controller and display them in the view.

In the controller, delete the $scope.product object.
2.
Attach a new property to $scope named products. Set it equal to an array of objects. Type in the contents exactly as you see here:

[
  {
    name: 'The Book of Trees',
    price: 19,
    pubdate: new Date('2014', '03', '08'),
    cover: 'img/the-book-of-trees.jpg'
  },
  {
    name: 'Program or be Programmed',
    price: 8,
    pubdate: new Date('2013', '08', '01'),
    cover: 'img/program-or-be-programmed.jpg'
  }
]
3.
In the view inside <div class="main">, delete the <div class="col-md-6"> element.

Replace it with this HTML. Type in the contents exactly as you see here:

<div ng-repeat="product in products" class="col-md-6">
  <div class="thumbnail">
    <img src="img/the-book-of-trees.jpg">
    <p class="title">{{ product.name }}</p>
    <p class="price">{{ product.price | currency }}</p>
    <p class="date">{{ product.pubdate | date }}</p>
  </div>
</div>
You'll see that both products have the same cover image. Let's fix this bug in the next exercise. Click Next to continue.


-->
