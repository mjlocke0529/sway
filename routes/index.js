var express = require('express');
var router = express.Router();
var passport = require('passport');


/* GET home page. */
router.get('/',
  function(req, res) {
    res.render('home', { title: 'Express', user: req.user });
  });

router.get('/login',
  function(req, res){
    res.render('./parts/login');
  });
  
router.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
  	console.log('passed')
    res.redirect('/');
  });
  
router.get('/logout',
  function(req, res){
    req.logout();
    res.redirect('/');
  });

router.get('/profile',
  require('connect-ensure-login').ensureLoggedIn(),
  function(req, res){
    res.render('./parts/profile', { user: req.user });
  });

module.exports = router;
