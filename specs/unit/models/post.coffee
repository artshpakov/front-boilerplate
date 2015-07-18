describe 'Post', ->

  samplePost = Factory.build('post')

  Post = null
  beforeEach module('BuzzoolaPub')
  beforeEach inject (_Post_) -> Post = _Post_


  it 'allows to initialize posts', () ->
    post = new Post(samplePost.author, samplePost.text)
    expect(post.author).to.equal samplePost.author
    expect(post.text).to.equal samplePost.text
