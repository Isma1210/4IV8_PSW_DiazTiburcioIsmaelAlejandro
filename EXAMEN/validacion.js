function validar(formulario){
    
    if(formulario.nombre.value.length < 3){
        alert("Escriba por lo menos  5 caracteres para el nombre");
        formulario.nombre.focus();
        return false();
    }

    var checarOK = "QWERTYUIOIPASDFGHJKLÑZXCVBNM" + "qwertyuiopasdfghjklñzxcvbnm";

    var checarStr = formulario.nombre.value;

    var allValido = true;

    for(var i =0; i < checarStr; i++){
        var ch= checarStr.charAt(i)
        for(var j = 0; j < checarOK.length; j++){
            if(ch == checarOK.charAt(j))
            break;
        }
        if(j == checarOK.length){
            allValido = false;
            break;
        }
    }

    if(allValido){
        alert("Escriba unicamente letras en el campo de nombre");
        formulario.nombre.focus();
        return false;
    }

    var checarOK = "0123456789";
    var checarStr = formulario.edad.value;

    var allValido = true;

    for(var i =0; i < checarStr; i++){
        var ch= checarStr.charAt(i)
        for(var j = 0; j < checarOK.length; j++){
            if(ch == checarOK.charAt(j))
            break;
        }
        if(j == checarOK.length){
            allValido = false;
            break;
        }
    }

    if(allValido){
        alert("Escriba unicamente letras en el campo de nombre");
        formulario.nombre.focus();
        return false;
    }

    /*
    Es necesario que busquen como crear expresiones regulares
    para poder haber uso de una  expresion regular
    */

    var txt = formulario.email.value;

    //crear expresion

    var b = /^[^@\s]+[^@\.\s]+(\.[^@\.\s]+)+$/;

    alert("Email " + (b.test(txt)?" ":"no")+"valido");

    return b.test;
}