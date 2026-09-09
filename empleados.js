const empleados = [
    { id: 1, nombre: "Ana", edad: 24, departamento: "TI", activo: true },
    { id: 2, nombre: "Carlos", edad: 30, departamento: "Ventas", activo: false },
    { id: 3, nombre: "Maria", edad: 22, departamento: "TI", activo: true },
    { id: 4, nombre: "Pedro", edad: 28, departamento: "RRHH", activo: true },
    { id: 5, nombre: "Lucia", edad: 35, departamento: "Ventas", activo: false }
];


function buscarEmpleados(id){
    return empleados.find(empleado => empleado.id === id);
    for (let i=0;i<empleados.length;i++){
        if (empleados[i].id===id){
            return empleados[i];
        }
    }
}

function obtenerEmpleadosActivos(){
    return empleados.filter(empleado => empleado.activo);   
    for (let i=0;i<empleados.length;i++){
        if (empleados[i].activo){
            return empleados[i];
        }
    }
}

function obtenerPorDepartamento(departamento){
    return empleados.filter(i=>i.departamento===departamento);
}

function crearEmpleado(empleado){
    empleados.push(empleado);
    return empleado;
}

module.exports = {
    buscarEmpleados,
    obtenerEmpleadosActivos,
    obtenerPorDepartamento,
    crearEmpleado
};
