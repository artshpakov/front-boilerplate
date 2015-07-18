describe 'Posts Controller', ->

  posts = (Factory.build('post') for [0..2])

  Post = controller = scope = null
  beforeEach module 'BuzzoolaPub'
  beforeEach inject (_Post_, $controller, $rootScope) ->
    Post        = _Post_
    scope       = $rootScope.$new()
    controller  = $controller 'BuzzoolaPub.PostsCtrl', $scope: scope, data: {posts}


  it 'instantiates posts on load', ->
    expect(scope.posts.length).to.equal(posts.length)
    _.each scope.posts, (post) ->
      expect(post).to.be.an.instanceOf(Post)
