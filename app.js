// we import the express library
const express = require('express');
// we create the `app`. whatever that is. (an `app` is a place to define our routes/endpoints)
const app = express();
// we'll also import cors for reasons
const cors = require('cors');
// import data list
const { clothesInventory } = require('./data.js');

// we do the cors stuff
app.use(cors());

app.get('/', (req, res) => {
    res.send('My Home Page');
});

app.get('/inventory', (req, res) => {
    res.json({ inventory: clothesInventory });
});

app.get('/inventory/:id', (req, res) => {
    const id = Number(req.params.id);

    const clothingItem = clothesInventory.find((clothes) => clothes.id === id);

    res.json({ inventory: clothingItem });
});

module.exports = {
    app
};