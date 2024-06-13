
const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

app.use(function(req, res, next) {
  res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  next();
});

app.use(cors())

app.use('/', express.static('public'));



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
