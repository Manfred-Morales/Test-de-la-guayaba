//hecho por Manfred David Morales Gamboa
//Universidad de Costa rica Sede del Pacifico
//identificacon: 207760852

class Main {
  public static void main(String[] args) {

     int[] array = {1,2,2,5,4,6,7,8,8,8};

  System.out.print(oncurrenciaNumero(array));
    

}

  public static String oncurrenciaNumero(int[] miarray){
    int ocurrencia =0;
    int valor =0;
    String mensaje="";
   for(int i=0; i<miarray.length; i++)
    {
        int contador = 0;
        for(int j=0; j<miarray.length; j++)
        {
            if(miarray[i]==miarray[j])
            {
                contador++;
            }   
            if(contador>ocurrencia)
            {
                valor = miarray[i];
                ocurrencia= contador;
              mensaje = "Resultado esperado: "+ "\n"+ "Ocurrencias :" + ocurrencia + "\n" + " Número : "+ valor;
            }   
        }
    }
    return mensaje;
  }
}

