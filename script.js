// JavaScript code for zombie attack game

function start(event) {
  if (event.key == "Enter" && walkWorker == 0) {
    walk();
    timeRemain();
    run();
    runSound.play();
  }
  if (event.key == " ") {
    if (attackWorker == 0 && runWorker == 0 && isRun == true) {
      attack();
      attackSound.play();
    }
  }
}

var walkImage = 1;
var walkWorker = 0;
function walk() {
  walkWorker = setInterval(() => {
    walkImage++;
    if (walkImage == 11) {
      walkImage = 1;
    }
    document.getElementById("1").src = "Walk" + walkImage + ".png";
  }, 150);
}

var time = 50;
var timeWorker = 0;
function timeRemain() {
  timeWorker = setInterval(() => {
    time--;
    if (time == 0) {
      alert("Game Over");
      window.location.reload();
    }
    document.getElementById("time").innerHTML = "Your Remaining Time: " + time;
  }, 1000);
}

var runImage = 1;
var runWorker = 0;
var knightMarginLeft = 80;
var isRun = false;
var runSound = new Audio("run.mp3");
runSound.loop = true;

function run() {
  isRun = true;
  runWorker = setInterval(() => {
    runImage++;
    if (runImage == 11) {
      runImage = 1;
    }
    document.getElementById("12").src = "Run" + runImage + ".png";

    if (knightMarginLeft < 1000) {
      knightMarginLeft += 10;
      document.getElementById("12").style.marginLeft = knightMarginLeft + "px";
    }

    if (knightMarginLeft >= 1000) {
      clearInterval(runWorker);
      runWorker = 0;
      runSound.pause();
      // wait for spacebar to trigger attack
    }
  }, 150);
}

var Attack = 1;
var attackWorker = 0;
var attackCount = 0;
var attackSound = new Audio("attack.mp3");
function attack() {
  attackWorker = setInterval(() => {
    Attack++;
    if (Attack == 11) {
      Attack = 1;
      clearInterval(attackWorker);
      attackWorker = 0;
    }
    document.getElementById("12").src = "Attack" + Attack + ".png";
  }, 150);

  attackCount++;
  console.log("Attack count is now: " + attackCount); // 🔍 Debug log
  document.getElementById("shots").innerHTML = "Shots Fired: " + attackCount;

  if (attackCount == 5) {
    alert("You won!");
    window.location.reload();
  }
}
