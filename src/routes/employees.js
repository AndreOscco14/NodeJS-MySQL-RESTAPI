import { Router } from 'express';
import { getEmployees, getEmployee } from '../controllers/employees.controller.js';
import { createEmployees } from '../controllers/employees.controller.js';
import { updateEmployees } from '../controllers/employees.controller.js';
import { deleteEmployees } from '../controllers/employees.controller.js';

const router = Router();


//**====================================================== */
//* =========== CREACION DE UNA PRIMERA RUTA =============
//**====================================================== */

// Esto solo nos devuelve un texto
router.get('/employees', getEmployees);
router.get('/employees/:id', getEmployee);

router.post('/employees', createEmployees);

// permite modificar solo un dato.
router.patch('/employees/:id', updateEmployees);

router.delete('/employees/:id', deleteEmployees);

export default router;