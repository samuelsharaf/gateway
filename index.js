var http = require('http')
var server = http.createServer(function (request, response) {
  var url = 'http://jsonplaceholder.typicode.com/posts/1'
  http.get(url, function (res) {
    var body = ''
    res.on('data', function (chunk) {
      body += chunk
    })
    res.on('end', function () {
      var fbResponse = JSON.parse(body)
      console.log('Got a response: ', fbResponse.body)
      response.end(body)
    })
  }).on('error', function (e) {
    console.log('Got an error: ', e)
  })
})
var port = process.env.PORT || 5000
server.listen(port, '0.0.0.0')

