//hecho por Manfred David Morales Gamboa
//Universidad de Costa rica Sede del Pacifico
//identificacon: 207760852

function factoriales(n){
var resultado = "0! = 1 \n";
  for(i = 1; i <= n; i++){
    var valor = 1;
    for(var x = i; x >= 1; x--){

      valor = valor * x;
      
    }
   resultado += i+ "! = "+ valor + "\n";
  }
  return resultado;
}

var numero = parseInt(prompt("Dijite el valor al que desea calcular su factorial"));

console.log(factoriales(numero));