var numbers = [];
let anterior = 0;

function generatorOfNumbers() {
  let content = document.querySelector("div#content");

  if (document.querySelector("div#generatorNumbers")) {
    cleanGeneratorOfNumbers();
  }

  content.innerHTML += "<div id='generatorNumbers'></div>";

  let generator = document.querySelector("div#generatorNumbers");
  for (let i = 0; i < 6; i++) {
    let numberMin = Math.ceil(1);
    let numberMax = Math.ceil(60);

    var result =
      Math.floor(Math.random() * (numberMax - numberMin + 1)) + numberMin;
    numbers[i] = result;

    generator.innerHTML += `<span class="teste-result">${
      result < 10 ? "0" + result : result
    } </span>`;
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
