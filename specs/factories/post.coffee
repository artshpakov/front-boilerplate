Factory.define('post')
  .sequence('author', (index) -> "User#{ index }")
  .attr('text', 'Some random stuff')
