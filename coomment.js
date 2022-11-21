const commentBox = document.getElementById("comentbox");
const getComment = document.getElementById("comment-input");

document.getElementById("post-btn").addEventListener("click", function () {
  console.log(getComment.value);

  const newComment = document.createElement("p");

  newComment.innerText = getComment.value;

  commentBox.appendChild(newComment);

  getComment.value = "";
});

const deltText = document.getElementById("delText");
const deltBtn = document.getElementById("delBtn");
const matchText = document.getElementById("matchText");

matchText.addEventListener("focus", function () {
  console.log("Focus");
  document.body.style.backgroundColor = "aqua";
  //   document.body.style.color = "white";
});

matchText.addEventListener("blur", function () {
  console.log("Blur");
  document.body.style.backgroundColor = "white";
});

matchText.addEventListener("click", function () {});

// matchText.addEventListener("keypress", function () {
//   deltText.style.display = "none";
//   document.body.style.color = "black";
//   console.log(matchText.value);
// });

// matchText.addEventListener("keydown", function () {
//   deltText.style.display = "none";
//   document.body.style.color = "black";
//   console.log(matchText.value);
// });

matchText.addEventListener("keyup", function () {
  console.log(matchText.value);
  if (matchText.value == "delete") {
    deltBtn.removeAttribute("disabled");
  } else {
    deltBtn.setAttribute("disabled", "");
  }
});

deltBtn.addEventListener("click", function () {
  deltText.style.display = "none";
});

// matchText.addEventListener("change", function () {
//   console.log(matchText.value);
// });
