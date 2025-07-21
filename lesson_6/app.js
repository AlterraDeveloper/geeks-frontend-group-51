const modalOpenBtn = document.querySelector("#open");
const myModal = new Modal("my-first-modal");
const myModalContainer = document.querySelector("#my-first-modal");

modalOpenBtn.onclick = () => {
  myModal.open();
};

myModalContainer.onclick = () => {
  myModal.close();
};

const modalInner = myModalContainer.querySelector(".modal");
modalInner.onclick = (event) => {
  // Event propagation
  event.stopPropagation();
};

const myForm = document.querySelector("#form");
const phoneInput = myForm.querySelector("#phone-number");
const submitBtn = myForm.querySelector("input[type=submit]");
const img = document.querySelector("#detection-result img");

myForm.onsubmit = (event) => {
  event.preventDefault();

  const operatorCode = phoneInput.value.slice(1, 4);

  // MEGA
  if(["555", "999"].includes(operatorCode)){
    img.setAttribute("src", "https://alterradeveloper.github.io/geeks-projects/kg-operator-detector/images/mega.png");
  }
};

phoneInput.oninput = () => {
  let phone = phoneInput.value;

  phone = phone
    .split()
    .filter((x) => x >= "0" && x <= "9")
    .join("");
  phoneInput.value = phone;

  if (phone.startsWith("0") && phone.length === 10) {
    submitBtn.style.display = "block";
  } else if (phone.startsWith("996") && phone.length === 12) {
    submitBtn.style.display = "block";
  } else {
    submitBtn.style.display = "none";
  }
};

// .filter((x) => x >= 48 && x <= 57)
