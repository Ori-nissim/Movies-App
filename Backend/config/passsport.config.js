const passport = require('passport');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');
const { findUserByEmail } = require('../bll/auth.logic');

passport.use(new LocalStrategy(
    (username, password, done) => {
       console.log("🚀 ~ file: passsport.config.js:8 ~ username, password:", username, password)
       findUser(username, (err, user) => {
         if (err) {
           return done(err)
         }
   
         // User not found
         if (!user) {
           return done(null, false)
         }
   
         // Always use hashed passwords and fixed time comparison
         bcrypt.compare(password, user.passwordHash, (err, isValid) => {
           if (err) {
             return done(err)
           }
           if (!isValid) {
             return done(null, false)
           }
           return done(null, user)
         })
       })
     }
   ));
passport.serializeUser(function(user, done) {
    console.log({user})
    done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
    console.log({user})
    done(null, user);
  });
module.exports = passport;
