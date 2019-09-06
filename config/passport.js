const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../models");

passport.use(new LocalStrategy({
        usernameField: "email"
    },
    function (email, password, done) {
        db.Users.findOne({
                where: {
                    email: email
                }
            })
            .then(dbUser => {
                if (!dbUser) {
                    return done(null, false, {
                        message: "Incorrect Email"
                    });
                } else if (!dbUser.validPassword(password)) {
                    return done(null, false, {
                        message: "Incorrect Password"
                    });
                };

                return done(null, dbUser);
            });
    }
));

passport.serializeUser(function (users, cb) {
    cb(null, users)
});

passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
});

module.exports = passport;