const http = require('http');
const request = require('request');
module.exports.findWordCount = (req, res) => {
	console.log('reach', req.body);
	var data = '';
	let words = [];
	let wordCounts = {}; //make an empty object to store the words and their counts
	let sortable = []; //array to store sorted counts
	let userCount = req.body.count || 1;
	request('http://terriblytinytales.com/test.txt', (err, response, body) => {
		if (err) {
			return res.json({
				'status': false,
				'message': err
			});
		}
		data = body;
		// words.push(data.split(/[ ,.\n\t?"]+/));//split the string by space, comma, new line and quotes
		words = data.split(/[ ,\n\t?"]+/);
		
		for (let i = 0; i < words.length; i++) {
			wordCounts[words[i]] = (wordCounts[words[i]] || 0) + 1; //assign words and their counts 
		}
		for (let word in wordCounts) {
			sortable.push([word, wordCounts[word]]); //make an array of the word and the word count for sorting
		}
		sortable.sort((a, b) => {
			return b[1] - a[1]; //sort the array in DESC order
		});

		return res.json({
			'status': true,
			'message': 'success',
			data:  sortable.slice(0, userCount)
		});
	})
}