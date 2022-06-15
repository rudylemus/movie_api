const express = require('express');
const app = express();
morgan = require('morgan');

let topMovies = [
    {
        title: 'End of Watch',
        director: 'David Ayer',
        genre: 'Action',
        year: '2012'
    },
    {
        title: 'American Psycho',
        director: 'Mary Harron',
        genre: 'Horror',
        year: '2000'
    },
    {
        title: 'Goodfellas',
        director: 'Martin Scorsese',
        genre: 'Crime',
        year: '1990'
    },
    {
        title: 'Avatar',
        director: 'James Cameron',
        genre: 'Action',
        year: '2009'
    },
    {
        title: 'The Matrix',
        director: 'Lana Wachowski',
        genre: 'Action',
        year: '1999'
    },
    {
        title: 'Saving Private Ryan',
        director: 'Steven Spielberg',
        genre: 'Drama',
        year: '1998'
    },
    {
        title: 'Terminator 2: Judgment Day',
        director: 'James Cameron',
        genre: 'Action',
        year: '1991'
    },
    {
        title: 'Crash',
        director: 'Paul Haggis',
        genre: 'Drama',
        year: '2004'
    },
    {
        title: 'The Truman Show',
        director: 'Peter Weir',
        genre: 'Comedy Drama',
        year: '1998'
    },
    {
        title: 'The Longest Yard',
        director: 'Peter Segal',
        genre: 'Comedy',
        year: '2005'
    }
];

app.use(express.static('public'));

//logs all requests on terminal
app.use(morgan('common'));

//returns default text when url ends in /
app.get('/',(req, res) => {
    res.send('Welcome to BestFlix! A list of all your favorite movies!');
});

//will display movie list json when url is typed with /movies
app.get('/movies', (req, res) => {
    res.json(topMovies);
});

//error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(8080, () => {
    console.log('Your app is listening on port 8080');
});