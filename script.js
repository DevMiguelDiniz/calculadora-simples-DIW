var op = +prompt("Escolha:\n1.Soma\n2.Subtração\n3.Multiplicação\n4.Divisão");
var n1 = +prompt("Primeiro número:");
var n2 = +prompt("Segundo número:");
var r = 0;

switch (op) {
    case 1:
        r = n1 + n2;
        break;
    case 2:
        r = n1 - n2;
        break;
    case 3:
        r = n1 * n2;
        break;
    case 4:
        if (n2 !== 0) {
            r = n1 / n2;
        } else {
            alert("Erro: Divisão por zero.");
        }
        break;
    default:
        alert("Opção inválida.");
}

alert("Resultado = " + r);