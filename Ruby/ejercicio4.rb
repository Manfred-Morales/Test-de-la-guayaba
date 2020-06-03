# hecho por Manfred David Morales Gamboa
#Universidad de Costa rica Sede del Pacifico
#identificacon: 207760852


class Main
  def ejercicio4(myArray)

    repeticiones = [0,0,0,0,0]
      repeticion = 1;

      for i in (0..myArray.length-1)
        repeticiones[myArray[i]-1] +=1
      end
      
      mensajeResultado = "Resultado Esperado :"

      repeticiones.each do |valor|
        mensajeResultado += "\n" + repeticion.to_s
        for x in (1..valor)
          mensajeResultado += "*"
        end

        repeticion += 1
      end

      print mensajeResultado
    end
end



ejecutar = Main.new
myArray = [1,2,1,3,3,1,2,1,5,1]
ejecutar.ejercicio4(myArray)
gets()



