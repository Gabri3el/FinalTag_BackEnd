const bodyParser = require('body-parser');
const cors = require('cors');

module.exports = app => {
    var corsOptions = {
        origin: '*',
        optionsSuccessStatus: 200,
      }
    app.use(cors(corsOptions));
    app.use(bodyParser.json())
}