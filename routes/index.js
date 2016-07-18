var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/twitch', function(req, res, next) {
  res.render('twitchapp', { title: 'Twitch App | FreeCodeCamp' });
});

router.get('/pomodoro', function(req, res, next) {
  res.render('pomodoro', { title: 'Twitch App | FreeCodeCamp' });
});

router.get('/portfolio', function(req, res, next) {
  res.render('portfolio1', { title: 'Twitch App | FreeCodeCamp' });
});

router.get('/quote_machine', function(req, res, next) {
    res.render('quote_machine', { title: 'Twitch App | FreeCodeCamp' });
});

router.get('/weather', function(req, res, next) {
    res.render('weather', { title: 'Twitch App | FreeCodeCamp' });
});

router.get('/wikiapp', function(req, res, next) {
    res.render('wikiapp', { title: 'Twitch App | FreeCodeCamp' });
});

router.get('/calculator', function(req, res, next) {
    res.render('calculator', { title: 'Twitch App | FreeCodeCamp' });
});

router.get('/tribute', function(req, res, next) {
    res.render('tribute', { title: 'Twitch App | FreeCodeCamp' });
});

module.exports = router;
