//Primeiro requisito
/* const reader = document.querySelector("body");
const reader1 = document.createElement("header");
reader1.id = "topo";
reader.appendChild(reader1);

const titleH1 = document.querySelector("#topo");
const tagH1 = document.createElement("h1");
tagH1.innerHTML = "Paleta de Cores";
tagH1.id = "title";
titleH1.appendChild(tagH1);

//Segundo requisito
/* const nowDiv = document.querySelector("#title");
const newDiv = document.createElement("div");
newDiv.id = "div1";
nowDiv.appendChild(newDiv); */

/* const paletaColors = document.querySelector("body");
const palet = document.createElement("section");
palet.id = "color-palette";
paletaColors.appendChild(palet); */
// função gera cores aleatórias
function randomRgb() {
    const r = Math.floor((Math.random() * 255));
    const g = Math.floor((Math.random() * 255));
    const b = Math.floor((Math.random() * 255));
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
let minhaCor = randomRgb();
let minhaCor1 = randomRgb();
let minhaCor2 = randomRgb();
console.log(minhaCor);
const cores = document.querySelector("#color-palette");
const arrayCores = ["black", minhaCor, minhaCor1, minhaCor2];
for (let i = 0; i < arrayCores.length; i++) {
    let day = arrayCores[i];
    let dayItem = document.createElement("div");
    if (day === "black") {
        dayItem.className = "color selected";
        dayItem.style.background = "black";
        dayItem.style.border = "1px solid rgb(0,0,0)";
        dayItem.style.display = 'inline-block';
        dayItem.style.height = "50px";
        dayItem.style.width = "50px";
        cores.appendChild(dayItem);
    }
    if (day === minhaCor) {
        dayItem.className = "color";
        dayItem.style.background = minhaCor;
        dayItem.style.border = "1px solid rgb(0,0,0)"
        dayItem.style.display = 'inline-block';
        dayItem.style.height = "50px";
        dayItem.style.width = "50px";
        cores.appendChild(dayItem);
    }
    if (day === minhaCor1) {
        dayItem.className = "color";
        dayItem.style.background = minhaCor1;
        dayItem.style.border = "1px solid rgb(0,0,0)";
        dayItem.style.display = 'inline-block';
        dayItem.style.height = "50px";
        dayItem.style.width = "50px";
        cores.appendChild(dayItem);
    }
    if (day === minhaCor2) {
        dayItem.className = "color";
        dayItem.style.background = minhaCor2;
        dayItem.style.border = "1px solid rgb(0,0,0)"
        dayItem.style.display = 'inline-block';
        dayItem.style.height = "50px";
        dayItem.style.width = "50px";
        cores.appendChild(dayItem);
    }
}

//requisito 3
function verificaCor() {
    const corBlack = document.querySelector("#color-palette");
    corBlack.firstChild.style.backgroundColor === "black";
}

//requisito 4- e 5 - 25 elementos 

//reset o boar para cor branca

var btn = document.querySelector("#clear-board");
btn.addEventListener("click", function () {
    const elements = document.getElementsByClassName("pixel");
    /* location.reload(); */
    for (const element of elements) {
        element.style.backgroundColor = 'white';
    }
});

//requisito 10 - botão adicionar

const immput = document.querySelector("#board-size");
const botaInput = document.querySelector("#generate-board");

botaInput.addEventListener("click", function () {
    let num = 5;
    if (immput.value === "") {
        alert("Board inválido!");
    } else if (immput.value < 5) {
        immput.value = 5;
        num = immput.value;
    } else if (immput.value == 50 || immput.value > 50) {
        immput.value = 50;
        num = immput.value;
    } else {
        num = immput.value;
    }
    recarregarPagina(num);
    /* atualizaBoard(num); */
    /* console.log(num); */
});

//novos valores do board
/* sessionStorage.clear(); */
let numero = 5;
/* sessionStorage.setItem("atualiza", num); */
localStorage.clear();

function recarregarPagina(x) {
    /* sessionStorage.clear(); */
    sessionStorage.setItem("atualiza1", x);
    window.location.reload();
    console.log(numero);
    // antes de atualizar, você seta uma variável no sessionStorage como true
    // atualiza a página
};
numero = sessionStorage.getItem("atualiza1");
if (numero === null) {
    numero = 5;
}

for (let i = 0; i < numero; i++) {
    const quadro = document.querySelector("#pixel-board");
    const line = document.createElement("div");
    for (let j = 0; j < numero; j++) {
        const element = document.createElement("div");
        element.className = "pixel";
        element.style.width = "40px";
        element.style.height = "40px";
        element.style.border = "1px solid black";
        element.style.backgroundColor = "white";
        element.style.display = 'inline-block',
            quadro.appendChild(line);
        line.appendChild(element);
    }
}



//atualiza as cores
let cor = "black";
const pixelBarra = document.getElementsByClassName("pixel");
for (let i = 0; i < pixelBarra.length; i++) {
    let day = pixelBarra[i];
    if (day.style.backgroundColor === "white")
        day.addEventListener("click", function () {
            day.style.backgroundColor = cor;
        });
}


//seleciona a classe selected
const barra = document.getElementsByClassName('color');
barra[0].addEventListener("click", removerClass0);
barra[1].addEventListener("click", removerClass1);
barra[2].addEventListener("click", removerClass2);
barra[3].addEventListener("click", removerClass3);

function removerClass0() {
    barra[0].classList.add('selected');
    barra[1].classList.remove('selected');
    barra[2].classList.remove('selected');
    barra[3].classList.remove('selected');
    cor = "black";
}

function removerClass1() {
    barra[0].classList.remove('selected');
    barra[1].classList.add('selected');
    barra[2].classList.remove('selected');
    barra[3].classList.remove('selected');
    cor = minhaCor;
}

function removerClass2() {
    barra[0].classList.remove('selected');
    barra[1].classList.remove('selected');
    barra[2].classList.add('selected');
    barra[3].classList.remove('selected');
    cor = minhaCor1;
}

function removerClass3() {
    barra[0].classList.remove('selected');
    barra[1].classList.remove('selected');
    barra[2].classList.remove('selected');
    barra[3].classList.add('selected');
    cor = minhaCor2;
}