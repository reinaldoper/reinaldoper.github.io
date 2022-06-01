//gerador de RGB aleatório principal

function randomRgb() {
  const r = Math.floor((Math.random() * 255));
  const g = Math.floor((Math.random() * 255));
  const b = Math.floor((Math.random() * 255));
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

//gerador de RGB aleatório
const acertou = document.querySelector("header");
const acertou1 = document.createElement("h2");
acertou1.id = "rgb-color";
acertou.appendChild(acertou1);
const pegaH2 = document.getElementById("rgb-color");
const answerh1 = document.querySelector("#answer");
answerh1.innerHTML = "Escolha uma cor";



//função gera cores das bolas.

function geradorBackground() {
  let a = randomRgb();
  let b = randomRgb();
  let c = randomRgb();
  let d = randomRgb();
  let e = randomRgb();
  let f = randomRgb();

  document.querySelector("#sessao").children[0].style.backgroundColor = a;
  document.querySelector("#sessao").children[1].style.backgroundColor = b;
  document.querySelector("#sessao").children[2].style.backgroundColor = c;
  document.querySelector("#sessao").children[3].style.backgroundColor = d;
  document.querySelector("#sessao").children[4].style.backgroundColor = e;
  document.querySelector("#sessao").children[5].style.backgroundColor = f;





  const letters = [a, b , c, d, e ,f];
  let color = '';
  
  
    color = letters[Math.floor(Math.random() * 6)];
  
    
    pegaH2.innerHTML = color;
 console.log(color);


};
geradorBackground();






//requisito 5


/* let ball1 = document.querySelector("#circulo1");
let ball2 = document.querySelector("#circulo2");
let ball3 = document.querySelector("#circulo3");
let ball4 = document.querySelector("#circulo4");
let ball5 = document.querySelector("#circulo5");
let ball6 = document.querySelector("#circulo6"); */
/* const jogarVariavel = document.getElementById("#rgb-color"); */
/* const rgbColor = document.getElementById("#rgb-color"); */
/* const color1 = rgbColor.innerHTML */
/* console.log(acertou); */

//Pegar target do click das bolas


function checkColor(event){
  const select = event.target.style.backgroundColor;
  const rgb = pegaH2.innerHTML;
  let score = document.getElementById("score").innerHTML;
  const text = document.getElementById("answer");
  console.log(select);
  console.log(rgb);
  if(select === rgb){
    text.innerHTML = "Acertou!";
    score = parseInt(score, 10) + 3;
    document.getElementById("score").innerHTML = score;
  }else{
    text.innerHTML = "Errou! Tente novamente!";
  }
};
const sessao = document.querySelector("#sessao");
sessao.addEventListener("click", checkColor);









//clica bola 1
/* const scoreCont = document.querySelector("#score");
var contador = 0;
ball1.addEventListener("click", function (event) {
  let color = event.target.style.backgroundColor;
  console.log(color);
  console.log(pegaH2.innerHTML);
  if (color != pegaH2.innerHTML) {
    answerh1.innerHTML = "Errou! Tente novamente!";
  } else {
    contador += 3;
    scoreCont.innerHTML = contador;
    answerh1.innerHTML = "Acertou!";
  }
}); */

//clica bola 2

       /*  ball2.addEventListener("click", function (event) {
          let color1 = event.target.style.backgroundColor;
          if (color1 != pegaH2.innerHTML) {
            answerh1.innerHTML = "Errou! Tente novamente!";
          } else {
            contador += 3;
            scoreCont.innerHTML = contador;
            answerh1.innerHTML = "Acertou!";
          }
        }); */


//clica bola 3

/* ball3.addEventListener("click", function (event) {
  let color2 = event.target.style.backgroundColor;
  if (color2 != pegaH2.innerHTML) {
    answerh1.innerHTML = "Errou! Tente novamente!";
  } else {
    contador += 3;
    scoreCont.innerHTML = contador;
    answerh1.innerHTML = "Acertou!";

  }
}); */

//clica bola 4

/* ball4.addEventListener("click", function (event) {
  let color3 = event.target.style.backgroundColor;
  if (color3 != pegaH2.innerHTML) {
    answerh1.innerHTML = "Errou! Tente novamente!";
  } else {
    contador += 3;
    scoreCont.innerHTML = contador;
    answerh1.innerHTML = "Acertou!";

  }
}); */

//clica bola 5

/* ball5.addEventListener("click", function (event) {
  let color4 = event.target.style.backgroundColor;
  if (color4 != pegaH2.innerHTML) {
    answerh1.innerHTML = "Errou! Tente novamente!";
  } else {
    contador += 3;
    scoreCont.innerHTML = contador;
    answerh1.innerHTML = "Acertou!";

  }
}); */


//clica bola 6

/* ball6.addEventListener("click", function (event) {
  let color5 = event.target.style.backgroundColor;
  if (color5 != pegaH2.innerHTML) {
    answerh1.innerHTML = "Errou! Tente novamente!";
  } else {
    contador += 3;
    scoreCont.innerHTML = contador;
    answerh1.innerHTML = "Acertou!";
  }
}); */


//botão reset

const botun = document.querySelector("#reset-game");
botun.addEventListener("click", function () {
  answerh1.innerHTML = "Escolha uma cor";
  geradorBackground();
});
