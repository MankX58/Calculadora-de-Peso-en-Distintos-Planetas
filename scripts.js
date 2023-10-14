var usuario = prompt("Inserte su peso")
var Peso = parseFloat(usuario);
var g_tierra = 9.81
var g_marte = 3.7
var g_jupiter = 27.8
var Planeta = prompt("Seleccione un planeta\n 1 Marte 2 Juptiter")
var Nombre


if(Planeta == 1) {
    var Peso_Usuario = Peso * g_marte / g_tierra
    Peso_Usuario = Peso_Usuario.toFixed(2);
}
else if(Planeta == 2){
    var Peso_Usuario = Peso * g_jupiter / g_tierra
Peso_Usuario = Peso_Usuario.toFixed(2)
}
else {
    Peso_Usuario = 666
}


function suck1(element)
{
 location.reload

}

function suck2(element)
{
 location.reload

}







