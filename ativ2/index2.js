//Estruturas Condicionais.

function verificaridade(idade){
    if (idade >= 18)
    {return "Maior de idade";
}
else {return "  Menor de idade"}
}
document.write(verificaridade(20)); //deve imprimir "Maior de idade"
document.write(verificaridade(15)); //deve imprimir "menor de idade"

