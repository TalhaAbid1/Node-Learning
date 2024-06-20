const friends = require("../models/Friends.model");

function allFriends(req, res) {
  console.log('====================================');
  console.log(friends);
  console.log('====================================');
  res.send(friends);
}
function friendById(req, res) {
  const friendById = Number(req?.params?.friendById);
  const isFriendExist = friends[friendById];
  if (isFriendExist) {
    res.send(isFriendExist);
  } else {
    res.status(404).send("<h1>No Data Found</h1>");
  }
}
function addFriend(req, res) {
  if (!req?.body?.name) {
    return res.status(400).send({
      error: "Invalid Data Formate",
    });
  }
  const newFriend = {
    name: req?.body?.name,
    id: friends.length,
  };
  friends.push(newFriend);
  res.status(200).send(`${req?.body?.name} Added Successfully`);
}
module.exports = {
  allFriends,
  friendById,
  addFriend,
};
