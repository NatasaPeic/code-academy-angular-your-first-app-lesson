<!--
Awesome! You built an AngularJS app. How does it work?

In app.js, we created a new module named myApp. A module contains the different components of an AngularJS app.
Then, in index.html we added <body ng-app="myApp">. The ng-app is called a directive. It tells AngularJS that the myApp module will live within the <body> element, termed the application's scope. In other words, we used the ng-app directive to define the application scope.
In MainController.js we created a new controller named MainController. A controller manages the app's data. Here we use the property title to store a string, and attach it to $scope.
Then, in index.html, we added <div class="main" ng-controller="MainController">. Like ng-app, ng-controller is a directive that defines the controller scope. This means that properties attached to $scope in MainController become available to use within <div class="main">.
Inside <div class="main"> we accessed $scope.title using {{ title }}. This is called an expression. Expressions are used to display values on the page.
The value of title showed up when we viewed the app in the browser.
Instructions
1.
Both the controller MainController and the view index.html have access to $scope. This means we can use $scope to communicate between the controller and the view. In the controller, change the value of title to your own string.
2.
Likewise, any new properties attached to $scope will become available to use in the view. In the controller, attach promo to $scope, and set its value to your own string.
3.
In the view under the <h1> element, add an <h2> element and use an expression to display promo on the page.
-->
