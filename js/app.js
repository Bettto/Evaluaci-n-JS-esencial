//Array de estudiantes
var listaEstudiantes='{"estudiantes":['+
'{"codigo":"A001", "nombre":"Luis Chavarria", "nota":78},'+
'{"codigo":"A002", "nombre":"Elizabeth Ordoñez", "nota":87},'+
'{"codigo":"A003", "nombre":"José Pérez", "nota":96},'+
'{"codigo":"A004", "nombre":"Jorge de la Rocha", "nota":48},'+
'{"codigo":"A005", "nombre":"Susana Mendieta", "nota":84},'+
'{"codigo":"A006", "nombre":"Natalia Ortega", "nota":23},'+
'{"codigo":"A007", "nombre":"Juana Ortiz", "nota":100},'+
'{"codigo":"A008", "nombre":"Carla Sánchez", "nota":98},'+
'{"codigo":"A009", "nombre":"Horacio Portugal", "nota":58},'+
'{"codigo":"A010", "nombre":"Alicia Bustamante", "nota":95}'+
']}';

//Convertir el Array a JSON
var JSONestudiantes=JSON.parse(listaEstudiantes);

//Crear función para leer el JSON
function leerJSON(json){
	var salida="---Planilla de Estudiantes---<br>";
	var i;
	for(i=0;i<json.estudiantes.length;i++){
		salida+="Código: "+json.estudiantes[i].codigo+" - "+"Nombre: "+json.estudiantes[i].nombre+" - "+"Calificación: "+json.estudiantes[i].nota+"<br>";
	}
	document.getElementById("planilla").innerHTML=salida;
};

//Función para mostrar la planilla de estudiantes
function mostrarPlanilla() {
    leerJSON(JSONestudiantes);
};


/*
//Función para calcular el promedio
function average(array) {
  function plus(a, b) { return a + b; }
  //console.log(array.reduce(plus)) = 1295
  return array.reduce(plus) / array.length;
};
console.log(average(JSONestudiantes.map(json.estudiantes.nota)));

/*
var Avgmarks = 0;

for (var i=0; i < json.estudiantes.length; i++) {
        Avgmarks += JSONestudiantes[i][1];
        var avg = (Avgmarks/JSONestudiantes.length);
}
document.getElementById("promedio").innerHTML=("Average grade: " + (Avgmarks)/JSONestudiantes.length);


/*
function average(array) {
  function plus(a, b) { return a + b; }
  //console.log(array.reduce(plus)) = 1295
  return array.reduce(plus) / array.length;
}
function age(p){return p.nota};
console.log(average(JSONestudiantes.map(age)));
/*
function calcularPromedio(json){
	function sumarNotas(a, b) {
		return a+b;
	}
	return json(sumarNotas)/array.length;
};
console.log(calcularPromedio(JSONestudiantes.map(json.estudiantes.nota)));
	var salida="El promedio del curso es: "
	var sumarNotas=0;
	for (i=0;i<json.length;i++){
		sumarNotas+=json[i].nota;
		return sumarNotas/json.length;

	}



//Función para mostrar el promedio
function mostrarPromedio() {
    document.getElementById("promedio").innerHTML=calcularPromedio(JSONestudiantes);
};
*/
console.table (JSONestudiantes);
