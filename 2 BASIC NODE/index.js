const http = require("http");
const port = 3000;
const server = http.createServer();

const friends = [
  { id: 0, name: "ABID" },
  { id: 1, name: "Mutayyab" },
  { id: 2, name: "Nabeel" },
  { id: 3, name: "Qamar" },
];

server.on("request", (req, res) => {
  const defineUrlExplicitly = req.url.split("/");
  if (req.method === "POST" && defineUrlExplicitly[1] === "friends") {
    req.on("data", (data) => {
      const DataString = data.toString();
      friends.push(JSON.parse(DataString));
    });
  } else if (req.method === "GET" && defineUrlExplicitly[1] === "friends") {
    res.statusCode = 200;
    res.setHeader("content-Type", "application/json");
    if (defineUrlExplicitly?.length === 3) {
      const friendById = +defineUrlExplicitly[2];
      res.end(JSON.stringify(friends[friendById]));
    } else {
      res.end(JSON.stringify(friends));
    }
  } else if (req.method === "GET" && defineUrlExplicitly[1] === "html") {
    res.setHeader("content-Type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write("<ul>");
    res.write("<li>Hy ABID</li>");
    res.write("<li>Hope you are doing well....</li>");
    res.write("</ul>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Listening On Port ${port} .....`);
});
