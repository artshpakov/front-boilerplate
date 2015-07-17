app = angular.module 'BuzzoolaPub', ['ngRoute', 'pascalprecht.translate']

app.value 'data', window.PubData

app.config ($translateProvider) ->
  $translateProvider.useSanitizeValueStrategy null
  _.map window.i18n, (entry) ->
    locale = _.keys(entry)[0]
    $translateProvider.translations locale, entry[locale]
  $translateProvider.preferredLanguage('en')


app.config ['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) ->
  $routeProvider.when '/',
    templateUrl: '/templates/posts.html'
    controller: 'BuzzoolaPub.PostsCtrl'

  $locationProvider.html5Mode(true)
]
