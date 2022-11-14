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
