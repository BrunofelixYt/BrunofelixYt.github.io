
varcanvas= document.getElementById("tela");
varcontext= canvas.getContext("2d");
varbtPausa= document.getElementById("btPausa")

{var nx= 0; 
 var ny= 0;
  var largura= 20; 
   var distância= 5; 
    var borda_x, borda_y;
}   

function criarCampo{

nx = Math.floor((canvas.width- distancia) / (largura + distancia));

ny = Math.floor((canvas.height - distancia) / (largura + distancia)); borda_xnx* (distancia + largura) + distancia;

borda_x= nx* (distancia + largura) + distancia;

borda_y=ny* (distancia + largura) + distancia;

}

function novojogo() {

btPausa.innerHTML = "Iniciar";

btPausa.disabled = false;

desenhar();

}

function desenho() {

 var xi, yi;

context.clearRect(0, 0, canvas.width, canvas.height); 

//Desenho de bordas

context.fillStyle="#888888";

context.fillRect(borda_x, 0, canvas.width - 1, canvas.height

- 1);

context.fill Rect(0, borda_y, canvas.width - 1, canvas.height - 1); 
 
