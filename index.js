var http = require('http')
var server = http.createServer(function (request, response) {
  var remoteUrl = `service.${process.env.SERVICE_APP_NAME}.app.localspace`
  http.get(remoteUrl, function (remoteResponse) {
    console.log(`STATUS: ${remoteResponse.statusCode}`)
    console.log(`HEADERS: ${JSON.stringify(remoteResponse.headers)}`)
    var body = ''
    remoteResponse.on('data', function (chunk) {
      body += chunk
    })
    remoteResponse.on('end', function () {
      response.end(body)
    })
  }).on('error', function (e) {
    console.log('Got an error: ', e)
  })
})
var port = process.env.PORT || 5000
server.listen(port, '0.0.0.0')

