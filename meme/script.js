const memeText = document.querySelector("#meme-text");
const textInnput = document.querySelector("#text-input");
textInnput.addEventListener("keyup", updateValue);
const container = document.querySelector('#meme-image-container');
const meme = document.querySelector('#meme-image');

function updateValue(event) {
  memeText.innerHTML = event.target.value;
}
const uploadfoto = document.getElementById('meme-insert');

uploadfoto.addEventListener('change', function(e) {
  showThumbnail(this.files);
});

function showThumbnail(files) {
  if (files && files[0]) {
  const reader = new FileReader();

  reader.onload = function (e) {
     meme.src = e.target.result;
  }

      reader.readAsDataURL(files[0]);
  }
};

//botão vermelho

const fire = document.querySelector("#fire");
fire.addEventListener("click", () => {
  container.style.border = "3px dashed rgb(255, 0, 0)"
})
//botao azul
const water = document.querySelector('#water');
water.addEventListener('click', () => {
  container.style.border = "5px  double rgb(0, 0, 255)"
})
//botao verde
const earth = document.querySelector('#earth');
earth.addEventListener('click', () => {
  container.style.border = "6px  groove rgb(0, 128, 0)"
})

//click imagem
const imagem = document.querySelector('#meme-1');
imagem.addEventListener('click', () => {
  meme.src = './imgs/meme1.png';
})
const imagem1 = document.querySelector('#meme-2');
imagem1.addEventListener('click', () => {
  meme.src = './imgs/meme2.png';
})
const imagem2 = document.querySelector('#meme-3');
imagem2.addEventListener('click', () => {
  meme.src = './imgs/meme3.png';
})
const imagem3 = document.querySelector('#meme-4');
imagem3.addEventListener('click', () => {
  meme.src = './imgs/meme4.png';
})