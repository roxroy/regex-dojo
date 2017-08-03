const express = require('express')
const router = express.Router()
const axios = require('axios')
const User = require('../../server/models/user')
const Level = require('../../server/models/level')

function isLoggedIn (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect('/signin');
  }
}

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

axios.defaults.headers.put['Content-Type'] = 'application/json';

router.get('/users/:userId', isLoggedIn, function(req, res, next) {
  sendJSONresponse(res, 200, req.user);
  /*User
    .findOne({ 'githubId': req.user.githubId }, { '_id': false })
    .exec(function (err, user) {
      if (err) next(err);

      sendJSONresponse(res, 200, user)
    });*/
});

router.put('/users/:userId', isLoggedIn, function(req, res, next) {          
  if (req.body.isFight) {
    if (req.body.won) req.user.fightData.fightsWon++;
    else req.user.fightData.fightsLost++;
    if (req.body.belt) req.user.fightData.belts.push(req.body.belt)
  } else {
    req.user.fightData.sparCount++;
  }     

  req.user.save(function(err, user) {
    if (err) next(err);
      sendJSONresponse(res, 200, user)
  });               
});

router.get('/levels', isLoggedIn, function(req, res, next) {
  Level
    .find({})
    .exec(function (err, levels) {
      if (err) { throw err; }

      sendJSONresponse(res, 200, levels)
    });
});

module.exports = router;