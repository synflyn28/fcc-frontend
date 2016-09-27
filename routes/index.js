var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('apps/index.html', { title: 'Express' });
});

router.get('/twitch', function(req, res, next) {
  res.sendFile('apps/twitchapp.html', { title: 'Twitch App | FreeCodeCamp', root:'public'});
});

router.get('/pomodoro', function(req, res, next) {
  res.sendFile('apps/pomodoro.html', { title: 'Twitch App | FreeCodeCamp', root:'public'});
});

router.get('/portfolio', function(req, res, next) {
  res.sendFile('apps/portfolio1.html', { title: 'Twitch App | FreeCodeCamp', root:'public'});
});

router.get('/quote_machine', function(req, res, next) {
    res.sendFile('apps/quote_machine.html', { title: 'Twitch App | FreeCodeCamp', root:'public'});
});

router.get('/weather', function(req, res, next) {
    res.sendFile('apps/weather.html', { title: 'Twitch App | FreeCodeCamp', root:'public'});
});

router.get('/wikiapp', function(req, res, next) {
    res.sendFile('apps/wikiapp.html', { title: 'Twitch App | FreeCodeCamp', root:'public'});
});

router.get('/calculator', function(req, res, next) {
    res.sendFile('apps/calculator.html', { title: 'Twitch App | FreeCodeCamp', root:'public'});
});

router.get('/tribute', function(req, res, next) {
    res.sendFile('apps/tribute.html', { title: 'Twitch App | FreeCodeCamp', root:'public'});
});

router.get('/tic_tac_toe', function(req, res, next) {
    res.sendFile('apps/tic_tac_toe.html', { title: 'Twitch App | FreeCodeCamp', root: 'public' });
});
module.exports = router;
