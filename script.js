// script.js

let inventory = [];

function makeChoice(choice) {
  const story = document.getElementById("story");
  const choices = document.getElementById("choices");
  const sceneImage = document.getElementById("scene-image");
  const inventoryList = document.getElementById("inventory-list");

  if (choice === "explorar") {
    story.textContent = "Você encontra uma trilha que leva a uma caverna. Deseja entrar ou continuar pela floresta?";
    sceneImage.src = "trilha.jpg";
    choices.innerHTML = `
      <button onclick="makeChoice('entrar_caverna')">Entrar na caverna</button>
      <button onclick="makeChoice('continuar_floresta')">Continuar pela floresta</button>
    `;
  } else if (choice === "descansar") {
    story.textContent = "Você adormece e é atacado por um animal selvagem. Fim de jogo!";
    sceneImage.src = "ataque.jpg";
    choices.innerHTML = `<button onclick="location.reload()">Recomeçar</button>`;
  } else if (choice === "entrar_caverna") {
    story.textContent = "Dentro da caverna, você encontra uma tocha e ouve sons estranhos. Pegue a tocha ou saia?";
    sceneImage.src = "caverna.jpg";
    choices.innerHTML = `
      <button onclick="makeChoice('pegar_tocha')">Pegar a tocha</button>
      <button onclick="makeChoice('sair_caverna')">Sair da caverna</button>
    `;
  } else if (choice === "pegar_tocha") {
    story.textContent = "A tocha ilumina um mapa antigo no chão. Você agora pode explorar as ruínas!";
    sceneImage.src = "mapa.jpg";
    inventory.push("Tocha");
    updateInventory();
    choices.innerHTML = `
      <button onclick="makeChoice('explorar_ruinas')">Explorar as ruínas</button>
    `;
  } else if (choice === "explorar_ruinas") {
    story.textContent = "Nas ruínas, você encontra um tesouro! Parabéns, você venceu!";
    sceneImage.src = "tesouro.jpg";
    choices.innerHTML = `<button onclick="location.reload()">Recomeçar</button>`;
  } else if (choice === "continuar_floresta") {
    story.textContent = "Você chega a um lago brilhante. Deseja pescar ou beber água?";
    sceneImage.src = "lago.jpg";
    choices.innerHTML = `
      <button onclick="makeChoice('pescar')">Pescar</button>
      <button onclick="makeChoice('beber_agua')">Beber água</button>
    `;
  } else if (choice === "pescar") {
    story.textContent = "Você pesca um peixe dourado que lhe concede um desejo. Vitória mágica!";
    sceneImage.src = "peixe.jpg";
    choices.innerHTML = `<button onclick="location.reload()">Recomeçar</button>`;
  } else if (choice === "beber_agua") {
    story.textContent = "A água estava envenenada! Fim de jogo.";
    sceneImage.src = "veneno.jpg";
    choices.innerHTML = `<button onclick="location.reload()">Recomeçar</button>`;
  }
}

function updateInventory() {
  const inventoryList = document.getElementById("inventory-list");
  inventoryList.innerHTML = "";
  inventory.forEach(item => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    inventoryList.appendChild(listItem);
  });
}
