function validarProblema() {
    //Validar fecha de nacimiento
    const vFecha = new Date(reg_problema.input_fecha.value);
    const d = Date.now();
    timeFecha = vFecha.getTime();
    //timeFechaActual = d.getTime();
        
    if(!Number.isNaN(timeFecha)){
         if(d<=timeFecha){
            alert("La fecha introducida debe ser menor que la del día de hoy");
            reg_problema.input_fecha.focus();
            return false
         }
    }
    else{
        alert("Debe ingresar una fecha valida");
        reg_problema.input_fecha.focus();
            return false
    }

    //Validar nombre
    if(reg_problema.input_nombre.value.length < 2){
        alert('Digite al menos dos caracteres')
        reg_sesion.input_nombre.focus();
        return false;
    }

    if (reg_problema.input_nombre.value.trim() == ""){
        alert("Debe ingresar un valor en el campo nombre");
        return false;
    }

    var checkOK = "QWERTYUIOPASDFGHJKLZXCVBNMÑ"
    +"qwertyuiopasdfghjklñzxcvbnm"+" ";

    var checkStr = reg_problema.input_nombre.value;

    var allValido = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j < checkOK.length; j++){
            if(ch == checkOK.charAt(j))
            break;
        }
        if(j == checkOK.length){
            allValido = false;
            break;
        }
    }

    if(!allValido){
        alert("Escriba unicamente letras en el campo de nombre");
        reg_problema.input_nombre.focus();
        return false;
    }


       //validar apellido paterno

       if(reg_problema.input_appat.value.length < 2){
        alert("Escriba por lo menos 2 Caracteres para el apellido");
        formulario.appat.focus();
        return false;
        }

        var checkOK = "QWERTYUIOPASDFGHJKLZXCVBNMÑ"
        +"qwertyuiopasdfghjklñzxcvbnm";

        var checkStr = reg_problema.input_appat.value;

        var allValido = true;

        for(var i = 0; i < checkStr.length; i++){
            var ch = checkStr.charAt(i);
            for(var j = 0; j < checkOK.length; j++){
                if(ch == checkOK.charAt(j))
                break;
            }
            if(j == checkOK.length){
                allValido = false;
                break;
            }
        }

        if(!allValido){
            alert("Escriba unicamente letras en el campo de apellido");
            reg_problema.input_appat.focus();
            return false;
        }

        //validar apellido materno

        if(reg_problema.input_apmat.value.length < 2){
            alert("Escriba por lo menos 2 Caracteres para el apellido");
            reg_problema.input_apmat.focus();
            return false;
        }

        var checkOK = "QWERTYUIOPASDFGHJKLZXCVBNMÑ"
        +"qwertyuiopasdfghjklñzxcvbnm";

        var checkStr = reg_problema.input_apmat.value;

        var allValido = true;

        for(var i = 0; i < checkStr.length; i++){
            var ch = checkStr.charAt(i);
            for(var j = 0; j < checkOK.length; j++){
                if(ch == checkOK.charAt(j))
                break;
            }
            if(j == checkOK.length){
                allValido = false;
                break;
            }
        }

        if(!allValido){
            alert("Escriba unicamente letras en el campo de apellido");
            reg_problema.input_apmat.focus();
            return false;
        }

    
}