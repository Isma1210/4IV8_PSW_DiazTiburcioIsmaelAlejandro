//Problema 1
function problema1(){
    //Obtener el elemento
    var cadena=document.querySelector('#p1-input').value;
    //Separar cadena
    var cadenaS=cadena.split(' ');
    //Voltear cadena
    var cadenaV=cadenaS.reverse();
    //Unir cadena
    var cadenaU=cadenaV.join();

    document.querySelector('#p1-output').textContent=cadenaU;

    // alert("xd")
}










//problema 2

var xp1=document.getElementById("p2-x1").value;
    var xp2=document.getElementById("p2-x2").textContent=0;
    var xp3=document.getElementById("p2-x3").textContent=0;
    var xp4=document.getElementById("p2-x4").textContent=0;
    var xp5=document.getElementById("p2-x5").textContent=0;

    var yp1=document.getElementById("p2-y1").textContent=0;
    var yp2=document.getElementById("p2-y2").textContent=0;
    var yp3=document.getElementById("p2-y3").textContent=0;
    var yp4=document.getElementById("p2-y4").textContent=0;
    var yp5=document.getElementById("p2-y5").textContent=0;


function problema2() {

    //Creando la expresión que restringe
    var validar=/^[0-9.]+$/;
    //Obteniendo los valores
    var x1=parseFloat(document.getElementById("p2-x1").value);
    var x2=parseFloat(document.getElementById("p2-x2").value);
    var x3=parseFloat(document.getElementById("p2-x3").value);
    var x4=parseFloat(document.getElementById("p2-x4").value);
    var x5=parseFloat(document.getElementById("p2-x5").value);

    var y1=parseFloat(document.getElementById("p2-y1").value);
    var y2=parseFloat(document.getElementById("p2-y2").value);
    var y3=parseFloat(document.getElementById("p2-y3").value);
    var y4=parseFloat(document.getElementById("p2-y4").value);
    var y5=parseFloat(document.getElementById("p2-y5").value);

    //////////////////////////////////////////////////////////

    var xp1=document.getElementById("p2-x1").value;
    var xp2=document.getElementById("p2-x2").value;
    var xp3=document.getElementById("p2-x3").value;
    var xp4=document.getElementById("p2-x4").value;
    var xp5=document.getElementById("p2-x5").value;

    var yp1=document.getElementById("p2-y1").value;
    var yp2=document.getElementById("p2-y2").value;
    var yp3=document.getElementById("p2-y3").value;
    var yp4=document.getElementById("p2-y4").value;
    var yp5=document.getElementById("p2-y5").value;
    

    
    


    // //Validando que la pareja de componentes exista
    // if(xp1.match(validar) && xp2.match(validar) && xp3.match(validar) && xp4.match(validar) && xp5.match(validar) && yp1.match(validar) && yp2.match(validar) && yp3.match(validar) && yp4.match(validar) && yp5.match(validar)){
    //     var pEscalar=(x1*y1)+(x2*y2)+(x3*y3)+(x4*y4)+(x5*y5);
    //     document.getElementById("p2-output").textContent="El valor del producto punto es igual a: " + pEscalar;
	// }else{
    //     alert("solo numerossssssssssss")
    // }

    // //Validando que la pareja de componentes exista V2
    // if((xp1!="" && yp1=="")||(xp1!="" && yp1=="")){
    //     alert("Digite la pareja de la componente x1 o y1");
    // }
    // if((xp2!="" && yp2=="")||(xp2!="" && yp2=="")){
    //     alert("Digite la pareja de la componente x2 o y2");
    // }
    // if((xp3!="" && yp3=="")||(xp3!="" && yp3=="")){
    //     alert("Digite la pareja de la componente x3 o y3");
    // }
    // if((xp4!="" && yp4=="")||(xp4!="" && yp4=="")){
    //     alert("Digite la pareja de la componente x4 o y4");
    // }
    // if((xp5!="" && yp5=="")||(xp5!="" && yp5=="")){
    //     alert("Digite la pareja de la componente x5 o y5");
    // }
    // if(xp1.match(validar) && xp2.match(validar) && xp3.match(validar) && xp4.match(validar) && xp5.match(validar) && yp1.match(validar) && yp2.match(validar) && yp3.match(validar) && yp4.match(validar) && yp5.match(validar)){
    //         var pEscalar=(x1*y1)+(x2*y2)+(x3*y3)+(x4*y4)+(x5*y5);
    //         document.getElementById("p2-output").textContent="El valor del producto punto es igual a: " + pEscalar;
    //     }else{
    //         alert("solo numerossssssssssss")
    //     }

    // //Validando que la pareja de componentes exista V2
    // if (xp1=="" || xp2==""||xp3==""||xp4==""||xp5==""||yp1==""||yp2==""||yp3==""||yp4==""||yp5==""){
    //     if((xp1!="" && yp1=="")||(xp1=="" && yp1!="")){
    //         alert("Digite la pareja de la componente x1 o y1");
    //     }
    //     if((xp2!="" && yp2=="")||(xp2=="" && yp2!="")){
    //         alert("Digite la pareja de la componente x2 o y2");
    //     }
    //     if((xp3!="" && yp3=="")||(xp3=="" && yp3!="")){
    //         alert("Digite la pareja de la componente x3 o y3");
    //     }
    //     if((xp4!="" && yp4=="")||(xp4=="" && yp4!="")){
    //         alert("Digite la pareja de la componente x4 o y4");
    //     }
    //     if((xp5!="" && yp5=="")||(xp5=="" && yp5!="")){
    //         alert("Digite la pareja de la componente x5 o y5");
    //     } 
    // }else if(xp1.match(validar) || yp1.match(validar) || xp2.match(validar) || yp2.match(validar) || xp3.match(validar) || yp3.match(validar) || xp4.match(validar) || yp4.match(validar) || xp5.match(validar) || yp5.match(validar) ){
    //         var pEscalar=(x1*y1)+(x2*y2)+(x3*y3)+(x4*y4)+(x5*y5);
    //         document.getElementById("p2-output").textContent="El valor del producto punto es igual a: " + pEscalar;
    //     }else{
    //         alert("solo numerossssssssssss")
    //     }

    //Validando que la pareja de componentes exista V2
    if (xp1=="" || xp2==""||xp3==""||xp4==""||xp5==""||yp1==""||yp2==""||yp3==""||yp4==""||yp5==""){
        alert("Ingrese todos los datos");
        
    }else if(xp1.match(validar) && yp1.match(validar) && xp2.match(validar) && yp2.match(validar) && xp3.match(validar) && yp3.match(validar) && xp4.match(validar) && yp4.match(validar) && xp5.match(validar) && yp5.match(validar) ){
            var pEscalar=(x1*y1)+(x2*y2)+(x3*y3)+(x4*y4)+(x5*y5);
            document.getElementById("p2-output").textContent="El valor del producto punto es igual a: " + pEscalar;
        }else{
            alert("solo numerossssssssssss")
        }

    
    

    
    
    
    // alert(x1)
    // alert(x2)
    // alert(x3)
    // alert(x4)
    // alert(x5)

    // alert(y1)
    // alert(y2)
    // alert(y3)
    // alert(y4)
    // alert(y5)
}



//problema 3

function problema3() {
    //definir un alfabeto
    var alfabeto=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    //VAMOS A OBTENER LA ENTRADA DE LOS DATOS
    var p3_input=document.querySelector('#p3-input').value;

    var p3_palabras=p3_input.split(',');

    //tengpo que eliminar los espacios

    p3_palabras = p3_palabras.map(function(palabra){
        //crear una expresión que me recupere las palabras
        return palabra.replace(/\s/g, '').toUpperCase();
    });

    //tenbgo que calcular cuantos caracteres unicos hay
    var p3_res='';
    
    p3_palabras.forEach(function(palabra,i){
        //separar las palabras actyuales del array que contiene cada letra
        var letras_unicas=[];
        var palabra_array=palabra.split('');

        //iteracion
        alfabeto.forEach(function(letra,j){
            //itero la palabra
            palabra_array.forEach(function(letras_palabras,k){
                //comprobar que la letra este dentro deñl alfabeto
                if (letras_palabras==letra) {
                    //si la letra no la hemos contado
                    //la agregamos a una array para contar
                    //las letras unicas
                    if (letras_unicas.indexOf(letra)<0) {
                        letras_unicas.push(letra);

                    }
                }
            });
        });
        p3_res +='Palabra: '+palabra+ '='+letras_unicas.length+'\n';
    });
    document.querySelector('#p3-output').textContent=p3_res;

}

