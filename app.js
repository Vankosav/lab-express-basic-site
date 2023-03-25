const express = require('express');
const app = express();

app.get('/', (request, response) => response.render('index.html'));

app.get('/home', (request, response) => {
    response.send('<h1>Alejandro Jodorowsky</h1>');
  });

app.get('/about', (request, response) => {
    response.send("About Jodorowsky"); 
});

app.get('/works', (request, response) => {
    response.send("His work");
});

app.listen(3000, () => {
    console.log("Server is listening in port 3000");
});