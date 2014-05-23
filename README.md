Flickr Public Feed SPA
======================

[![Build Status](https://travis-ci.org/joshcroad/potatoFeed.png?branch=master)](https://travis-ci.org/joshcroad/potatoFeed)

A Single Page Application that consumes the Flickr public photo JSON API feed.

### Current Issues
- Flickr Feed only returns the most recent 20 images.
  - A way around this would be to store the feed as it comes in.
- Published date format requires 'st', 'nd', 'rd' or 'th'
  - Core date filter in Angular does not support this. Will need to write custom filter.
- Images listed 
