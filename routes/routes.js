module.exports = (app) => {
	app.post('/words', require('../controller/words').findWordCount);
}