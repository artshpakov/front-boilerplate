describe 'Index page', ->

  it 'should have a title', ->
    browser.get('/')
    expect(element(By.id('posts')).isPresent()).toBeTruthy()
