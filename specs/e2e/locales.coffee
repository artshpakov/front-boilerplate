describe 'Localization', ->

  it 'should pick proper phrases', ->
    browser.get('/')

    element.all(By.css('.post-headline')).each (headline) ->
      headline.getText().then (text) ->
        expect(text.match /says/).not.toBeNull()

    element(By.css('#locale-switch [data-locale=ru]')).click()

    element.all(By.css('.post-headline')).each (headline) ->
      headline.getText().then (text) ->
        expect(text.match /пишет/).not.toBeNull()
