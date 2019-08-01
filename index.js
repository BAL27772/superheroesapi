let express = require('express')
let heroes = require ('./heroes.json')
let app = express()
let port = 1337;
 

app.post('/', (request, response) => {
    response.send('Pretty Nice. So nice.');
});

app.get('/heroes', (request, response) => {
    response.send(heroes);
});

app.get('/heroes/:slug', (request, response) => {
    let matchingHeroes = heroes.filter( (hero) => {
        return hero.slug === request.params.slug;
    });
    
    if (matchingHeroes.length) {
        response.send(matchingHeroes);
    } else {
        response.sendStatus(404);
    }
    
    
});

app.all('*', (request, response) => {
    response.send('Guess What');
});


app.listen(port, () => { console.log('Hero server running on port ' + port); });
