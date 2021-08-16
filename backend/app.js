const express = require('express'); 
const mongoose = require('mongoose');

const saucesRoutes = require('./routes/sauces');
const authRoutes = require('./routes/auth'); 

const app = express();

const path = require('path');

mongoose.connect('mongodb+srv://PiqUser:KyLiAfUe2011@mycluster1.srkz5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


//middleware Cors
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/images', express.static(path.join(__dirname, 'images')));

/* ROUTES */
app.use('/api/sauces', saucesRoutes);
app.use('/api/auth', authRoutes);

module.exports = app;