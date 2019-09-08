const http = require('http');
const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    console.log('content-type', req.headers['content-type'])
    let postData = "";
    console.log('request:', req.headers['content-type']);
    req.on('data', chunk => { //随时来数据随时都会触发
      postData += chunk.toString();
    })
    req.on('end', chunk => {
      console.log('postData:', postData);
      res.end('hello world !');
    });
  }
})
server.listen(8001);
console.log("8001 ok");