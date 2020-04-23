const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist/jigokucade'));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/jigokucade/index.html'));
});

app.listen(process.env.PORT || 8080);


