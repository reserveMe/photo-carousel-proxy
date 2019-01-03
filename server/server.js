const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const cors = require('cors');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(cors({ origin: 'http://localhost:3000' }));

app.use(bodyParser());
app.use('/restaurants/:id/', express.static(`${__dirname}/../client/dist/`));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const port = 3003;
app.listen(port, () => {
  console.log(`Listening on port ${port} for FEC project`);
});
