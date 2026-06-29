let text = document.getElementById("text");

function choice1() {
  text.innerHTML = "Nice 😄... I knew you’d say yes!";
  
  setTimeout(() => {
    text.innerHTML = "Okay... first surprise loading 🎁";
  }, 2000);

  setTimeout(() => {
    text.innerHTML = "You are awesome 🎉 Happy Birthday!";
  }, 4000);

  setTimeout(() => {
    text.innerHTML = "Final surprise incoming... 💙";
  }, 6000);
}

function wrongChoice() {
  text.innerHTML = "Nope 😈 you can’t escape the surprise!";
  
  setTimeout(() => {
    text.innerHTML = "Try again 😏";
  }, 2000);
}

window.onload = function () {
  let player = document.getElementById("player");

  player.style.position = "absolute";
  player.style.left = "200px";
};
