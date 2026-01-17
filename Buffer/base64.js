const fs = require('fs');

// .png to text(base64)
const sudoPng = fs.readFileSync("./sudo.png", "base64");
fs.writeFileSync("./text_base64.txt", sudoPng);

// base text (base64) to .png
const textBase64 = fs.readFileSync("./text_base64.txt", "utf8");
const buf = Buffer.from(textBase64, "base64");
fs.writeFileSync("./copy2-sudo.png", buf);
