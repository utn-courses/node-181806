// File system → sistema de archivos 
import fs from "node:fs"

// fs.writeFileSync("test.txt", "Hola a todos desde test.txt")

const data = fs.readFileSync("test.txt", "utf-8")
console.log(data)