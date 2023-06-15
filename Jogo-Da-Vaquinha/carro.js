//lista
let xCarros = [600,600,600,600,600,600]
let yCarros = [40,96,150,210,315,260]
let velocidadeCarros = [5,3,2,1,3,4.5,4]
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
    
  }
}

function movimentaCarro(){
  for (let i = 0; i<imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  //print(xCarro);
  }
}

function voltaCarro(){
  for (let i = 0; i<imagemCarros.length; i++){
    if(xCarros[i] < -50){
    xCarros[i] = 600
    }
  }
}

function terminouARua(xCarros){
  return xCarro <- 30;
}
