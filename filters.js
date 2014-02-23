var filters = angular.module('filters', [])

.filter('formatAuthor', function () {
  return function (unformattedAuthor) {
    var author = unformattedAuthor;
    author = author.split(' ')[1];
    author = author.replace(/\(/, '');
    author = author.replace(/\)/, '');
    return author;
  }
});