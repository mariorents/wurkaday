const db = require("../models");

module.exports = function(app) {
    app.get("/api/profiles", (req,res)=> {
        db.Profile.findAll({
            include: [db.Post]
        }).then(dbProfile=> {
            res.json(dbProfile);
        });
        
    });


}