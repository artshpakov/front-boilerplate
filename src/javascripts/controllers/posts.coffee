app.controller 'BuzzoolaPub.PostsCtrl', ['$scope', '$translate', 'data', 'Post', ($scope, $translate, data, Post) ->

  $scope.posts = (new Post(attrs.author, attrs.text) for attrs in data.posts)

  $scope.setLocale = (locale) ->
  	$translate.use locale

]
