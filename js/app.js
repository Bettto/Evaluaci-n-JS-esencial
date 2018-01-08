//Array de estudiantes
var listaEstudiantes=[
{"codigo":"A001", "nombre":"Luis Chavarria", "nota":78},
{"codigo":"A002", "nombre":"Elizabeth Ordoñez", "nota":87},
{"codigo":"A003", "nombre":"José Pérez", "nota":96},
{"codigo":"A004", "nombre":"Jorge de la Rocha", "nota":48},
{"codigo":"A005", "nombre":"Susana Mendieta", "nota":84},
{"codigo":"A006", "nombre":"Natalia Ortega", "nota":23},
{"codigo":"A007", "nombre":"Juana Ortiz", "nota":100},
{"codigo":"A008", "nombre":"Carla Sánchez", "nota":98},
{"codigo":"A009", "nombre":"Horacio Portugal", "nota":58},
{"codigo":"A010", "nombre":"Alicia Bustamante", "nota":95}
];

//Función para leer el JSON
function leerJSON(json){
	var salida="---Planilla de Estudiantes---<br>";
	var i;
	for(i=0;i<json.length;i++){
		salida+="Código: "+json[i].codigo+" - "+"Nombre: "+json[i].nombre+" - "+"Calificación: "+json[i].nota+"<br>";
	}
	document.getElementById("planilla").innerHTML=salida;
}

//Función para mostrar la planilla de estudiantes
function mostrarPlanilla() {
    leerJSON(listaEstudiantes);
}

//Función para calcular el promedio
function calcularPromedio(json){
	var salida="El promedio del curso es: "
	var sumarNotas=json[0].nota;
	for (i=0;i<json.length;i++){
		sumarNotas+=json[i].nota;
		Promediar=sumarNotas/json.length;
		salida+=Promediar;

		//return sumarNotas/json.length;
	}
	document.getElementById("planilla").innerHTML=salida;
}

//Función para mostrar el promedio
function mostrarPromedio() {
	calcularPromedio(listaEstudiantes);
  //  document.getElementById("promedio").innerHTML=calcularPromedio(listaEstudiantes);
}

console.table (listaEstudiantes);
