const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

// app.use(cors({ origin: 'http://localhost:3000' }));

app.use(bodyParser());
app.use('/restaurants/:id/', express.static(`${__dirname}/../public/`));

const port = 3000;

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});