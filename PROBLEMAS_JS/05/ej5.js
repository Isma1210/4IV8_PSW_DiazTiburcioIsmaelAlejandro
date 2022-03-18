function leerValores(){

	var nHom = parseFloat(document.getElementById("hombre").value);
    var nMuj = parseFloat(document.getElementById("mujer").value);
    var Hom1 = document.getElementById("hombre").value;
    var Muj1 = document.getElementById("mujer").value;
    var validar=/^[0-9.]+$/;
    
    

    //alert("LeerValores: "+pTotal);
    if (nHom<0 || nMuj<0) {
		alert("No puede poner numeros negativos")
		
	}else if(Hom1=="" || Muj1==""){
		alert("Ingrese los datos");
    }else if(Hom1.match(validar) && Muj1.match(validar)){
        var tAlum=nHom+nMuj;
        var pHom=(nHom*100)/tAlum;
        var pMuj=(nMuj*100)/tAlum;
        

        document.getElementById('totalH').textContent = "El porcentaje de varones es del "+pHom+"%";
        document.getElementById('totalM').textContent = "El porcentaje de varones es del "+pMuj+"%";
		
	}else{
		alert("Ingrese solo números!!!");
	}


	
    
       
}