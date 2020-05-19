const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const config = require('./config');
const router = require('./network/routes');

const app = express();
app.use(express.static(path.resolve(config.PUBLIC_DIRECTORY)));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
router.generateRoutes(app);

function initExpress() {
  app.listen(config.PORT, () =>
    console.log(`Server listen on http://${config.HOST}:${config.PORT}`)
  );
}

async function connectMongoDB() {
  try {
    await mongoose
      .connect(config.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      })
      .then(() => {
        console.log('DATABASE IS CONNECT');
        initExpress();
      });
  } catch (error) {
    console.log(error);
    await mongoose.disconnect();
  }
}

connectMongoDB();
