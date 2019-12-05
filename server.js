var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if(!port){
  console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
  process.exit(1)
}

var server = http.createServer(function(request, response){
  var parsedUrl = url.parse(request.url, true)
  var path = request.url 
  var query = ''
  if(path.indexOf('?') >= 0){ query = path.substring(path.indexOf('?')) }
  var pathNoQuery = parsedUrl.pathname
  var queryObject = parsedUrl.query
  var method = request.method

  /******** 从这里开始看，上面不要看 ************/

  console.log('HTTP 路径为\n' + path) 
  if(path === '/index.html' ){
    response.statusCode = 200
    response.setHeader('content-Type', 'text/html; charset="UTF-8"')
    let string = fs.readFileSync('public/index.html').toString()

    const page1 = fs.readFileSync('db/page1.json').toString()
    const array = JSON.parse(page1)
    const result = array.map(item=>`<li>${item.id}</li>`).join('')
    string = string.replace('{{page1}}', `<ul id="xxx">${result}</ul>`)

    response.write(string)
    response.end()
  }else if(path === '/main.js'){
    response.statusCode = 200
    response.setHeader('content-Type', 'text/javascript; charset="UTF-8"')	  
    response.write(fs.readFileSync('public/main.js'))
    response.end()
  }else if(path === '/style.css'){
    response.statusCode = 200
    response.setHeader('content-Type', 'text/css; charset="UTF-8"')
    response.write(fs.readFileSync('public/style.css'))
    response.end()
  }else if(path === '/2.js'){
    response.statusCode = 200
    response.setHeader('content-Type', 'text/javascript; charset="UTF-8"')
    response.write(fs.readFileSync('public/2.js'))
    response.end()
  }else if(path === '/3.html'){
    response.statusCode = 200
    response.setHeader('content-Type', 'text/html; charset="UTF-8"')
    response.write(fs.readFileSync('public/3.html'))
    response.end()
  }else if(path === '/4.xml'){
    response.statusCode = 200
    response.setHeader('content-Type', 'text/xml; charset="UTF-8"')
    response.write(fs.readFileSync('public/4.xml'))
    response.end()
  }else if(path === '/5.json'){
    response.statusCode = 200
    response.setHeader('content-Type', 'text/json; charset="UTF-8"')
    response.write(fs.readFileSync('public/5.json'))
    response.end()
  }else if(path === '/page2'){
    response.statusCode = 200
    response.setHeader('content-Type', 'text/json; charset="UTF-8"')
    response.write(fs.readFileSync('db/page2.json'))
    response.end()
  }else if(path === '/page3'){
    response.statusCode = 200
    response.setHeader('content-Type', 'text/json; charset="UTF-8"')
    response.write(fs.readFileSync('db/page3.json'))
    response.end()
  }else{
    response.statusCode = 404
    response.setHeader('content-Type', 'text/html; charset="UTF-8"')
    response.write('您输入的路径不存在对应内容')
    response.end()
  }



  /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)




// body{background-color: #ddd;}h1{color: red}