// ROUTES
let path = require('path')
let friends = require('../data/friends.js')

//GET route - defaults to home.html
module.exports = function (app) {
    //display json of friends
    app.get("/api/friends", function (req, res) {
        res.json(friendjs);
        console.log("friends get route")
    });


    app.post("/api/friends", function (req, res) {
        let input = req.body;
        console.log("input",input)
        //friending logic
        //for each friend in friends
        // for (let i = 0; i < friends.length; i++){
            //TODO:
        // }
        //compare score arrays
        //return the friend with the least score difference


        console.log("friends", friends)
        console.log("friends get route")
        //push last so you don't friend yourself :(
        friends.push(input)

    });

};