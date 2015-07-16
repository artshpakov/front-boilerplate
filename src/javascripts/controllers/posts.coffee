app.controller 'BuzzoolaPub.PostsCtrl', ['$scope', 'data', 'Post', ($scope, data, Post) ->

  $scope.posts = (new Post(attrs.author, attrs.text) for attrs in data.posts)

]
