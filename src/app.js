require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const fighterRoutes = require('./routes/fighters');
const fightRoutes = require('./routes/fights');
const animeRoutes = require('./routes/animes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connexion à la base de données MongoDB
mongoose
  .connect(
    "mongodb+srv://" +
      process.env.DB_USER_PASS +
      "@cluster0.u5gcr.mongodb.net/anime-fight",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));

app.use('/api/fighters', fighterRoutes);
app.use('/api/fights', fightRoutes);
app.use('/api/animes', animeRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to Anime Fight Tracker API');
});

// Démarrage du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
