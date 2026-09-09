const empleados = require('./empleados');
const readline = require("readline");


//Peticiones a una api

//GET
async function obtenerEmpleados(){
    try{
        const response= await fetch('https://jsonplaceholder.typicode.com/users');

        const usuarios= await response.json();
        console.log(usuarios);

        if (!response.ok){
            throw new Error(`Error en la solicitud: ${response.status}`);
        }
    }catch(error){
        console.error('Error al obtener los empleados:', error);
    }
    
}

obtenerEmpleados();


async function crearEmpleado(empleado){
    try{
        const response= await fetch('https://jsonplaceholder.typicode.com/users',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(empleado)
        });
    }
    catch(error){
        console.error('Error al crear el empleado:', error);
    }
};
//hola practica subir cambios 



