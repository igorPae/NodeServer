const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view egine', 'hbs');


app.use((req, res, next) => {
	var now = new Date().toString();
	var log =`${now}: ${req.method} ${req.url}`;

	console.log(log);
	fs.appendFile('server.log', log + '\n')
	next();
});

// app.use((req, res, next) => {
// 	res.render('maintance.hbs');
// });

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () =>{
	return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) =>{
	return text.toUpperCase();
});

app.get('/', (req, res) => {
	res.send({
		name: 'Igo',
		likes: ['dsfsd', 'sdfsdf']
	});
});

app.get('/about', (req, res) => {
	res.render('about.hbs', {
		pageTitle: "About Page"
	});
})

app.listen(3000., () => {
	console.log('SErver is UP');
});
