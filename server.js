/* eslint-env es6 */
const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;

// Serve only static files from dist directory
app.use(express.static('./dist/pwa-test/'));

app.get('/*', (req, res) => {
  res.sendFile('index.html', { root: 'dist/pwa-test/' });
});

// Start app by listerning on default Heroku port
app.listen(PORT);
