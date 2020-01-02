var txtTextoLineasP = document.getElementById("txtTexto_Lineas");
var btn_ADarleP  = document.getElementById("btn_ADarle");


btn_ADarleP.addEventListener("click", dibujoPorClick);

var d=document.getElementById("dibujito2");
var lienzo = d.getContext("2d");
var ancho = d.width;

function dibujarLine(color, xinicial,xfinal,yinicial,yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial,xfinal);
  lienzo.lineTo(yinicial,yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
  var txtTexto_LineasVar = parseInt(txtTextoLineasP.value);

  var lineas = txtTexto_LineasVar;
  var l = 0;
  var yi,xf;
  var colorcito = "#FAA";
  var espacio = ancho / lineas;

  dibujarLine(colorcito,1,1,1,300)
  dibujarLine(colorcito,1,299,299,299)

  while(l< lineas)
  {
    yi = espacio * l;
    xf = espacio *(l +1);
    dibujarLine("blue",300,yi,xf,0);
    dibujarLine(colorcito,0,yi,xf,300);
    console.log("linea " + l)
    l++;
  }

}
