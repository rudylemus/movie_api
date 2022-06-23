const express = require('express');
app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const uuid = require('uuid');

app.use(bodyParser.json());

let movies = [
    {
        "title": "End of Watch",
        "description": "Shot documentary-style, this film follows the daily grind of two young police officers in LA who are partners and friends, and what happens when they meet criminal forces greater than themselves.",
        "director": {
            "name": "David Ayer",
            "bio": "David Ayer is an American filmmaker known for making crime films that are set in Los Angeles and deal with gangs and police corruption. His screenplays include Training Day, The Fast and the Furious, and S.W.A.T. He has also directed Harsh Times, Street Kings, End of Watch, and Sabotage.",
            "birth": "1968"
        },
        "genre": {
            "name": "Action",
            "description": "Movies in the action genre are fast-paced and include a lot of action like fight scenes, chase scenes, and slow-motion shots."
    },
       "year": "2012",
       "imageURL": "https://m.media-amazon.com/images/I/91KxTy-sMAL._SL1500_.jpg"
    },
    {
        "title": "American Psycho",
        "description": "A wealthy New York City investment banking executive, Patrick Bateman, hides his alternate psychopathic ego from his co-workers and friends as he delves deeper into his violent, hedonistic fantasies.",
        "director": {
            "name": "Mary Harron",
            "bio": "Mary Harron is a Canadian filmmaker and screenwriter, and former entertainment critic. She gained recognition for her role in writing and directing several independent films, including I Shot Andy Warhol, American Psycho, and The Notorious Bettie Page.",
            "birth": "1953"
        },
        "genre": {
            "name": "Horror",
            "description": "Horror is a genre of storytelling intended to scare, shock, and thrill its audience."
    },
        "year": "2000",
        "imageURL": "https://m.media-amazon.com/images/I/81KVW-iYzzL._AC_UY218_.jpg"
    },
    {
        "title": "Goodfellas",
        "description": "The story of Irish-Italian American, Henry Hill, and how he lives day-to-day life as a member of the Mafia.",
        "director": {
            "name": "Martin Scorsese",
            "bio": "Martin Charles Scorsese is an American film director, producer, and screenwriter. He is the recipient of many accolades, including an Academy Award, three Primetime Emmy Awards, a Grammy Award, four British Academy Film Awards, three Golden Globe Awards, and two Directors Guild of America Awards.",
            "birth": "1942"
        },
        "genre": {
            "name": "Crime",
            "description": "Crime film is a genre that revolves around the action of a criminal mastermind."
    },
        "year": "1990",
        "imageURL": "https://m.media-amazon.com/images/I/81xpkHlK4bL._AC_UY218_.jpg"
    },
    {
        "title": "Avatar",
        "description": "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "director": {
            "name": "James Cameron",
            "bio": "James Francis Cameron CC is a Canadian filmmaker. Best known for making science fiction and epic films, he first gained recognition for directing The Terminator. He found further success with Aliens, The Abyss, Terminator 2: Judgment Day, and the action comedy True Lies.",
            "birth": "1954"
        },
        "genre": {
            "name": "Action",
            "description": "Movies in the action genre are fast-paced and include a lot of action like fight scenes, chase scenes, and slow-motion shots."
    },
        "year": "2009",
        "imageURL": "https://m.media-amazon.com/images/I/91N1lG+LBIS._SL1500_.jpg"
    },
    {
        "title": "The Matrix",
        "description": "It depicts a dystopian future in which humanity is unknowingly trapped inside a simulated reality, the Matrix, which intelligent machines have created to distract humans while using their bodies as an energy source.",
        "director": {
            "name": "Lana Wachowski",
            "bio": "The Wachowski sisters have worked as a writing and directing team through most of their careers. They made their directing debut in 1996 with Bound, and achieved fame with their second film The Matrix (1999), a major box office success for which they won the Saturn Award for Best Director.",
            "birth": "1965"
        },
        "genre": {
            "name": "Action",
            "description": "Movies in the action genre are fast-paced and include a lot of action like fight scenes, chase scenes, and slow-motion shots."
    },
        "year": "1999",
        "imageURL": "https://m.media-amazon.com/images/I/51vpnbwFHrL.jpg"
    },
    {
        "title": "Saving Private Ryan",
        "description": "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
        "director": {
            "name": "Steven Spielberg",
            "bio": "Steven Allan Spielberg is an American film director, producer, and screenwriter. A notable figure of the New Hollywood era, he is the most commercially successful director of all time.",
            "birth": "1946"
        },
        "genre": {
            "name": "Drama",
            "description": "The drama genre features stories with high stakes and a lot of conflicts. They're plot-driven and demand that every character and scene move the story forward."
    },
        "year": "1998",
        "imageURL": "https://m.media-amazon.com/images/I/7132RMjQwjL._AC_UY218_.jpg"
    },
    {
        "title": "Terminator 2: Judgment Day",
        "description": "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her ten-year-old son John from a more advanced and powerful cyborg.",
        "director": {
            "name": "James Cameron",
            "bio": "James Francis Cameron CC is a Canadian filmmaker. Best known for making science fiction and epic films, he first gained recognition for directing The Terminator. He found further success with Aliens, The Abyss, Terminator 2: Judgment Day, and the action comedy True Lies.",
            "birth": "1954"
        },
        "genre": {
            "name": "Action",
            "description": "Movies in the action genre are fast-paced and include a lot of action like fight scenes, chase scenes, and slow-motion shots."
    },
        "year": "1991",
        "imageURL": "https://m.media-amazon.com/images/I/718hsW0TlmL._AC_UY218_.jpg"
    },
    {
        "title": "Crash",
        "description": "Interlocking stories of whites, blacks, Latinos, Koreans, Iranians, cops and criminals, the rich and the poor, the powerful and powerless, all defined in one way or another by racism.",
        "director": {
            "name": "Paul Haggis",
            "bio": "Paul Edward Haggis is a Canadian screenwriter, film producer, and director of film and television. He is best known as screenwriter and producer for consecutive Best Picture Oscar winners Million Dollar Baby and Crash, the latter of which he also directed.",
            "birth": "1953"
        },
        "genre": {
            "name": "Drama",
            "description": "The drama genre features stories with high stakes and a lot of conflicts. They're plot-driven and demand that every character and scene move the story forward."
    },
        "year": "2004",
        "imageURL": "https://m.media-amazon.com/images/I/91H7Sehnk6L._AC_UY218_.jpg"
    },
    {
        "title": "The Truman Show",
        "description": "Truman is a man whose life is a fake one. The place he lives is, in fact, a big studio with hidden cameras everywhere, and all his friends and people around him, are actors who play their roles in the most popular TV-series in the world: The Truman Show.",
        "director": {
            "name": "Peter Weir",
            "bio": "Peter Lindsay Weir AM is an Australian film director. He was a leading figure in the Australian New Wave cinema movement, with films such as the mystery drama Picnic at Hanging Rock, the supernatural thriller The Last Wave and the historical drama Gallipoli.",
            "birth": "1944"
        },
        "genre": {
            "name": "Comedy Drama",
            "description": "Also knowwn as a dramedy, this hybrid genre often deals with real life situations, grounded characters, and believable situations."
    },
        "year": "1998",
        "imageURL": "https://m.media-amazon.com/images/I/71QCBSbYn8L._AC_UY218_.jpg"
    },
    {
        "title": "The Longest Yard",
        "description": "Paul Crewe, a disgraced former professional quarterback for the Pittsburgh Steelers, is forced to form a team from the prison inmates to play football against their guards.",
        "director": {
            "name": "Peter Segal",
            "bio": "Peter Segal is an American film director, producer, screenwriter, and actor. Segal has directed the comedic films Tommy Boy, My Fellow Americans, The Nutty Professor II: The Klumps, Anger Management, 50 First Dates, The Longest Yard, Get Smart, Grudge Match, and My Spy.",
            "birth": "1962"
        },
        "genre": {
            "name": "Comedy",
            "description": "The comedy genre uses humor and familiarity, in both situations and characters, to appeal to audiences."
    },
        "year": "2005",
        "imageURL": "https://m.media-amazon.com/images/I/716k4RFT3KL._AC_UY218_.jpg"
    }
];

let users = [
    {
        id: 1,
        name: "Joe",
        favoriteMovies: []
    },
    {
        id: 2,
        name: "John",
        favoriteMovies: ["Goodfellas"]
    },

];

app.use(express.static('public'));


//logs all requests on terminal
app.use(morgan('common'));

//returns default text when url ends in /
app.get('/',(req, res) => {
    res.send('Welcome to BestFlix! A list of all your favorite movies!');
});

//create new user
app.post('/users', (req, res) => {
    const newUser = req.body;

    if (newUser.name) {
        newUser.id = uuid.v4();
        users.push(newUser);
        res.status(201).json(newUser)
    } else {
        res.status(400).send('users need names!')
    }
})

//update user
app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const updatedUser = req.body;

    let user = users.find( user => user.id == id);
    if (user) {
        user.name = updatedUser.name;
        res.status(200).json(user);
    } else {
        res.status(400).send('No such user.')
    }
})

//update or add movie per user request
app.post('/users/:id/:movieTitle', (req, res) => {
    const { id, movieTitle } = req.params;

    let user = users.find( user => user.id == id);

    if (user) {
        user.favoriteMovies.push(movieTitle);
        res.status(200).send(`${movieName} has been added to user ${id}'s array.`);
    } else {
        res.status(400).send('No such user.')
    }
})

//delete movie per request
app.delete('/users/:id/:movieTitle', (req, res) => {
    const { id, movieTitle } = req.params;

    let user = users.find( user => user.id == id);

    if (user) {
        user.favoriteMovies = user.favoriteMovies.filter( title => title !== movieTitle);
        res.status(200).send(`${movieTitle} has been removed from user ${id}'s array.`);
    } else {
        res.status(400).send('No such user.')
    }
})

//delete user
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;

    let user = users.find( user => user.id == id);

    if (user) {
        users = users.filter( user => user.id != id);
        res.status(200).send(`user ${id} has been deleted`);
    } else {
        res.status(400).send('No such user.')
    }
})

//will display movie list json when url is typed with /movies
app.get('/movies', (req, res) => {
    res.status(200).json(movies);
});

//return movie by title
app.get('/movies/:title', (req, res) => {
    const { title } = req.params;
    const movie = movies.find( movie => movie.title === title);

    if (movie) {
        res.status(200).json(movie);
    }   else {
        res.status(400).send('No such movie.')
    }
});

//return movie by genre
app.get('/movies/genre/:genreName', (req, res) => {
    const { genreName } = req.params;
    const genre = movies.find( movie => movie.genre.name === genreName).genre;

    if (genre) {
        res.status(200).json(genre);
    }   else {
        res.status(400).send('No such genre.')
    }
});

//return movie by directors
app.get('/movies/directors/:directorName', (req, res) => {
    const { directorName } = req.params;
    const director = movies.find( movie => movie.director.name === directorName).director;

    if (director) {
        res.status(200).json(director);
    }   else {
        res.status(400).send('No such director.')
    }
});

//error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(8080, () => {
    console.log('Your app is listening on port 8080');
});