

//obetener las piezas

var piezas =document.getElementsByClassName("mobil");

var tamWidth=[134,192,134,163,134,163,134,192,134]
var tamHeight=[163,134,163,134,192,134,163,134,163]

//asignarlos a las piezas

for(var i=0;i<piezas.length;i++){
    piezas[i].setAttribute("width",tamWidth);
    piezas[i].setAttribute("height",tamHeight);
    piezas[i].setAttribute("x",Math.floor((Math.random()*10)+i));
    piezas[i].setAttribute("y",Math.floor((Math.random()*400)+i));
    piezas[i].setAttribute("onmousedown","seleccionarElemento(evt)");
}

var elementSelect=0;
var currentX=0;
var currentY=0;
var currentPosX=0;
var currentPosY=0;

function seleccionarElemento(evt){
    elementSelect=reordenar(evt);
    currentX=evt.clienteX;
    currentY=evt.clienteY;
    currentPosX=parseFloat(elementSelect.getAttribute("x"));
    currentPosY=parseFloat(elementSelect.getAttribute("y"));
    elementSelect.setAttribute("onmousemove","moverElemento(evt)");

}

function moverElemento(evt) {

    var dx=evt.clienteX-currentX;
    var dy=evt.clienteY-currentY;

    currentPosX=currentPosX+dx;
    currentPosX=currentPosY+dy;

    elementSelect.setAttribute("x",currentPosX);
    elementSelect.setAttribute("y",currentPosY);

    currentX=evt.clienteX;
    currentY=evt.clienteY;

    elementSelect.setAttribute("onmouseout","deseleccionarElemento(evt)");
    elementSelect.setAttribute("onmouseup","deseleccionarElemento(evt)");
    iman();
    
}

function deseleccionarElemento(evt){

    //saber si ya está en donde debe de estar la pieza
    testing();
    if (elementSelect !=0) {
        elementSelect.removeAttribute("onmousemove");
        elementSelect.removeAttribute("onmouseout");
        elementSelect.removeAttribute("onmouseup");
        elementSelect=0;
    }

}

var entorno=document.getElementById("entorno");

