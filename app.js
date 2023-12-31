const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (request, response) => response.render('index.html'));

app.get('/home', (request, response) => {
    response.sendFile(__dirname + '/views/home-page.html');
  });

app.get('/about', (request, response) => {
    response.sendFile(__dirname + '/views/about-page.html');
});

app.get('/works', (request, response) => {
    response.sendFile(__dirname + '/views/work-page.html');    
});

app.listen(3000, () => {
    console.log("Server is listening in port 3000");
});