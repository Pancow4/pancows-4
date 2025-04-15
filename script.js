document.addEventListener("keydown", start);

var walkImage = 1;
var walkWorker = 0;
var time = 50;
var timeWorker = 0;
var runImage = 1;
var runWorker = 0;
var knightMarginLeft = 80;
var isRun = false;
var attackImage = 1;
var attackWorker = 0;
var attackCount = 0;

var runSound = new Audio("run.mp3");
runSound.loop = true;

var attackSound = new Audio("attack.mp3");

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

function walk() {
  walkWorker = setInterval(() => {
    walkImage++;
    if (walkImage == 11) walkImage = 1;
    document.getElementById("1").src = "Walk" + walkImage + ".png";
  }, 150);
}

function timeRemain() {
  timeWorker = setInterval(() => {
    time--;
    if (time == 0) {
      alert("Game Over");
      window.location.reload();
    }
    document.getElementById("time").innerHTML = "Your Remaining Time: " + time;
  }, 500);
}

function run() {
  isRun = true;
  runWorker = setInterval(() => {
    runImage++;
    if (runImage == 11) runImage = 1;

    if (knightMarginLeft < 1000) {
      knightMarginLeft += 10;
      document.getElementById("12").style.marginLeft = knightMarginLeft + "px";
    }

    if (knightMarginLeft >= 1000) {
      clearInterval(runWorker);
      runWorker = 0;
      runSound.pause();
      attack();
      attackSound.play();
    }

    document.getElementById("12").src = "Run" + runImage + ".png";
  }, 100);
}

function attack() {
  attackWorker = setInterval(() => {
    attackImage++;
    if (attackImage == 11) {
      attackImage = 1;
      clearInterval(attackWorker);
      attackWorker = 0;
    }
    document.getElementById("12").src = "Attack" + attackImage + ".png";
  }, 150);

  attackCount++;
  const shots = document.getElementById("shots");
  if (shots) {
    shots.innerHTML = "Shots Fired: " + attackCount;
  }

  if (attackCount == 5) {
    alert("You won!");
    window.location.reload();
  }
}
