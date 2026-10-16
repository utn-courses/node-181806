// Sistema operativo
import os from "node:os"

console.log(`Sistema operativo: ${os.platform()}`)
console.log(`Arquitectura: ${os.arch()}`)
console.log(`Memoria total: ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)}GB`)

const uptimeSeconds = os.uptime()
const horas = Math.floor(uptimeSeconds / 3600);
const minutos = Math.floor((uptimeSeconds % 3600) / 60);
console.log(`Tiempo activo: ${horas} hr y ${minutos} minutos`);
