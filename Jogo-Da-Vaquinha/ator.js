
//Ator
let xAtor = 85;
let yAtor = 366;
let colisao = false;
let pontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover())
    yAtor += 3;
  }
}

function podeSeMover(){
  return yAtor < 366;
}

function verificaColisao(){
  //collideRectCircle(x1, y1, largura1, altura1, cx, cy, diâmetro)
  for (let i = 0; i < imagemCarros.length; i++){
    
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor,15)
   
    if(colisao){
        voltaAtor();
      somDaColisao.play();
      if(pontosMaiorQueZero()){
        pontos -= 1;
      }
    }                        
  }
}

function pontosMaiorQueZero(){
  return pontos > 0;
}

function voltaAtor(){
  yAtor = 366;
}

function score(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60))
  text(pontos, width / 5, 27);
}

function pontuou(){
  if(yAtor < 15){
    pontos += 1;
    somDoPonto.play();
    voltaAtor();
  }
}