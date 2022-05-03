var numbers = [];
let anterior = 0;

function generatorOfNumbers() {
  let content = document.querySelector("div#content");

  if (document.querySelector("div#generatorNumbers")) {
    cleanGeneratorOfNumbers();
  }

  content.innerHTML += "<div id='generatorNumbers'></div>";

  let generator = document.querySelector("div#generatorNumbers");
  let i = 0
  while(i < 6) {
    let numberMin = Math.ceil(1);
    let numberMax = Math.ceil(60);

    var result =
      Math.floor(Math.random() * (numberMax - numberMin + 1)) + numberMin;

    if(numbers.indexOf(result) == -1) {
      numbers[i] = result;
  
      generator.innerHTML += `<span class="teste-result">${
        result < 10 ? "0" + result : result
      } </span>`;
      i++
    } 

  }

  content.innerHTML += `<button class="copy-text" onclick="copyText()"> <img src="./assets/copy.svg" /> </button>`;
}

function copyText() {
  navigator.clipboard.writeText(numbers);
  alert("Texto copiado para a área de transferência!");
}

function cleanGeneratorOfNumbers() {
  document.querySelector("div#generatorNumbers").remove();
  document.querySelector("button.copy-text").remove();
}
