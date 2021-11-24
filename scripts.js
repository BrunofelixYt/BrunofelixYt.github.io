
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

// Nodos da cobrinha

var nodos = new Array();

nodos.length = 0;

function novojogo() {

var xcenter = Math.floor(nx / 2);

var ycenter= Math.floor(ny / 2);

nodos.length= 0;

nodos.push(new Nodo(xcenter, ycenter + 2, dbaixo));

nodos.push(new Nodo(xcenter, ycenter + 1, dbaixo)); nodos.push(new Nodo(xcenter, ycenter, dbaixo));

nodos.push(new Nodo(xcenter, ycenter - 1, dbaixo));

nodos.push(new Nodo(xcenter,

btPausa.innerHTML = "Iniciar";

btPausa.disabled = false;

desenhar();

function desenhar() {

//Auxiliar de desenho

 var xl, yl;

//Limpeza da tela 

 context.clearRect(0, 0, canvas.width, canvas.height);

//bordas

 context.fillStyle="#888888";

 context fillRect(borda_x, 0, canvas.width 1, canvas.height-1); context.fillRect(0, borda_y, canvas.width - 1, canvas.height - 1);

//Cobrinha

context.fillStyle="#0OFF00";

for (i = 0; i<nodos.length; i++) {

xi = distancia + nodos[i].x (largura + distancia);

yl = distancia + nodos[1].y* (largura + distancia);

context.fillRect(xi, yi, largura, largura);

//Comida
let appleX = (appleY = 15);

//Corzinha da comida

ctx.fillStyle = "red";
  ctx.fillRect(appleX * tamanhoCaminho, 
appleY * tamanhoCaminho, tamanhoCaminho, tamanhoCaminho);

MundoJS
Criando jogo Snake em JavaScript e Canvas


 
Hoje criaremos um jogo Snake utilizando HTML5 e JavaScript.

Para isso, criaremos um arquivo HTML que servirá de base para nosso jogo. Crie um arquivo chamado index.html e insira o código:

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jogo Snake</title>
</head>
<body>
        <script src="scripts.js"></script>
</body>
</html>
Dentro do nosso elemento body, adicionaremos um elemento canvas:

<canvas id="canvas" width="400" height="400"></canvas>
E agora, adicionaremos o JavaScript:
Agora que temos o Canvas adicionado, adicionaremos o JavaScript. Crie um arquivo chamado scripts.js, e nele, adicionaremos a lógica do nosso jogo. O nosso arquivo irá renderizar o canvas e os elementos do jogo.

Primeiro, precisamos definir o que acontece quando o window.onload é chamado. Precisamos obter o elemento Canvas e adicionar um evento de pressionar teclas. Esse evento faz o canvas se redesenhar com a nova posição da cobra e onde o alimento aparecerá.

let canvas;
let ctx;
window.onload = function(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    document.addEventListener("keydown", keyDownEvent);
    let x = 8;
    setInterval(desenharJogo, 1000 / x);
};
Tratamento das teclas:
Precisamos definir o que a nossa função keyDownEvent chamada no addEventListener faz. Para isso, utilizaremos keyCodes, que representam o que cada seta do teclado faz:

function keyDownEvent(event){
    // nextX e nextY representam as direções que a cobra irá percorrer
    // nos eixos X e Y, respectivamente
    switch(event.keyCode){
        case 37:
            nextX = -1;
            nextY = 0;
            break;
        case 38:
            nextX = 0;
            nextY = -1;
            break;
        case 39:
            nextX = 1;
            nextY = 0;
            break;
        case 40:
            nextX = 0;
            nextY = 1;
            break;
    }
}
O nextX e nextY representam a direção em que a cobra se desloca.

Serpente:
Vamos definir as variáveis que serão utilizadas para criar a serpente.

let defaultTamanhoCauda = 3;
let tamanhoCauda = defaultTamanhoCauda;
let caminhoCobra = [];
let cobraEixoX = cobraEixoY = 10;
Definimos um tamanho inicial da serpente como 3. A cada vez que ela ingerir o alimento, será incrementado em 1 esse valor. O caminho que a serpente percorrerá é uma matriz de posições X e Y, onde cobraEixoX e cobraEixoY serão a posição inicial da cobra.

Tela do jogo:
Criaremos a tela onde o jogo funcionará. É uma grade 20×20, que corresponde à largura e altura da tela.

//Criação da tela de jogo
let tamanhoTela = tamanhoCaminho = 20;
let nextX = nextY = 0;
Comida:
Criaremos a comida, que ficará em uma posição X e Y:

//Criação da comida
let appleX = (appleY = 15);

//Posição da cobra 

function desenharJogo(){
    cobraEixoX += nextX;
    cobraEixoY += nextY;
    if (cobraEixoX < 0){
        cobraEixoX = tamanhoTela -1;
    }
    
    if (cobraEixoX > tamanhoTela - 1){
        cobraEixoX = 0;
    }
    
    if (cobraEixoY < 0){
        cobraEixoY = tamanhoTela -1;
    }
    
    if (cobraEixoY > tamanhoTela - 1){
        cobraEixoY = 0;
    }
}
 
//Quando a cobrinha comer

if (cobraEixoX == appleX && cobraEixoY == appleY){
        tamanhoCauda++;
        
 appleX = Math.floor(Math.random() * tamanhoTela);
       
 appleY = Math.floor(Math.random() * tamanhoTela);
  }
 
//Tamanho inicial

for (let i = 0; i < caminhoCobra.length; i++){
        ctx.fillRect(
            caminhoCobra[i].x * tamanhoCaminho,
            caminhoCobra[i].y * tamanhoCaminho,
            tamanhoCaminho,
            tamanhoCaminho
        );
        if (caminhoCobra[i].x == cobraEixoX && caminhoCobra[i].y == cobraEixoY){
            tamanhoCauda = defaultTamanhoCauda;
        }
   }

//Excedencia de tamanho
caminhoCobra.push({
        x:cobraEixoX,
        y:cobraEixoY
    });
    while (caminhoCobra.length > tamanhoCauda){
        caminhoCobra.shift(); }

