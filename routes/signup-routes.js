// const db = require("../models");
// const passport = require("../models");

// module.exports = app => {
//     app.post("/api/login", passport.authenticate("local"), (req, res) => {
//         res.json(req.user);
//     });

//     app.post("/api/signup", (req, res) => {
//         db.Users.create({
//             username: req.body.username,
//             profileType: req.body.profileType,
//             about: req.body.about,
//             email: req.body.email,
//             password: req.body.password,
//         })
//         .then(function () {
//             res.redirect(307, "/api/login");
//         })
//         .catch(function (err) {
//             res.status(401).json(err);
//         });
//     });
    
//     // app.get("/logout", function (req, res) {
//     //     req.logout();
//     //     res.redirect("/");
//     // });
// };
    

