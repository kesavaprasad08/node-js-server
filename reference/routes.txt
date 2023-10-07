const fs = require("fs");
const requestHandler = (req,res) => {
  let content = fs.readFileSync("message.txt", "utf8");
  let url = req.url;
  let method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      `<body><p>${content}</p><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>`
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      const message = parseBody.split("=")[1];
      fs.writeFileSync("message.txt", message);
    });

    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  if (url === "/home") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      "<html><head><title>My First Page</title></head> <body><h1>Welcome Home !</h1></body></html>"
    );
    return res.end();
  } else if (url === "/about") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      "<html><head><title>My First Page</title></head> <body><h1>Welcome to About Us page!</h1></body></html>"
    );
    return res.end();
  } else if (url === "/node") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      "<html><head><title>My First Page</title></head> <body><h1>Welcome to my Node Js project</h1></body></html>"
    );
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write(
    "<html><head><title>My First Page</title></head> <body><h1>Welcome to my First Node Js Server</h1></body></html>"
  );

  return res.end();
};

module.exports= requestHandler;
