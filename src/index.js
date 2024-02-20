// Define uma função chamada "calcularPontos" que recebe como parâmetros o número de vitórias e derrotas
function calcularPontos(vitorias, derrotas){
    // Calcula o saldo de pontos subtraindo as derrotas das vitórias
    let saldoPontos = vitorias - derrotas;
    // Retorna o saldo de pontos calculado
    return saldoPontos;
}

// Chama a função "calcularPontos" com o número de vitórias e derrotas e armazena o resultado em uma variável
let pontosClassificados = calcularPontos(99, 15);
// Declara uma variável para armazenar o nível do herói
let nivelClassificado = "";

// Verifica o saldo de pontos e atribui o nível correspondente ao herói
if(pontosClassificados <= 10){
    nivelClassificado = "Ferro";
}
else if(pontosClassificados <= 20){
    nivelClassificado = "Bronze";
}
else if(pontosClassificados <= 50){
    nivelClassificado = "Prata";
}
else if(pontosClassificados <= 80){
    nivelClassificado = "Ouro";
}
else if(pontosClassificados <= 90){
    nivelClassificado = "Diamante";
}
else if(pontosClassificados <= 100){
    nivelClassificado = "Lendário";
}
else{
    nivelClassificado = "Imortal";
}

// Exibe uma mensagem com o saldo de pontos e o nível do herói
console.log(`O Herói tem um saldo de ${pontosClassificados} pontos e está no nível ${nivelClassificado}.`);
