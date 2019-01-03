const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use('/restaurant/photos', express.static(`${dirname}/client/dist/`));
app.use(bodyParser.json());
app.use(bodyparser.urlencoded({ extended: true }));

const port = 3003;
app.listen(port, () => {
  console.log(`Listening on port ${port} for FEC project`);
})