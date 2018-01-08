<<<<<<< HEAD
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
}

//Función para mostrar la planilla de estudiantes
function mostrarPlanilla() {
    leerJSON(JSONestudiantes);
}

//Función para calcular el promedio
function calcularPromedio(json){
	var salida="El promedio del curso es: "
	var sumarNotas=0;
	for (i=0;i<json.length;i++){
		sumarNotas+=json[i].nota;
		return sumarNotas/json.length;

	}

}

//Función para mostrar el promedio
function mostrarPromedio() {
    document.getElementById("promedio").innerHTML=calcularPromedio(JSONestudiantes);
}

<<<<<<< HEAD
console.table (listaEstudiantes);
=======
function evento_onload(){
	alert("Bienvenido a nuestro formulario de registro de usuario.");
}
function evento_onclick(){
	alert("Los datos fueron enviados exitosamente");
}
function evento_onfocus(elemento){
	elemento.style.background="#CCCCCC"
}
function evento_oncopy(){
	alert("El texto ha sido copiado");
}
>>>>>>> parent of 95d0c86... primer botón
=======
console.table (JSONestudiantes);
>>>>>>> parent of f28a89e... primer botón exitoso
