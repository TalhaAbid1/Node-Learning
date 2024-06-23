const path = require("path");
// Path api Helps to Manage fore-ward & back-ward slash according to OS
// Windows OS use backward slash () == WHERE  == MacOs & Linux forward slash (/) [LIKE =>> ../abc/folder/image.xyz]

function sendJson(req, res) {
  res.send({ data: "JSON" });
}
function shareImage(req, res) {
  res.sendFile(
    path.join(__dirname, "..", "public", "Images", "ImageAsset.jpg")
  );
  // res.send({ name: "IMAGE" });
}
function shareHtml(req, res) {
  res.send("<h3>ABID</h3>");
}

module.exports = {
  sendJson,
  shareImage,
  shareHtml,
};