// const db = require("../models");

// module.exports = function(app) {
//     // Route for the getting all the profiles including posts 
//     app.get("/api/profiles", (req,res)=> {
//         db.Profile.findAll({
//             include: [db.Post]
//         }).then(dbProfile=> {
//             res.json(dbProfile);
//         });
        
//     }),

//     app.get("api/profiles/:id", (req,res)=> {
//         db.Profile.findOne({
//             where: {
//                 id: req.params.id
//             }
//         }).then(dbProfile => {
//             console.log(dbProfile);
//             res.json(dbProfile);     
//         });
//     })

//     app.post("/api/profiles", (req,res)=> {
//         db.Profile.create(req.body).then(dbProf=> res.json(dbProf));
//     }),

//     app.delete("/api/profiles/:id", (req, res) => {
//         db.Profile.destroy({
//             where: {
//                 id: req.params.id
//             }
//         }).then(deleteProf => res.json(deleteProf));
//     });

// };