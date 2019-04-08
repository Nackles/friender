//contains the list of friends as JSON objects

//hard coded example
var friends = [
    {
        name: "Bud",
        photo: "https://placeimg.com/150/150/people",
        scores: [1, 2, 3, 4, 5, 4, 3, 2, 1, 1]
    },
    {
        name: "Dog",
        photo: "https://placeimg.com/150/150/people",
        scores: [5, 4, 3, 4, 2, 1, 4, 5, 5, 1]
    },
    {
        name: "Cat",
        photo: "https://placeimg.com/150/150/people",
        scores: [1, 2, 5, 5, 1, 6, 2, 2, 2, 1]
    },
    {
        name: "Basketball",
        photo: "https://placeimg.com/150/150/people",
        scores: [2, 2, 2, 2, 1, 1, 1, 1, 2, 1]
    }
]

module.exports = {
    friends: friends
};