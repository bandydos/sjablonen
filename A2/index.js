const express = require('express');
const app = express();

const PORT = 3000;

// Listen on port.
app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));

// Middleware (static files).
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules/jquery/dist'));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static(__dirname + '/node_modules/bootstrap-icons'));

// Send.
app.get('/', (req, res) => res.send('Main'));
