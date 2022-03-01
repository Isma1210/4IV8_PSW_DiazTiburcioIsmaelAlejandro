/*
Es un lenguaje que posee un paradigma orientado a objetos
y a funciones por tal motivo presenta una particularidad la cuel es

NO TIPADO

no existe int,double,float,String, etc

Dentro de JS todo es VAR -> Variable

De acuerdo al estandar de ES6 se manejan 3 tipos de 
variables:

VAR
LET -> Variable de tipo protected
CONST

*/

function validar(formulario){

    if(formulario.nombre.value.length < 5){
        alert("Escriba por lo menos 5 caracteres para el nombre");
        formulario.nombre.focus();
        return false;
    }

    var checarOK = "QWERTYUIOPASDFGHJKLÑZXCVBNM" + "qwertyuiopasdfghjklñzxcvbnm";

    var checkStr = formulario.nombre.value;

    var allValido = true;

    for(var i = 0; i<checkStr.length; i++){
        var ch= checkStr.charAt(i)
        for(var j= 0; j < checarOK.length; j++){
            if(ch == checarOK.charAt(j))
            break;
        }
        if(j == checarOK.length){
            allValido= false;
            break;
        }
    }

    if(!allValido){
        alert("Escriba unicamente letras en el campo de nombre");
        formulario.nombre.focus();
        return false;
    }

    var checarOK = "1234567890";

    var checkStr = formulario.edad.value;

    var allValido = true;

    for(var i = 0; i<checkStr.length; i++){
        var ch= checkStr.charAt(i)
        for(var j= 0; j < checarOK.length; j++){
            if(ch == checarOK.charAt(j))
            break;
        }
        if(j == checarOK.length){
            allValido= false;
            break;
        }
    }

    if(!allValido){
        alert("Escriba unicamente letras en el campo de edad");
        formulario.edad.focus();
        return false;
    }

    /*
    Es necesario que busquen como crear expresiones regulares
    para poder hacer uso de una expresion regular
    */

    var txt = formulario.email.valur;

    //crear expresion

    var b = /^[^@\s]+[^@\.\s]+(\.[^@\.\s]+)+$/;; 

    alert("Email " + (b.test(txt)?" ":"no")+"valido");

    return b.test;
}