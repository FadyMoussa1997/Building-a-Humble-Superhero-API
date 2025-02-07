const express = require('express') ;
const cors = require('cors');
const app = express();


const port = 5555;
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
  }));

let superheroes = [];


app.post('/superheroes', (req , res) => {
    const {name, superpower, humility} = req.body;

    if(typeof humility !== "number" || humility < 1 || humility > 10) {
        return res.status(406).json({message: 'Humility Score must be between 1 - 10'});
    }

    superheroes.push({name, superpower, humility});

    res.status(201).json({message: 'SuperHero Created Successfully!'});
});


app.get('/superheroes', (req , res) => {

    const sortedHeroes = superheroes.sort((a, b) => a.humility - b.humility);

    if(sortedHeroes.length < 1) return res.status(404).json({message: 'No SuperHeroes Found'});

    res.status(200).json({message: 'SuperHeroes Fetched!', superheroes: sortedHeroes});

});

app.listen(port, () => {
    console.log(`Server By Fady Moussa started at: ${port}`);
  });





