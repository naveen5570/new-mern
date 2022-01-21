// app.js

const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');
const auth = require('./middleware/auth');
const path = require('path');
const cookieParser = require('cookie-parser');


// routes
const requests = require('./routes/api/Req');
const books = require('./routes/api/books');

const users = require('./routes/api/Users');
const Professionals = require('./routes/api/Professionals');

const app = express();

// Connect Database
connectDB();
app.use(cookieParser());
// cors
app.use(cors({ origin: true, credentials: true }));

/*
app.get('/setcookie', (req, res) => {
  res.cookie('email','test');
  res.send('Cookie have been saved successfully');
});

*/

// Init Middleware
app.use(express.json({ extended: false }));

//app.get('/', (req, res) => res.send('Hello world!'));

if(process.env.NODE_ENV === "production"){
  app.use(express.static('react-frontend/build'));
  
}

app.get('*', (request, response) => {

  response.sendFile(path.join(__dirname, 'react-frontend/build', 'index.html'));
  
   });



// use Routes
app.use('/api/books', books);
app.use('/api/users', users);
app.use('/api/professionals', Professionals);
app.use('/api/requests', requests);





const port = process.env.PORT || 8082;






app.listen(port, () => console.log(`Server running on port ${port}`));