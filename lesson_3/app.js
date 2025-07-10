// <div class="fa fa-star checked" data-star="0"></div>
function renderStar(isChecked, value) {
  const div = document.createElement("div");
  div.classList.add("fa", "fa-star");
  if (isChecked) div.classList.add("checked");
  // div.className = "fa fa-star";
  // div.setAttribute("data-star", "0");
  div.dataset.star = value;
  return div;
}

const starsBox = document.querySelector(".stars");

// starsBox.append(renderStar(), renderStar(), renderStar());

function renderRating(rate) {
  starsBox.innerHTML = "";
  for (let i = 1; i <= 5; i++) {
    const star = renderStar(rate >= i, i);
    starsBox.appendChild(star);
  }
}

renderRating();

starsBox.onclick = (event) => {
  const element = event.target;

  // if(!element.classList.contains("fa-star")) return;

  // const userRate = element.getAttribute("data-star");
  const userRate = Number(element.dataset.star || 0);
  renderRating(userRate);

  if (userRate === 5) {
    blowConfetti();
  }
};

function blowConfetti() {
  confetti({
    particleCount: 250,
    angle: 60,
    spread: 150,
    origin: { x: 0 },
  });

  confetti({
    particleCount: 250,
    angle: 120,
    spread: 150,
    origin: { x: 1 },
  });
}
