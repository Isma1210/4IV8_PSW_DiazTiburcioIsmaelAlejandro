function validarIn() {
    //Validar Usuario

    var checkOK = "0123456789";
    if (in_sesion.input_usu.value.trim() == ""){
    alert("Debe ingresar un valor en el campo Usuario");
    in_sesion.input_usu.focus();
        return false
    }
    var checkStr = in_sesion.input_usu.value;

    var allValido = true;

    if(in_sesion.input_usu.value.length < 10){
        alert("Escriba por lo menos 10 caracteres para el Usuario");
        in_sesion.input_usu.focus();
        return false;
    }

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
        alert("Escriba unicamente numeros en el campo Usuario y mayores a los ya existentes");
        in_sesion.input_usu.focus();
        return false;
    }

    //validar password
    var validador = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{7,20})/;
    var password = in_sesion.input_contra.value;
    if(!validador.test(password)){
        alert("El password debe incluir una letra mayuscula, una letra minuscula, 1 numero, 1 caracter especial y tener minimo 7 y maximo 20 caracteres");
        in_sesion.input_contra.focus();
        return false;
    }

    if (confirmacion!=true) {
        alert('Valida de nuevo el captcha');
    }

    

}

//Captcha
function cap() {

    var alpha=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V'
               ,'W','X','Y','Z','1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f','g','h','i',
               'j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    var a=alpha[Math.floor(Math.random()*62)];
    var b=alpha[Math.floor(Math.random()*62)];
    var c=alpha[Math.floor(Math.random()*62)];
    var d=alpha[Math.floor(Math.random()*62)];
    var e=alpha[Math.floor(Math.random()*62)];
    var f=alpha[Math.floor(Math.random()*62)];

    var sum=a + b + c + d + e + f;

    document.getElementById("capt").value=sum;
}

function validcap() {
    var string1 = document.getElementById('capt').value;
    var string2 = document.getElementById('textinput').value;
    if (string1 == string2){
        alert("Form is validated Succesfully");
        confirmacion=true;
        return true;
    }
    else {
        alert("Please enter a valid captcha");
        return false;
    }
}
