// ROUTES
let path = require('path')
require('../data/friends.js')

//GET route - defaults to home.html
module.exports = function (app) {
    //display json of friends
    app.get("/api/friends", function (req, res) {
        res.json(friendjs);
        console.log("friends get route")
    });


    app.post("/api/friends", function (req, res) {
        let input = req.body;
        console.log("input", input)
        //friending logic
        //for each friend in friends
        // TODO:
        var theMatch = input;
        for (let i = 0; i < friends.length; i++) {
            var checkme = input.scores;
            var checkthem = friends[i].scores
            console.log("checkme", checkme)
            console.log("checkthem", checkthem)

            //an impossible score, the first friend will always be theMatch
            var currWinner = 55;
            var currDiff = 0;
            for (let x = 0; x < checkme.length; x++) {
                currDiff += checkme[i] - checkthem[i]
            }
            console.log("currDiff",currDiff)
            //If friends[i] has a lower score than theMatch, they are the new match
            if (currDiff > currWinner) {
                theMatch = friends[i];
                console.log("THE BIGGEST ONE HERE IMPORTANT", theMatch)
            }
        console.log("thematch",theMatch)
        }
        //TODO: SHOW THEM THEIR MATCH
        
        //push last so you don't friend yourself :(
        friends.push(input)
        console.log("friends push confirm: ", friends)
    });

};