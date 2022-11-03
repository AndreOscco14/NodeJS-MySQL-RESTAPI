//*============================================
//* IMPORTAMOS LA BBDD PARA INSERTAR LOS DATOS
//*============================================
import { pool } from '../db.js';


//*==============================
//* OBTIENE TODOS LOS EMPLEADOS
//*==============================
// export const getEmployees = (req, res) => res.send('Obteniendo empleados');
 export const getEmployees = async(req, res) => {

    try {
        const [rows] = await pool.query('SELECT * FROM employee')
        res.json(rows)

    } catch (error){
        return res.status(500).json({
            message: "Something Goes Wrong getEmployees"
        })
    }
    };


 //OBTIENE SOLO UN EMPLEADO SEGUN EL ID
export const getEmployee = async (req,res) => {

    try{
    const [rows] = await pool.query('SELECT * FROM employee WHERE id= ?', [req.params.id])

    if (rows.length <=0 ) 
        return res.status(404).json({
        message: 'Employee not found'
    })

    res.json(rows[0])
    } catch (error){
        return res.status(500).json({
            message: "Something Goes Wrong getEmployees"
        })
    }
}
 


//*==========================================
//* INSERTAR LOS DATOS EN LA TABLA EMPLEADOS
//*==========================================
// export const createEmployees = (req, res) => res.send('Creando Success');
export const createEmployees = async (req, res) => {
      // Extraer el nombre y el salario
      const {name,salary} = req.body
    try{
      const [rows] = await pool.query('INSERT INTO employee(name,salary) VALUES (?,?)',
      [name,salary])
  
      res.send({
          id: rows.insertId,
          name,
          salary,
      })
      
      // console.log(req.body)
  }catch(error){
    return res.status(500).json({
        message: "Something Goes Wrong"
    })
  }

 };


//*==========================================
//* ELIMINAR EMPLEADOS DE LA TABLA
//*==========================================

// export const deleteEmployees = (req, res) => res.send('Eliminando empleados');
export const deleteEmployees = async (req, res) => {
   try {
    const [result] = await pool.query('DELETE FROM employee WHERE id = ?' , [req.params.id]) 
    // console.log(result)
    if(result.affectedRows <= 0) {
        return res.status(404).json({
            message: 'Employee Not Found'
        })
    }
    res.sendStatus(204)

   } catch (error) {
    return res.status(500).json({
        message: "Something Goes Wrong"
    })
   }
};



//*==========================================
//* ACTUALIZACION DE LOS DATOS EN LA TABLA
//*==========================================
// export const updateEmployees = (req, res) => res.send('Actualizando empleados');
export const updateEmployees = async (req, res) => {
    const {id} = req.params
    const {name, salary} = req.body
    
   try {
    const [result] = await pool.query('UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?' , [name, salary, id])

    if(result.affectedRows === 0) return res.status(404).json({
        message: 'Employee Not Found'
    })

    const [rows] = await pool.query('SELECT * FROM employee WHERE id=?', [id])

    res.json(rows[0])
   } catch (error) {
    return res.status(500).json({
        message: "Something Goes Wrong"
    })
   }
};