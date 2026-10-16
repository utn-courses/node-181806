import readline from "node:readline"
import c from "colors"

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const sumar = (n1, n2) => {
  return n1 + n2
}

rl.question("Ingrese el n1: ", (n1) => {
  rl.question("Ingrese el n2: ", (n2) => {
    const resultado = sumar(Number(n1), Number(n2))
    console.log(`Resultado: ${resultado}`.green)
    rl.close()
  })
})



