// Array methods

// foreach
// include
// filter
// sort
// slice
// pop
// push
// shift
// unshift
// splice
//

const array = [1, 2, 3];

// [1 4 4 4 3]

// lodash

// foreach
// map
// filter
// reduce
// slice
// reverse
// sort

const original = [14, 8, 45, 96, 77, 117, 5, 158];

// 100
// <div class="array-item"> 100 </div>
function renderArrayItem(value) {
  const div = document.createElement("div");
  div.className = "array-item";
  div.textContent = value;
  return div;
}

// function addItemToUI(item){
//     const div = renderArrayItem(item);
//     container.appendChild(div);
// }

function renderArray(array, container) {
  container.innerHTML = "";
  //   for (const item of array) {
  //     const div = renderArrayItem(item);
  //     container.appendChild(div);
  //   }
  array.forEach(function addItemToUI(item) {
    const div = renderArrayItem(item);
    container.appendChild(div);
  });
}

const originalContainer = document.querySelector("#original .array");
const updatedContainer = document.querySelector("#updated .array");
renderArray(original, originalContainer);

// call back - функция обратного вызова
// function forEach(action){
//     for(of){
//         action()
//     }
// }

// function map(action){
//     const newArray = [];
//     for(of){
//         newArray.push(action())
//     }
//     return newArray;
// }

function map30(){
    const updated = original.map(x => Math.floor(x - x * 0.3));
    renderArray(updated, updatedContainer);
}

function filter50(){
    const updated = original.filter(x => x > 50);
    renderArray(updated, updatedContainer);
}


[{
    lesson: 1,
    isCompleted: true
},2,3,4,5,6,7,8]