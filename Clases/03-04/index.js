let peso = 54;
let altura = 1.7;

function calcularIMC(peso, altura) {
  const imc = peso / (altura * altura);

  if (imc <= 18.5) {
    console.log("Bajo peso");
  } else if (imc <= 24.9) {
    console.log("Peso saludable");
  } else if (imc <= 29.9) {
    console.log("Sobrepeso");
  } else {
    console.log("Obesidad");
  }
}

calcularIMC(peso, altura);
