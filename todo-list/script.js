const inputText = document.querySelector("#texto-tarefa");
const botaoCriar = document.querySelector("#criar-tarefa");
const list = document.querySelector("#lista-tarefas");
const butonApaga = document.querySelector("#apaga-tudo");
const remover = document.querySelector("#remover-finalizados");
const save = document.querySelector("#salvar-tarefas");
const select = document.querySelector("#remover-selecionado");
const task = [];
//const tarefa = JSON.parse(localStorage.getItem("dados")) || [];

botaoCriar.addEventListener("click", function () {
  adicionaTarefa();
})

///criar tarefas

function adicionaTarefa() {
  const val = inputText.value;
  var elem = document.createElement("li");
  var texto = document.createTextNode(val);
  elem.appendChild(texto);
  var lista = document.getElementsByTagName('ol')[0];
  lista.appendChild(elem);
  inputText.value = "";
}


// remove atributo marcado

list.addEventListener("click", function (event) {
  /*  var lista = window.getComputedStyle() */
  var element = document.querySelector('[style="background-color: gray;"]');
  if (element) {
    element.removeAttribute("style");
  }
  event.target.style.backgroundColor = "gray";
})




//duplo click
list.addEventListener("dblclick", function (event) {
  let item = event.target.className;
  console.log(item);
  if (item === "completed") {
    event.target.className = "";
  } else {
    event.target.className = "completed";
  }
})

//botão apaga tudo
butonApaga.addEventListener("click", function () {
  const list = document.querySelector("#lista-tarefas");
  var lista = document.querySelectorAll("li");
  console.log(lista.length);
  for (let i = 0; i < lista.length; i++) {
    let item = lista[i];
    list.removeChild(item);
  }
});

//botão remove selecionado
remover.addEventListener("click", function () {
  const list = document.querySelector("#lista-tarefas");
  var lista = document.querySelectorAll("li");
  console.log(lista.length);
  for (let i = 0; i < lista.length; i++) {
    let item = lista[i];
    if (item.className === "completed") {
      list.removeChild(item);
    }
  }
})

//salvar tarefa
save.addEventListener("click", function () {
  localStorage.clear();
  const list = document.querySelector("#lista-tarefas");
  var lista = document.querySelectorAll("li");
  console.log(lista.length);
  for (let i = 0; i < lista.length; i++) {
    task.push({
      nome: lista[i].innerHTML,
      classe: lista[i].className
    });
  }
  localStorage.setItem("lista", JSON.stringify(task));

})


//busca dados tarefas

window.onload = function carrregaTarefa() {
  if (localStorage.hasOwnProperty("lista")) {
    let array = localStorage.getItem("lista");
    let arrayObjeto = JSON.parse(array);
    for (let i = 0; i < arrayObjeto.length; i++) {
      const a = document.createElement("li");
      a.innerHTML = arrayObjeto[i].nome;
      a.className = arrayObjeto[i].classe;
      list.appendChild(a);
    }

  }
}


const up = document.querySelector("#mover-cima");
const myList = document.querySelector("#lista-tarefas");

myList.addEventListener("click", function (event) {
  let node = event.target.style.backgroundColor;
  console.log(node);
  up.addEventListener("click", function (node) {
    
  })
})

/* up.addEventListener("click", function (event) {
  let node = event.target.className;
  console.log(node);
})
 */
const elemento = '[style="background-color: gray;"]';
const botaoCima = document.getElementById('mover-cima');
  //mover cima
  botaoCima.addEventListener('click', () => {
    const selection = document.querySelector(elemento);
    if (selection && selection.parentNode.firstChild !== selection) {
      selection.parentNode.insertBefore(selection, selection.previousSibling);
    }
  })


//mover baixo
  const botaoBaixo = document.getElementById('mover-baixo');
  botaoBaixo.addEventListener('click', () => {
    const selection = document.querySelector(elemento);
    console.log(selection);
    if (selection && selection.parentNode.lastChild !== selection) {
      selection.parentNode.insertBefore(selection, selection.nextSibling.nextSibling);
    }
  })

  //botão remove 
select.addEventListener("click", function () {
  const list = document.querySelector("#lista-tarefas");
  var lista = document.querySelectorAll("li");
  console.log(lista.length);
  for (let i = 0; i < lista.length; i++) {
    let item = lista[i];
    if (item.style.backgroundColor === "gray") {
      list.removeChild(item);
    }
  }
})
