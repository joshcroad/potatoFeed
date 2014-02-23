var app = angular.module('app', ['controllers', 'filters']);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/multi.html',
    controller: 'photoController'
  })
}]);


// This will be an ajax call to the flickr api.
var photosetData = ({
		"title": "Recent Uploads tagged potato",
		"link": "http://www.flickr.com/photos/tags/potato/",
		"description": "",
		"modified": "2014-02-23T05:56:15Z",
		"generator": "http://www.flickr.com/",
		"items": [
	   {
			"title": "Curried Sweet Potato Soup with Apricots",
			"link": "http://www.flickr.com/photos/96098309@N04/12712270833/",
			"media": {"m":"http://farm3.staticflickr.com/2827/12712270833_4d9a3b1692_m.jpg"},
			"date_taken": "2014-02-22T21:55:52-08:00",
			"description": " <p><a href=\"http://www.flickr.com/people/96098309@N04/\">pubat1735<\/a> posted a photo:<\/p> <p><a href=\"http://www.flickr.com/photos/96098309@N04/12712270833/\" title=\"Curried Sweet Potato Soup with Apricots\"><img src=\"http://farm3.staticflickr.com/2827/12712270833_4d9a3b1692_m.jpg\" width=\"159\" height=\"240\" alt=\"Curried Sweet Potato Soup with Apricots\" /><\/a><\/p> <p>A lovely, mind and creamy soup with sweet potatoes and dried apricots.<\/p>",
			"published": "2014-02-23T05:56:15Z",
			"author": "nobody@flickr.com (pubat1735)",
			"author_id": "96098309@N04",
			"tags": "winter food cold glass soup vegan warm curry potato vegetarian apricot appetizer lovely sweetpotato creamy mild"
	   },
	   {
			"title": "French Fries with Vegan Cheddar Spinach Dip",
			"link": "http://www.flickr.com/photos/96098309@N04/12712078345/",
			"media": {"m":"http://farm6.staticflickr.com/5537/12712078345_4ca7613392_m.jpg"},
			"date_taken": "2014-02-22T21:54:09-08:00",
			"description": " <p><a href=\"http://www.flickr.com/people/96098309@N04/\">pubat1735<\/a> posted a photo:<\/p> <p><a href=\"http://www.flickr.com/photos/96098309@N04/12712078345/\" title=\"French Fries with Vegan Cheddar Spinach Dip\"><img src=\"http://farm6.staticflickr.com/5537/12712078345_4ca7613392_m.jpg\" width=\"240\" height=\"159\" alt=\"French Fries with Vegan Cheddar Spinach Dip\" /><\/a><\/p> <p>French fries with a tasty vegan cheddar spinach dip.<\/p>",
			"published": "2014-02-23T05:58:48Z",
			"author": "nobody@flickr.com (pubat1735)",
			"author_id": "96098309@N04",
			"tags": "food vegan fastfood vegetable frenchfries potato fries vegetarian dip spinach vegancheese vision:food=0811 vision:plant=0673"
	   },
	   {
			"title": "hamburger spring potato",
			"link": "http://www.flickr.com/photos/bour3/12711001774/",
			"media": {"m":"http://farm4.staticflickr.com/3781/12711001774_5b5663a558_m.jpg"},
			"date_taken": "2014-02-22T20:02:52-08:00",
			"description": " <p><a href=\"http://www.flickr.com/people/bour3/\">bour3<\/a> posted a photo:<\/p> <p><a href=\"http://www.flickr.com/photos/bour3/12711001774/\" title=\"hamburger spring potato\"><img src=\"http://farm4.staticflickr.com/3781/12711001774_5b5663a558_m.jpg\" width=\"240\" height=\"159\" alt=\"hamburger spring potato\" /><\/a><\/p> <p>hamburger spring potato<\/p>",
			"published": "2014-02-23T04:02:52Z",
			"author": "nobody@flickr.com (bour3)",
			"author_id": "8411761@N03",
			"tags": "spring potato hamburger vision:food=0728"
	   },
	   {
			"title": "hamburger spring potato",
			"link": "http://www.flickr.com/photos/bour3/12710720493/",
			"media": {"m":"http://farm4.staticflickr.com/3732/12710720493_e75287a7cd_m.jpg"},
			"date_taken": "2014-02-22T20:02:55-08:00",
			"description": " <p><a href=\"http://www.flickr.com/people/bour3/\">bour3<\/a> posted a photo:<\/p> <p><a href=\"http://www.flickr.com/photos/bour3/12710720493/\" title=\"hamburger spring potato\"><img src=\"http://farm4.staticflickr.com/3732/12710720493_e75287a7cd_m.jpg\" width=\"240\" height=\"159\" alt=\"hamburger spring potato\" /><\/a><\/p> <p>hamburger spring potato<\/p>",
			"published": "2014-02-23T04:02:55Z",
			"author": "nobody@flickr.com (bour3)",
			"author_id": "8411761@N03",
			"tags": "spring potato hamburger"
	   },
	   {
			"title": "hamburger spring potato",
			"link": "http://www.flickr.com/photos/bour3/12711002484/",
			"media": {"m":"http://farm8.staticflickr.com/7293/12711002484_5fb088f508_m.jpg"},
			"date_taken": "2014-02-22T20:02:54-08:00",
			"description": " <p><a href=\"http://www.flickr.com/people/bour3/\">bour3<\/a> posted a photo:<\/p> <p><a href=\"http://www.flickr.com/photos/bour3/12711002484/\" title=\"hamburger spring potato\"><img src=\"http://farm8.staticflickr.com/7293/12711002484_5fb088f508_m.jpg\" width=\"240\" height=\"159\" alt=\"hamburger spring potato\" /><\/a><\/p> <p>hamburger spring potato<\/p>",
			"published": "2014-02-23T04:02:54Z",
			"author": "nobody@flickr.com (bour3)",
			"author_id": "8411761@N03",
			"tags": "spring potato hamburger vision:food=0777 vision:outdoor=0906"
	   },
	   {
			"title": "hamburger spring potato",
			"link": "http://www.flickr.com/photos/bour3/12711001904/",
			"media": {"m":"http://farm8.staticflickr.com/7425/12711001904_40a136c3a1_m.jpg"},
			"date_taken": "2014-02-22T20:02:52-08:00",
			"description": " <p><a href=\"http://www.flickr.com/people/bour3/\">bour3<\/a> posted a photo:<\/p> <p><a href=\"http://www.flickr.com/photos/bour3/12711001904/\" title=\"hamburger spring potato\"><img src=\"http://farm8.staticflickr.com/7425/12711001904_40a136c3a1_m.jpg\" width=\"240\" height=\"159\" alt=\"hamburger spring potato\" /><\/a><\/p> <p>hamburger spring potato<\/p>",
			"published": "2014-02-23T04:02:52Z",
			"author": "nobody@flickr.com (bour3)",
			"author_id": "8411761@N03",
			"tags": "spring potato hamburger vision:food=0816 vision:outdoor=052"
	   },
	   {
			"title": "hamburger spring potato",
			"link": "http://www.flickr.com/photos/bour3/12710720393/",
			"media": {"m":"http://farm8.staticflickr.com/7309/12710720393_c603d10124_m.jpg"},
			"date_taken": "2014-02-22T20:02:55-08:00",
			"description": " <p><a href=\"http://www.flickr.com/people/bour3/\">bour3<\/a> posted a photo:<\/p> <p><a href=\"http://www.flickr.com/photos/bour3/12710720393/\" title=\"hamburger spring potato\"><img src=\"http://farm8.staticflickr.com/7309/12710720393_c603d10124_m.jpg\" width=\"240\" height=\"159\" alt=\"hamburger spring potato\" /><\/a><\/p> <p>hamburger spring potato<\/p>",
			"published": "2014-02-23T04:02:55Z",
			"author": "nobody@flickr.com (bour3)",
			"author_id": "8411761@N03",
			"tags": "spring potato hamburger vision:food=081 vision:outdoor=0887"
	   },
	   {
			"title": "hamburger spring potato",
			"link": "http://www.flickr.com/photos/bour3/12711003054/",
			"media": {"m":"http://farm3.staticflickr.com/2809/12711003054_7ee3dceced_m.jpg"},
			"date_taken": "2014-02-22T20:02:56-08:00",
			"description": " <p><a href=\"http://www.flickr.com/people/bour3/\">bour3<\/a> posted a photo:<\/p> <p><a href=\"http://www.flickr.com/photos/bour3/12711003054/\" title=\"hamburger spring potato\"><img src=\"http://farm3.staticflickr.com/2809/12711003054_7ee3dceced_m.jpg\" width=\"240\" height=\"159\" alt=\"hamburger spring potato\" /><\/a><\/p> <p>hamburger spring potato<\/p>",
			"published": "2014-02-23T04:02:56Z",
			"author": "nobody@flickr.com (bour3)",
			"author_id": "8411761@N03",
			"tags": "spring potato hamburger vision:food=0661"
	   },
	   {
			"title": "hamburger spring potato",
			"link": "http://www.flickr.com/photos/bour3/12711005164/",
			"media": {"m":"http://farm8.staticflickr.com/7320/12711005164_f361dda07a_m.jpg"},
			"date_taken": "2014-02-22T20:03:06-08:00",
			"description": " <p><a href=\"http://www.flickr.com/people/bour3/\">bour3<\/a> posted a photo:<\/p> <p><a href=\"http://www.flickr.com/photos/bour3/12711005164/\" title=\"hamburger spring potato\"><img src=\"http://farm8.staticflickr.com/7320/12711005164_f361dda07a_m.jpg\" width=\"240\" height=\"159\" alt=\"hamburger spring potato\" /><\/a><\/p> <p>hamburger spring potato<\/p>",
			"published": "2014-02-23T04:03:06Z",
			"author": "nobody@flickr.com (bour3)",
			"author_id": "8411761@N03",
			"tags": "spring potato hamburger vision:food=0828 vision:outdoor=0598 vision:plant=0747"
	   },
	   {
			"title": "hamburger spring potato",
			"link": "http://www.flickr.com/photos/bour3/12710723103/",
			"media": {"m":"http://farm8.staticflickr.com/7386/12710723103_0bb5b2bde8_m.jpg"},
			"date_taken": "2014-02-22T20:03:05-08:00",
			"description": " <p><a href=\"http://www.flickr.com/people/bour3/\">bour3<\/a> posted a photo:<\/p> <p><a href=\"http://www.flickr.com/photos/bour3/12710723103/\" title=\"hamburger spring potato\"><img src=\"http://farm8.staticflickr.com/7386/12710723103_0bb5b2bde8_m.jpg\" width=\"240\" height=\"159\" alt=\"hamburger spring potato\" /><\/a><\/p> <p>hamburger spring potato<\/p>",
			"published": "2014-02-23T04:03:05Z",
			"author": "nobody@flickr.com (bour3)",
			"author_id": "8411761@N03",
			"tags": "spring potato hamburger vision:food=0672 vision:outdoor=0924"
	   },
	   {
			"title": "hamburger spring potato",
			"link": "http://www.flickr.com/photos/bour3/12710549585/",
			"media": {"m":"http://farm8.staticflickr.com/7365/12710549585_1b349090db_m.jpg"},
			"date_taken": "2014-02-22T20:02:53-08:00",
			"description": " <p><a href=\"http://www.flickr.com/people/bour3/\">bour3<\/a> posted a photo:<\/p> <p><a href=\"http://www.flickr.com/photos/bour3/12710549585/\" title=\"hamburger spring potato\"><img src=\"http://farm8.staticflickr.com/7365/12710549585_1b349090db_m.jpg\" width=\"240\" height=\"159\" alt=\"hamburger spring potato\" /><\/a><\/p> <p>hamburger spring potato<\/p>",
			"published": "2014-02-23T04:02:53Z",
			"author": "nobody@flickr.com (bour3)",
			"author_id": "8411761@N03",
			"tags": "spring potato hamburger vision:food=0847"
	   },
	   {
			"title": "potato cake fried egg ham",
			"link": "http://www.flickr.com/photos/bour3/12710534203/",
			"media": {"m":"http://farm4.staticflickr.com/3720/12710534203_89238f9166_m.jpg"},
			"date_taken": "2014-02-22T19:50:20-08:00",
			"description": " <p><a href=\"http://www.flickr.com/people/bour3/\">bour3<\/a> posted a photo:<\/p> <p><a href=\"http://www.flickr.com/photos/bour3/12710534203/\" title=\"potato cake fried egg ham\"><img src=\"http://farm4.staticflickr.com/3720/12710534203_89238f9166_m.jpg\" width=\"240\" height=\"159\" alt=\"potato cake fried egg ham\" /><\/a><\/p> <p>potato cake fried egg ham<\/p>",
			"published": "2014-02-23T03:50:20Z",
			"author": "nobody@flickr.com (bour3)",
			"author_id": "8411761@N03",
			"tags": "cake egg ham potato fried vision:food=0927"
	   },
	   {
			"title": "potato cake fried egg ham",
			"link": "http://www.flickr.com/photos/bour3/12710532473/",
			"media": {"m":"http://farm8.staticflickr.com/7392/12710532473_b6be3e250c_m.jpg"},
			"date_taken": "2014-02-22T19:50:13-08:00",
			"description": " <p><a href=\"http://www.flickr.com/people/bour3/\">bour3<\/a> posted a photo:<\/p> <p><a href=\"http://www.flickr.com/photos/bour3/12710532473/\" title=\"potato cake fried egg ham\"><img src=\"http://farm8.staticflickr.com/7392/12710532473_b6be3e250c_m.jpg\" width=\"240\" height=\"159\" alt=\"potato cake fried egg ham\" /><\/a><\/p> <p>potato cake fried egg ham<\/p>",
			"published": "2014-02-23T03:50:13Z",
			"author": "nobody@flickr.com (bour3)",
			"author_id": "8411761@N03",
			"tags": "cake egg ham potato fried vision:food=0897"
	   },
	   {
			"title": "potato cake fried egg ham",
			"link": "http://www.flickr.com/photos/bour3/12710816104/",
			"media": {"m":"http://farm6.staticflickr.com/5548/12710816104_60597aafbd_m.jpg"},
			"date_taken": "2014-02-22T19:50:11-08:00",
			"description": " <p><a href=\"http://www.flickr.com/people/bour3/\">bour3<\/a> posted a photo:<\/p> <p><a href=\"http://www.flickr.com/photos/bour3/12710816104/\" title=\"potato cake fried egg ham\"><img src=\"http://farm6.staticflickr.com/5548/12710816104_60597aafbd_m.jpg\" width=\"240\" height=\"159\" alt=\"potato cake fried egg ham\" /><\/a><\/p> <p>potato cake fried egg ham<\/p>",
			"published": "2014-02-23T03:50:11Z",
			"author": "nobody@flickr.com (bour3)",
			"author_id": "8411761@N03",
			"tags": "cake egg ham potato fried vision:food=0877"
	   },
	   {
			"title": "potato cake fried egg ham",
			"link": "http://www.flickr.com/photos/bour3/12710361545/",
			"media": {"m":"http://farm8.staticflickr.com/7305/12710361545_05b1f35de8_m.jpg"},
			"date_taken": "2014-02-22T19:50:23-08:00",
			"description": " <p><a href=\"http://www.flickr.com/people/bour3/\">bour3<\/a> posted a photo:<\/p> <p><a href=\"http://www.flickr.com/photos/bour3/12710361545/\" title=\"potato cake fried egg ham\"><img src=\"http://farm8.staticflickr.com/7305/12710361545_05b1f35de8_m.jpg\" width=\"240\" height=\"159\" alt=\"potato cake fried egg ham\" /><\/a><\/p> <p>potato cake fried egg ham<\/p>",
			"published": "2014-02-23T03:50:23Z",
			"author": "nobody@flickr.com (bour3)",
			"author_id": "8411761@N03",
			"tags": "cake egg ham potato fried vision:food=0785 vision:outdoor=0802"
	   },
	   {
			"title": "potato cake fried egg ham",
			"link": "http://www.flickr.com/photos/bour3/12710532083/",
			"media": {"m":"http://farm8.staticflickr.com/7352/12710532083_34707ce02d_m.jpg"},
			"date_taken": "2014-02-22T19:50:12-08:00",
			"description": " <p><a href=\"http://www.flickr.com/people/bour3/\">bour3<\/a> posted a photo:<\/p> <p><a href=\"http://www.flickr.com/photos/bour3/12710532083/\" title=\"potato cake fried egg ham\"><img src=\"http://farm8.staticflickr.com/7352/12710532083_34707ce02d_m.jpg\" width=\"240\" height=\"159\" alt=\"potato cake fried egg ham\" /><\/a><\/p> <p>potato cake fried egg ham<\/p>",
			"published": "2014-02-23T03:50:12Z",
			"author": "nobody@flickr.com (bour3)",
			"author_id": "8411761@N03",
			"tags": "cake egg ham potato fried"
	   },
	   {
			"title": "potato cake fried egg ham",
			"link": "http://www.flickr.com/photos/bour3/12710530333/",
			"media": {"m":"http://farm8.staticflickr.com/7441/12710530333_5fcd69568f_m.jpg"},
			"date_taken": "2014-02-22T19:50:05-08:00",
			"description": " <p><a href=\"http://www.flickr.com/people/bour3/\">bour3<\/a> posted a photo:<\/p> <p><a href=\"http://www.flickr.com/photos/bour3/12710530333/\" title=\"potato cake fried egg ham\"><img src=\"http://farm8.staticflickr.com/7441/12710530333_5fcd69568f_m.jpg\" width=\"240\" height=\"159\" alt=\"potato cake fried egg ham\" /><\/a><\/p> <p>potato cake fried egg ham<\/p>",
			"published": "2014-02-23T03:50:05Z",
			"author": "nobody@flickr.com (bour3)",
			"author_id": "8411761@N03",
			"tags": "cake egg ham potato fried vision:mountain=0507 vision:outdoor=0752"
	   },
	   {
			"title": "potato cake fried egg ham",
			"link": "http://www.flickr.com/photos/bour3/12710534533/",
			"media": {"m":"http://farm8.staticflickr.com/7315/12710534533_164da9e8c1_m.jpg"},
			"date_taken": "2014-02-22T19:50:22-08:00",
			"description": " <p><a href=\"http://www.flickr.com/people/bour3/\">bour3<\/a> posted a photo:<\/p> <p><a href=\"http://www.flickr.com/photos/bour3/12710534533/\" title=\"potato cake fried egg ham\"><img src=\"http://farm8.staticflickr.com/7315/12710534533_164da9e8c1_m.jpg\" width=\"240\" height=\"159\" alt=\"potato cake fried egg ham\" /><\/a><\/p> <p>potato cake fried egg ham<\/p>",
			"published": "2014-02-23T03:50:22Z",
			"author": "nobody@flickr.com (bour3)",
			"author_id": "8411761@N03",
			"tags": "cake egg ham potato fried vision:text=0587 vision:outdoor=0633"
	   },
	   {
			"title": "potato cake fried egg ham",
			"link": "http://www.flickr.com/photos/bour3/12710535183/",
			"media": {"m":"http://farm6.staticflickr.com/5507/12710535183_22c67099ff_m.jpg"},
			"date_taken": "2014-02-22T19:50:24-08:00",
			"description": " <p><a href=\"http://www.flickr.com/people/bour3/\">bour3<\/a> posted a photo:<\/p> <p><a href=\"http://www.flickr.com/photos/bour3/12710535183/\" title=\"potato cake fried egg ham\"><img src=\"http://farm6.staticflickr.com/5507/12710535183_22c67099ff_m.jpg\" width=\"240\" height=\"159\" alt=\"potato cake fried egg ham\" /><\/a><\/p> <p>potato cake fried egg ham<\/p>",
			"published": "2014-02-23T03:50:24Z",
			"author": "nobody@flickr.com (bour3)",
			"author_id": "8411761@N03",
			"tags": "cake egg ham potato fried vision:food=0833 vision:outdoor=071"
	   },
	   {
			"title": "potato cake fried egg ham",
			"link": "http://www.flickr.com/photos/bour3/12710817694/",
			"media": {"m":"http://farm4.staticflickr.com/3735/12710817694_31f4a14524_m.jpg"},
			"date_taken": "2014-02-22T19:50:18-08:00",
			"description": " <p><a href=\"http://www.flickr.com/people/bour3/\">bour3<\/a> posted a photo:<\/p> <p><a href=\"http://www.flickr.com/photos/bour3/12710817694/\" title=\"potato cake fried egg ham\"><img src=\"http://farm4.staticflickr.com/3735/12710817694_31f4a14524_m.jpg\" width=\"240\" height=\"159\" alt=\"potato cake fried egg ham\" /><\/a><\/p> <p>potato cake fried egg ham<\/p>",
			"published": "2014-02-23T03:50:18Z",
			"author": "nobody@flickr.com (bour3)",
			"author_id": "8411761@N03",
			"tags": "cake egg ham potato fried vision:food=0776"
	   }
        ]
})