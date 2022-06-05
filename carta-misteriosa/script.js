//requisito 3 ao 5


const botaoCarta = document.querySelector("#criar-carta");
const gerarCarta = document.getElementById("carta-gerada");
const imputCarta = document.querySelector("#carta-texto");
/* const novaSelecao = document.querySelector("#carta-gerada"); */

var classesEstilos = ["newspaper", "magazine1", "magazine2"];
var classesTamanhos = ["medium", "big", "reallybig"]
var classesRotacao = ["rotateleft", "rotateright"]
var classesInclinacao = ["skewleft", "skewright"]
//var classesTexto = ['textoBranco', 'textoPreto', 'textoCinza'];

function sorteia(arr) {
  var name = arr[Math.ceil(Math.random() * arr.length - 1)];
  return name;
}
console.log(sorteia(classesEstilos));

botaoCarta.addEventListener("click", function () {
  let teste = imputCarta.value;
  gerarCarta.innerHTML = "";
  if (teste.length === 0 || /^\s*$/.test(teste)) {
    gerarCarta.innerHTML = "Por favor, digite o conteúdo da carta."
  } else {
    geraCarta(teste);
  }
});

function geraCarta(frase) {
  var frase_array = [];
  frase_array = frase.split(' ');
  console.log(frase_array.length);
  let val = 0;
  /* var outro = []; */
  for (var i = 0; i < frase_array.length; i++) {
    val++;
    // outro = frase_array[i];
    const clickCarta = document.querySelector("#span");
    const geraSpan = document.createElement("span");
    /*  geraSpan.className = estilos; */
    /* geraSpan.classList.add(estilos);
    geraSpan.classList.add(rotacao);
    geraSpan.classList.add(inclinacao); */
    geraSpan.id = "span";
    geraSpan.innerHTML = frase_array[i];
    geraSpan.classList.remove("newspaper", "magazine1", "magazine2");
    geraSpan.classList.remove("skewleft", "skewright");
    geraSpan.classList.remove("rotateleft", "rotateright");
    geraSpan.classList.remove("medium", "big", "reallybig");
    geraSpan.classList.add(sorteia(classesEstilos));
    geraSpan.classList.add(sorteia(classesInclinacao));
    geraSpan.classList.add(sorteia(classesRotacao));
    geraSpan.classList.add(sorteia(classesTamanhos));
    geraSpan.addEventListener("click", function () {
      /*  const clickCarta = document.querySelector("#span"); */
      geraSpan.classList.remove("newspaper", "magazine1", "magazine2");
      geraSpan.classList.remove("skewleft", "skewright");
      geraSpan.classList.remove("rotateleft", "rotateright");
      geraSpan.classList.remove("medium", "big", "reallybig");
      geraSpan.classList.add(sorteia(classesEstilos));

      geraSpan.classList.add(sorteia(classesInclinacao));

      geraSpan.classList.add(sorteia(classesRotacao));

      geraSpan.classList.add(sorteia(classesTamanhos));
      gerarCarta.appendChild(geraSpan);
    })
    gerarCarta.appendChild(geraSpan);
  }
  document.querySelector("#carta-contador").innerHTML = frase_array.length;
  console.log(frase_array.length);
}
