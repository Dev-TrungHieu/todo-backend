const express = require('express');
const router = require('./src/routers/index')
const allRouter = require('express-list-endpoints');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', router);

app.listen(port, () => {
  console.log(`server running on port 4000 !`);
  console.log('All api app Todo');
  console.log(allRouter(app));
});
