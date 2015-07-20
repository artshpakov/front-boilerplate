app.controller 'BuzzoolaPub.LocalesCtrl', ['$scope', '$translate', ($scope, $translate) ->

  $scope.setLocale = (locale) ->
    $translate.use locale

]
