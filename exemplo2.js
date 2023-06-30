function mensagem() {
  const nome = "Felipe";
  document.write("Seja bem vindo " + nome); //o símbolo + tem a função de concatenar (juntar textos)
}

function soma(num1, num2) {
  document.write(` A soma de ${num1} e ${num2} é: ${num1 + num2}`);
}

function mult(num1, num2) {
  return num1 * num2;
}

function mediaNotas() {
  const valor1 = parseFloat(document.getElementById("valor1").value);
  const valor2 = parseFloat(document.getElementById("valor2").value);
  const media = (valor1 + valor2) / 2;
  document.getElementById("result").innerHTML = media;

// aprovado *se* media for maior ou igual a 6
if (media >= 6) {
  document.getElementById("status").innerHTML = "APROVADO";
} else {
  document.getElementById("status").innerHTML = "REPROVADO";
}
}

function limpar() {
    document.getElementById("result").innerHTML = "";
    document.getElementById("status").innerHTML = "";
}
// mensagem();
// document.write("<br>");
// soma(10, 15);
// document.write("<br>");
// document.write(mult(5, 10));
