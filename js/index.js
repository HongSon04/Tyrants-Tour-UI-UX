// Animated Button
const button = document.querySelector(".button");
const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const button4 = document.querySelector(".button4");

button.addEventListener("click", (e) => {
  e.preventDefault;
  button.classList.add("animate");
  setTimeout(() => {
    button.classList.remove("animate");
  }, 600);
});

button1.addEventListener("click", (e) => {
  e.preventDefault;
  button1.classList.add("animate");
  setTimeout(() => {
    button1.classList.remove("animate");
  }, 600);
});

button2.addEventListener("click", (e) => {
  e.preventDefault;
  button2.classList.add("animate");
  setTimeout(() => {
    button2.classList.remove("animate");
  }, 600);
});
button3.addEventListener("click", (e) => {
  e.preventDefault;
  button3.classList.add("animate");
  setTimeout(() => {
    button3.classList.remove("animate");
  }, 600);
});
button4.addEventListener("click", (e) => {
  e.preventDefault;
  button4.classList.add("animate");
  setTimeout(() => {
    button4.classList.remove("animate");
  }, 600);
});

