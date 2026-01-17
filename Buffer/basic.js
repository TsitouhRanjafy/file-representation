// Buffer.from(): 
// This method creates a new buffer filled with the specified string, array, buffer, or ArrayBuffer.
let buf = Buffer.from("Salut !;");
console.log(buf);
console.log(buf.toString("utf8"));
buf[0] = 0x43; // change le prmier octet en 'C' (code ascii 67)
console.log(buf.toString("utf8"),"\n");



// This method creates a new empty buffer of the specified size, filled with zeros by default.
let buf2 = Buffer.alloc(5);
console.log(buf2);
buf2.write("test d'écriture"); // 'test '(just 5 octet allocation)
console.log(buf2.toString("utf8"));
console.log(buf2, "\n");


// This method creates a new buffer of the specified size without initializing its contents.
//  The buffer may contain old data, so it should be used with caution.
let buf3 = Buffer.allocUnsafe(8);
console.log(buf3);
console.log("\n");


const fs = require("fs");
// fs.writeFileSync("./copy-sudoPng.png",sudoPng);






