var express = require('express')
var app = express()
var path = require('path');

app.use('/bower_components',express.static('bower_components'));
app.use('/css',express.static('css'));

app.get('/:slug?', function (req, res) {
  var slug = req.params.slug, html =  __dirname + '/html/';
  if(slug) {
    html += slug + '.html';
  } else {
    html += 'index.html'
  }
  res.sendFile(path.join(html));
})


app.listen(3000)