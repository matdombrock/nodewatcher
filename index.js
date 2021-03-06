
const express = require('express');
const app = express();
const port = 7331;

const fs = require('fs');

app.get('*', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const ua = req.get('User-Agent');
  const data = ip + ' ||| ' + ua + '\r\n'
  fs.appendFileSync(__dirname+'/log.txt', data);
  const cur = fs.readFileSync(__dirname+'/log.txt', 'utf-8');
  res.send('<pre>'+cur+'</pre>');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
