const Nightmare = require('nightmare');
const nightmare = Nightmare({
	show: true
});

const SEARCH_TEXT = process.argv[2] || 'Illinois Tech';

nightmare
	.goto('https://duckduckgo.com/')
	.type('input#search_form_input_homepage', SEARCH_TEXT)
	.click('#search_button_homepage')
	.evaluate(function(){
		//throw new Error('No search results');
		var titles = [];
		var results = document.querySelectorAll('.result__title');
		for (var i = 0; i < results.length; i++) {
			let element = results[i];
			titles.push(element.innerText);
		}
		return titles;
	})
	.end()
		.then(function (result) {
			console.log(result)
		})
		.catch(function (error) {
			console.error('Error:', error);
		});
		