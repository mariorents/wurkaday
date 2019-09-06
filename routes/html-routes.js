const path = require("path");

module.exports = function(app) {

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    
    app.get("/profiles", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/profiles.html"));
    });
    
    app.get("/posts", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/posts.html"));
    });
    
};