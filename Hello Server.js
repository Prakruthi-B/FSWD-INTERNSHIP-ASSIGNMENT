const http=require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");

  if (req.url === "/") {
    res.end("Welcome to Home Page");
  } 
  else if (req.url === "/about") {
    res.end("This is About Page");
  } 
  else if (req.url === "/contact") {
    res.end("Contact us at example@mail.com");
  } 
  else {
    res.statusCode = 404;
    res.end("Page Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});