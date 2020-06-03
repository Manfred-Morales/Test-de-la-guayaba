# hecho por Manfred David Morales Gamboa
#Universidad de Costa rica Sede del Pacifico
#identificacon: 207760852


class Main

  def valorAlto(myArray)
    valor = myArray[0]
    for i in (1..myArray.length-1)
      if valor < myArray[i]
        valor = myArray[i]
      end
    end
    print valor
  end
end

ejecutar = Main.new
myArray = [13,2,4,35,1]
ejecutar.valorAlto(myArray)
gets()
