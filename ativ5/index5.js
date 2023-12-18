//funções.

function calcularMedia(numeros)
{
    var total = 0; for (var i = 0; i <numeros.length; i++)
    {
        total += numeros[i];
    }
    var media = total / numeros.length; return media;
} var numeros = [10, 20, 30, 40, 50];
document.write(calcularMedia(numeros)); //Deve imprimir a mèdia, que é 30.

