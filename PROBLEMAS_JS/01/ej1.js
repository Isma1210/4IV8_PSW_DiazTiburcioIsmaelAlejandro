function leerValores(){
	var monto = parseFloat(document.getElementById("dinero").value);
	var campo= document.getElementById("dinero").value;
	var validar=/^[0-9]+$/;

	if (monto<0) {
		alert("No sea pendejo no puede poner numeros negativos")
		
	}else if(campo==""){
		alert("Otra vez usted pendejo");

	}else if(campo.match(validar)){
		var resultado = (monto*0.02);
    var resultadof=resultado+monto;
	//alert("LeerValores: "+resultado);
	document.getElementById('monto').textContent = "Monto actual: "+resultadof+" pesos";
	}else{
		alert("Ingrese solo números chingada madre!!!");
	}
       
}

