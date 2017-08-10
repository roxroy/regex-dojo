const express = require('express');
const passport = require('passport');
const router = express.Router();

function isLoggedIn (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect('/signin');
  }
}
  
router.get('/', function(req, res, next) {
  if (req.isAuthenticated()) {
    res.redirect('/app/dojo');
  }
  else {
    res.render('index');
  }  
});

router.get('/signin', function(req, res, next) {
  res.render('signin');
});

router.get('/signout', function(req, res){
  req.logout();
  res.redirect('/');
});

router.get('/auth/github', passport.authenticate('github'));

router.get('/auth/github/callback', passport.authenticate('github', {
    successRedirect: '/app/dojo',
    failureRedirect: '/signin'
}));

router.get('/credits', function(req, res, next) {
  if (req.isAuthenticated()) {
    res.locals.signout = true;
  }

  res.render('credits');
});

router.get('/app/dojo', isLoggedIn, function(req, res, next) {
  res.locals.signout = true;
  res.render('dashboard');
});

module.exports = router;