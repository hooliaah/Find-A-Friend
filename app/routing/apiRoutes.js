// require friends.js, Express, and body-parser
var friendList = require('../data/friends.js');
var express = require("express");
var bodyParser = require("body-parser");

// set up body-parser
var router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// export this function so it can be used from other files
module.exports = function (app) {
    // get route to list all friends
    app.get("/api/friends", function (req, res) {
        res.json(friendList);
    })

    // post route to post new friend to friendList, determine which friend is the best match, and send the result back to the client
    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        var lowestTotalScore = 100;
        var lowestFriend = 0;
        // loop through each friend in the friendList
        for (var i = 0; i < friendList.length; i++) {
            var totalScore = 0;

            // loop through each score
            for (var j = 0; j < newFriend.scores.length; j++) {
                totalScore += Math.abs(newFriend.scores[j] - friendList[i].scores[j]);
            }
            // determine if the score difference is lower than the previous friend. If so, reassign the lowest friend.
            if (totalScore < lowestTotalScore) {
                lowestTotalScore = totalScore;
                lowestFriend = i;
            }
        }
        // add new friend to the friendList array
        friendList.push(newFriend);
        // send the response back to the client
        res.send(friendList[lowestFriend]);
    });
};