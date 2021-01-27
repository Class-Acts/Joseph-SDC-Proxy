const express = require('express');
const PORT = 1010;
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '..', 'public')));


app.listen(PORT, () => {
  console.log('listening at port' + PORT);
})