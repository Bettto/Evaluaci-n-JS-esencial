//Array de estudiantes
var listaEstudiantes=[
{"codigo":"A001", "nombre":"Luis Chavarria", "nota":78},
{"codigo":"A002", "nombre":"Elizabeth Ordoñez", "nota":87},
{"codigo":"A003", "nombre":"José Pérez", "nota":96},
{"codigo":"A004", "nombre":"Jorge de la Rocha", "nota":48},
{"codigo":"A005", "nombre":"Susana Mendieta", "nota":84},
{"codigo":"A006", "nombre":"Natalia Ortega", "nota":43},
{"codigo":"A007", "nombre":"Juana Ortiz", "nota":100},
{"codigo":"A008", "nombre":"Carla Sánchez", "nota":98},
{"codigo":"A009", "nombre":"Horacio Portugal", "nota":58},
{"codigo":"A010", "nombre":"Alicia Bustamante", "nota":95}
];

//Crear función para leer el JSON
function leerJSON(json){
	var salida="---Planilla de Estudiantes---<br>";
	var i;
	for(i=0; i<json.length; i++){
		salida+="Código: "+json[i].codigo+" - "+"Nombre: "+json[i].nombre+" - "+"Calificación: "+json[i].nota+"<br>";
	}
	document.getElementById("planilla").innerHTML=salida;
};

//Función para mostrar la planilla de estudiantes
function mostrarPlanilla() {
    leerJSON(listaEstudiantes);
};

//Función para calcular el Promedio
function Promediar(json) {
	var sumarNotas=0;
	var i;
  for (i=0; i<json.length; i++) {
    sumarNotas+=json[i].nota;
  }
  document.getElementById("promedio").innerHTML="El promedio del curso es: "+sumarNotas/json.length;
};

//Función para mostrar la planilla de estudiantes
function mostrarPromedio() {
    Promediar(listaEstudiantes);
};

//Función para mostrar la nota más alta
function NotaMasAlta(json) {
	var mayor=-1;
	var i;
  for (i=0; i<json.length; i++) {
		if (json[i].nota>mayor){
			mayor=json[i].nota;
			mejorEst=json[i].nombre;
		};
	}
  document.getElementById("mejorNota").innerHTML="La mejor nota es de:  "+mejorEst;
};

//Función para mostrar la nota más alta
function mostrarMejorNota() {
    NotaMasAlta(listaEstudiantes);
};

//Función para mostrar la nota más baja
function NotaMasBaja(json) {
	var menor=101;
	var i;
  for (i=0; i<json.length; i++) {
		if (json[i].nota<menor){
			menor=json[i].nota;
			//peorEst=json[i].nombre;
		};
	}
  document.getElementById("peorNota").innerHTML="La peor nota es de:  "+menor;
};

//Función para mostrar la nota más baja
function mostrarPeorNota() {
    NotaMasBaja(listaEstudiantes);
};
