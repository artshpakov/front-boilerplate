app.config ['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) ->
  $routeProvider.when '/',
    templateUrl: '/templates/components/posts/posts.html'
    controller: 'BuzzoolaPub.PostsCtrl'

  $locationProvider.html5Mode(true)
]
