// console.log("It is from external 88");

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// const phone = { color: "red", price: 300 };
// console.log(phone.price);
function logName() {
  console.log("Hello world");
}
const yellowId = document.getElementById("make-yellow");
console.log(yellowId);
//  click event only by function name
yellowId.onclick = makeYellow;

function makeYellow() {
  document.body.style.backgroundColor = "yellow";
}

// addeventlistener by click button
const getCyanId = document.getElementById("make-Cyan");

getCyanId.addEventListener("click", makeCyan);

function makeCyan() {
  document.body.style.backgroundColor = "Cyan";
}

const getCyanId2 = document.getElementById("make-brown");

getCyanId.addEventListener("click", function makeBrown() {
  document.body.style.backgroundColor = "brown";
});

document.getElementById("make-coral").addEventListener("click", function () {
  document.body.style.backgroundColor = "coral";
});

// getCyanId.addEventListener("click", function () {
//   document.body.style.backgroundColor = "brown";
// });
