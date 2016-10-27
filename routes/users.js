var express = require('express');
var router = express.Router();
var passport = require('passport');


// function authenticationMiddleware () {  
//   return function (req, res, next) {
//     if (req.isAuthenticated()) {
//       return next()
//     }
//     res.redirect('/')
//   }
// }

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  res.render('./parts/profile', { user: req.user });
});

module.exports = router;
