const express = require('express')
const router = express.Router()
const axios = require('axios')
const User = require('../../server/models/user')

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
		User
			.findOne({ 'githubId': req.user.githubId }, { '_id': false })
			.exec(function (err, user) {
				if (err) { throw err; }

				sendJSONresponse(res, 200, user)
			});
/*
   axios.get('http://localhost:3001/users/' + req.params.userId)
      .then((res) => res.data).then((user)=>sendJSONresponse(res, 200, user));*/
});

router.put('/users/:userId', isLoggedIn, function(req, res, next) {   
   axios.get('http://localhost:3001/users/' + req.params.userId)
      .then((res) => res.data).then((user)=> {

        if (req.body.isFight) {
          if (req.body.won) user.fightData.fightsWon++;
          else user.fightData.fightsLost++;
          if (req.body.belt) user.belts.push(req.body.belt)
        } else {
          user.fightData.sparCount++;
        }
            
        axios.put('http://localhost:3001/users/' + req.params.userId, user)
            .then((res) => res.data).then((user)=>sendJSONresponse(res, 200, user));    
      });  
});

router.get('/levels', isLoggedIn, function(req, res, next) {
    axios.get('http://localhost:3001/levels')
      .then((res) => res.data).then((levels)=>sendJSONresponse(res, 200, levels));    
});

module.exports = router;