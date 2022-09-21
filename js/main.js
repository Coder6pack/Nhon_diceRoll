let roll = document.getElementById("nut");

let dice1 = document.getElementById("dice-1");
let dice2 = document.getElementById("dice-2");
let arr = [
  null,
  "./img/dice1.png",
  "./img/dice2.png",
  "./img/dice3.png",
  "./img/dice4.png",
  "./img/dice5.png",
  "./img/dice6.png",
];

roll.onclick = function () {
  let i = parseInt((Math.random() * 10) % 6) + 1;
  let j = parseInt((Math.random() * 10) % 6) + 1;

  dice1.src = arr[i];
  dice2.src = arr[j];
};
