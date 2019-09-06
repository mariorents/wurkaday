const path = require("path");
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

    app.get("/", function(req, res) {
        if(req.user) {
            res.redirect("/home");
        }
        res.sendFile(path.join(__dirname, "../public/login.html"));
    });
    
    app.get("/api/signup", function(req, res) {
        if(req.user) {
            res.redirect("/home");
        }
        res.sendFile(path.join(__dirname, "../public/signup.html"));
    });

    app.get("/api/home", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    
    app.get("/api/profiles", isAuthenticated, function(req, res) {
        res.sendFile(path.join(__dirname, "../public/profiles.html"));
    });
    
    app.get("/api/posts", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/posts.html"));
    });
    
};