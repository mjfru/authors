const express = require('express');
const cors = require('cors');
const app = express();

require('./config/mongoose.config');

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors({ origin: 'http://localhost:5173' }));

const authorRoutes = require('./routes/author.routes')
authorRoutes(app)

app.listen(8000, () => console.log('The back-end server is all fired up on Port 8000.'))
