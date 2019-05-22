const fs = require('fs');
//Listado de cursos
let cursos = [
  {
    id: 11,
    nombre: "Lógica",
    duracion: "8 semanas",
    valor: 20000
  },
  {
    id: 22,
    nombre: "Fisica Mecánica",
    duracion: "5 semanas",
    valor: 30000
  },
  {
    id: 33,
    nombre: "Álgebra y Trigonometría",
    duracion: "16 semanas",
    valor: 40000
  }
];

 //funcion que se llama cuando se desea listar los cursos con el intervalo de tiempo estre ellos 
 function listarCursos() {

    for (let index = 0; index < cursos.length; index++) {
        setTimeout(function () {
            let informacioncurso = `el curso identificado con el id  ${cursos[index].id} tiene por nombre  ${cursos[index].nombre} con una duracion de ${cursos[index].duracion}y tiene un costo de  ${cursos[index].valor} pesos`
            console.log(informacioncurso);
        }, 2000*index);   
    }
} 
//funcion que se llama cuando se desea listar los cursos por defecto sin intervalo de tiempo
function listarCursosSinTime() {

    for (let index = 0; index < cursos.length; index++) {
            let informacioncurso = `el curso identificado con el id  ${cursos[index].id}  tiene por nombre  ${cursos[index].nombre}  con una duracion de  ${cursos[index].duracion}  y tiene un costo de  ${cursos[index].valor}  pesos`
            console.log(informacioncurso);  
    }
} 

//funcion que se llama cuando se quiere matricular un curso, es obligatorio el id del curso a matricular, nombre y cedula del estudiante
// ya que tambien este metodo genera la informacion en un archivo .txt de la matricula
function inscribir(id,nombre,cedula){

    let curso = cursos.find(valor => valor.id==id)
    if(curso){
      let texto =`El usuario ${nombre} con cedula de ciudadania ${cedula} se ha matriculado en  el curso ${curso.nombre} `;

     console.log(texto); 

     let informacionMatricula = `${texto} identificado con el id ${curso.id} el cual tambien tiene una duracion de ${curso.duracion} y un valor de ${curso.valor}`

     fs.writeFile('Matricula.txt',informacionMatricula, (err) => {
        if (err) throw(err); 
      });
        
     }else{
     console.log('El id que ha ingresado no exite, por favor intentelo nuevamente');
    }
       
}

//Exportación de los cursos
module.exports = {
  cursos,
  listarCursos,
  listarCursosSinTime,
  inscribir
};
