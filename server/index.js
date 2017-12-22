const express = require('express');
const proxy = require('http-proxy-middleware');

const apiProxy = proxy(
  ['/dev/api/**', '/r/**', '/api/**'],
  { 
    target: 'https://reddit.com',
    changeOrigin: true,
  }
);

const app = express();

app.use(['/api', '/r', '/dev'], apiProxy);
app.use(express.static('public'));

app.listen(3000, () => console.log('Zen Reddit awaits at \'http://localhost:3000\''));
