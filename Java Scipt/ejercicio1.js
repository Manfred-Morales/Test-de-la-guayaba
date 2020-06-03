//hecho por Manfred David Morales Gamboa
//Universidad de Costa rica Sede del Pacifico
//identificacon: 207760852

var valores1 = [2, 3, 4, 6];
var valores2 = [123, 67, 890, 4];
var valores3 = [2, 3, 7, 9, 4, 5, 6, 9, 12];
var resultados = [];

function iteracionNumero(array){

  for (var i = 0; i < array.length; i++) {
    valor = 1; 
    for (var x = 0; x < array.length; x++) {
      if(i != x){
        
        valor = valor * array[x]; 

      }
    }
    resultados.push(valor);
    
  } 
    return resultados;
}
console.log(iteracionNumero(valores1));
//console.log(iteracionNumero(valores2));
//console.log(iteracionNumero(valores3));