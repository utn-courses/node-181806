import http from "node:http"

const productos = [
  { id: 1, nombre: "Notebook", precio: 850000, stock: 10 },
  { id: 2, nombre: "Mouse", precio: 15000, stock: 25 },
  { id: 3, nombre: "Teclado", precio: 30000, stock: 15 },
  { id: 4, nombre: "Monitor", precio: 250000, stock: 8 },
  { id: 5, nombre: "Auriculares", precio: 45000, stock: 20 }
]

const server = http.createServer((request, response) => {
  response.end(JSON.stringify(productos))
})

// CRUD
// GET POST UPDATE DELETE

server.listen(3000, () => {
  console.log("Servicio en escucha.")
})