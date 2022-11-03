import app from './app.js'
import { PORT } from './config.js'


//**====================================================== */
//** ================== EJECUCION EN EL PUERTO 3000 ============== */
//**====================================================== */

app.listen(PORT)
console.log("Servidor corriendo en el puerto " , PORT);