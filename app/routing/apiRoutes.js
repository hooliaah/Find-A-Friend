// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

var friendList = require('../data/friends.js');

module.exports = function (app) {
    // get route to get list of all friends
    app.get("/api/friends", function (req, res) {
        res.json(friendList);
    })

    // post route to post new friend to friendList
    app.post("/api/new", function (req, res) {
        var newFriend = req.body;
        // newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
        // console.log(newFriend);
        friendList.push(newFriend);
        res.json(newFriend);
    })

};