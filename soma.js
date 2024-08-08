function calcularSoma() {
    //Pega os números digitados nos campos de entrada
    var numeroA = parseFloat(document.getElementById('numeroA').value);
    var numeroB = parseFloat(document.getElementById('numeroB').value);

    //Verifica se os números são válidos (ou seja, se são números mesmo)
    if (!isNaN(numeroA) && !isNaN(numeroB)) {
        //Realiza a soma dos números
        var resultado = numeroA + numeroB;

        //Exibe o resultado na página
        document.getElementById('resultado').innerHTML = "A soma de " + numeroA + " e " + numeroB + " é: " + resultado;
    } else {
        //Se os números não forem válidos, pede para digitar números corretos
        document.getElementById('resultado').innerHTML = "Por favor, digite números válidos.";
    }
 }
