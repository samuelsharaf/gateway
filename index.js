var http = require('http')
var server = http.createServer(function (request, response) {
  var remote_url = process.env.REMOTE_URL
  http.get(remote_url, function (remote_response) {
    console.log(`STATUS: ${remote_response.statusCode}`)
    console.log(`HEADERS: ${JSON.stringify(remote_response.headers)}`)
    var body = ''
    remote_response.on('data', function (chunk) {
      body += chunk
    })
    remote_response.on('end', function () {
      response.end(body)
    })
  }).on('error', function (e) {
    console.log('Got an error: ', e)
  })
})
var port = process.env.PORT || 5000
server.listen(port, '0.0.0.0')

