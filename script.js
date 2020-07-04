let bg1 = document.getElementsByClassName("bg1");
let bg2 = document.getElementsByClassName("bg2");
let bg3 = document.getElementsByClassName("bg3");
let bg4 = document.getElementsByClassName("bg4");
let bg = [bg1, bg2, bg3, bg4];
function background() {
  for (let i = 0; i < 4; i++) {
    let rgba1 = [
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
      0.5,
    ];
    let rgba2 = [
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
      0.5,
    ];
    let rgba3 = [
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
      0.5,
    ];
    let rgba4 = [
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
      0.5,
    ];
    let rgba = [rgba1, rgba2, rgba3, rgba4];
    bg[
      i
    ][0].style.backgroundColor = `rgba(${rgba[i][0]}, ${rgba[i][1]}, ${rgba[i][2]}, ${rgba[i][3]})`;

    bg[i][0].style.transform = `rotate(${Math.floor(Math.random() * 360)}deg)`;
  }
}
function begin() {
  let beginSign = document.getElementsByClassName("begin");
  beginSign[0].style.display = "none";
  slots = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  match += 1;
  won = false;
  turn = "X";
  moves = 0;
  document.getElementById("turn").innerHTML = `${turn}'s Turn`;

  document.getElementById("00").innerHTML = "";
  document.getElementById("00").style.pointerEvents = "auto";
  document.getElementById("01").innerHTML = "";
  document.getElementById("01").style.pointerEvents = "auto";
  document.getElementById("02").innerHTML = "";
  document.getElementById("02").style.pointerEvents = "auto";

  document.getElementById("10").innerHTML = "";
  document.getElementById("10").style.pointerEvents = "auto";
  document.getElementById("11").innerHTML = "";
  document.getElementById("11").style.pointerEvents = "auto";
  document.getElementById("12").innerHTML = "";
  document.getElementById("12").style.pointerEvents = "auto";

  document.getElementById("20").innerHTML = "";
  document.getElementById("20").style.pointerEvents = "auto";
  document.getElementById("21").innerHTML = "";
  document.getElementById("21").style.pointerEvents = "auto";
  document.getElementById("22").innerHTML = "";
  document.getElementById("22").style.pointerEvents = "auto";
}
// 00  01  02
// 10  11  12
// 20  21  22

let slots = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
let match = 1;
let turn = "X";
let moves = 0;
let won = false;

function pressed(x) {
  let slot = document.getElementById(`${x}`);
  slot.style.pointerEvents = "none";
  slot.innerHTML = turn;
  slot.style.color = turn == "X" ? "#ffa931" : "#12cad6";
  pickedSlots(x, turn);
  background();
  check4Winner(turn);
  turn = turn == "X" ? "O" : "X";
  document.getElementById("turn").innerHTML = `${turn}'s Turn`;
  document.getElementById("match").innerHTML = `MATCH ${match}`;
  moves += 1;
  if (moves == 9 && won == false) {
    document.getElementsByClassName("begin")[0].innerHTML = `Tie`;
    document.getElementsByClassName("begin")[0].style.color = "white";
    document.getElementsByClassName("begin")[0].style.display = "block";
  }
}

function pickedSlots(x, player) {
  let num = x,
    output = [],
    sNumber = num.toString();
  for (let i = 0; i < 2; i++) {
    output.push(+sNumber.charAt(i));
  }
  slots[output[0]][output[1]] = player;
}

function check4Winner(player) {
  if (
    slots[0][0] == slots[0][1] &&
    slots[0][1] == slots[0][2] &&
    slots[0][2] == player
  ) {
    Winner(player);
  } else if (
    slots[1][0] == slots[1][1] &&
    slots[1][1] == slots[1][2] &&
    slots[1][2] == player
  ) {
    Winner(player);
  } else if (
    slots[2][0] == slots[2][1] &&
    slots[2][1] == slots[2][2] &&
    slots[2][2] == player
  ) {
    Winner(player);
  } else if (
    slots[0][0] == slots[1][0] &&
    slots[1][0] == slots[2][0] &&
    slots[2][0] == player
  ) {
    Winner(player);
  } else if (
    slots[0][1] == slots[1][1] &&
    slots[1][1] == slots[2][1] &&
    slots[2][1] == player
  ) {
    Winner(player);
  } else if (
    slots[0][2] == slots[1][2] &&
    slots[1][2] == slots[2][2] &&
    slots[2][2] == player
  ) {
    Winner(player);
  } else if (
    slots[0][0] == slots[1][1] &&
    slots[1][1] == slots[2][2] &&
    slots[2][2] == player
  ) {
    Winner(player);
  } else if (
    slots[0][2] == slots[1][1] &&
    slots[1][1] == slots[2][0] &&
    slots[2][0] == player
  ) {
    Winner(player);
  }
}
function Winner(winner) {
  won = true;
  document.getElementsByClassName("begin")[0].innerHTML = `${winner} won`;
  document.getElementsByClassName("begin")[0].style.color =
    winner == "X" ? "#ffa931" : "#12cad6";
  document.getElementsByClassName("begin")[0].style.display = "block";
}
