const buton = document.querySelector('#entrar');
const emails = document.querySelector('#email');
const senha = document.querySelector('#senha');
const botao = document.querySelector('#submit-btn');
const check = document.querySelector('#agreement');
const lastName = document.querySelector('#input-lastname');

function validaForm() {
  if (emails.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

buton.addEventListener('click', validaForm);
// comentário

botao.disabled = true;

function stateHandle() {
  if (check.value === '') {
    botao.disabled = true;
  } else {
    botao.disabled = false;
  }
}
check.addEventListener('change', stateHandle);

const textarea = document.querySelector('#textarea');
const info = document.getElementById('counter');
const limite = 500;

function verificar() {
  const qtdcaracteres = this.value.length;
  const restantes = limite - qtdcaracteres;
  if (restantes < 1) {
    this.value = this.value.slice(0, limite);
    info.innerHTML = 0;
  }
  info.innerHTML = restantes;
}
textarea.addEventListener('keyup', verificar);

const nome = document.querySelector('#input-name');
const email = document.querySelector('#input-email');
const frontend = document.querySelector('#Frontend');
const backEnd = document.querySelector('#Backend');
const full = document.querySelector('#FullStack');
const select = document.querySelector('#house');

function familia() {
  let family = '';
  if (frontend.checked) {
    family = 'Frontend';
  }
  if (backEnd.checked) {
    family = 'Backend';
  }
  if (full.checked) {
    family = 'FullStack';
  }
  return family;
}
// eslint-disable-next-line no-unused-vars
function checks() {
  const pacote = document.getElementsByClassName('subject');
  const marcados = [];
  // eslint-disable-next-line sonarjs/no-one-iteration-loop
  for (let i = 0; i < pacote.length; i += 1) {
    if (pacote[i].checked) {
      marcados.push(pacote[i].value);
    }
  } return marcados;
}

function checksAvaliacao() {
  const pacotries = document.getElementsByName('rate');
  console.log(pacotries);
  let marcados = '';
  // eslint-disable-next-line sonarjs/no-one-iteration-loop
  for (let i = 0; i < pacotries.length; i += 1) {
    console.log('for:', pacotries[i]);
    if (pacotries[i].checked) {
      marcados = pacotries[i].value;
    }
  } return marcados;
}

function criaForm() {
  const nomes = document.querySelector('#nome');
  const mail = document.querySelector('#e-mail');
  const house = document.querySelector('#myCasa');
  const famili = document.querySelector('#familia');
  const materys = document.querySelector('#materiais');
  const avaliacion = document.querySelector('#avaliacao');
  const comenty = document.querySelector('#comentario');
  const text = select.options[select.selectedIndex].value;
  nomes.innerText = `Nome: ${nome.value} ${lastName.value}`;
  mail.innerText = `Email: ${email.value}`;
  house.innerHTML = `Casa: ${text}`;
  famili.innerText = `Família: ${familia()}`;
  materys.innerHTML = `Matérias: ${checks().join(', ')}`;
  comenty.innerHTML = `Avaliação: ${checksAvaliacao()}`;
  avaliacion.innerText = `Observações: ${textarea.value}`;
}
botao.addEventListener('click', (event) => {
  event.preventDefault();
  criaForm();
  const formData = document.querySelector('#form-data');
  const newForm = document.querySelector('#evaluation-form');
  newForm.style.display = 'none';
  formData.style.display = 'flex';
});

//  finish
