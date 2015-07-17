describe 'Index page', ->

  it 'should have posts loop', ->
    browser.get('/')
    expect(element(By.repeater('post in posts')).isPresent()).toBeTruthy()
