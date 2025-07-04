// var, let, const

// ECMAScript 5
// ECMAScript 6+

// DOM - Document Object Model

const coins = document.getElementById("coins");
const tapButton = document.getElementById("humster");
const energy = document.querySelector("#energy");
const energyBoost = document.querySelector(".energy-boost");

// coins.innerText = 0;
// coins.innerHTML = 0;
coins.textContent = 0;
energy.textContent = 50;

function update() {
  let coinsValue = Number(coins.textContent);
  coinsValue += 5;
  let energyValue = Number(energy.textContent);
  energyValue -= 5;

  if (energyValue <= 0) {
    energyBoost.style.display = "block";
  }

  if (energyValue < 0) {
    return;
  }

  coins.textContent = coinsValue;
  energy["textContent"] = energyValue;
}

function boostEnergy() {
  energy.textContent = 100;
  energyBoost.style.display = "none";
}

tapButton.addEventListener("click", update);
energyBoost.onclick = boostEnergy;
