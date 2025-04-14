function start(event){
if(event.key=="Enter"  && walkWorker==0){
   walk();
   timeRemain();
   run();
   runSound.play();
}
  if (event.key==" "){
   if (attackWorker == 0 && runWorker ==0 && isRun == true)  {
   attack();
   attackSound.play();
  }

}
}
var walkImage=1;
var walkWorker=0;
function walk(){
   walkWorker=setInterval(()=> {
   walkImage++
if (walkImage==11) {walkImage=1;}
   document.getElementById("1").src="Walk"+walkImage+".png";
   },150);
}
 var time=50;
 var timeWorker= 0;
  function timeRemain() {
    timeWorker = setInterval(()=>{      
      time--
      if(time==0) {
         alert("Game Over");
         window.location.reload();
      }
      document.getElementById("time").innerHTML = "Your Remaining Time:"+time;
    },500);




  }
  var runImage=1;
  var runWorker= 0;
  var knightMarginLeft=80;
  var isRun = false;
  var runSound = new Audio("run.mp3");
  runSound.loop =true;
   function run() {
      isRun = true ;
     runWorker = setInterval(()=>{      
       runImage++
       if (knightMarginLeft < 1000 ){
         knightMarginLeft = knightMarginLeft+ 10;
         document.getElementById("12").style.marginLeft = knightMarginLeft+ "px";
       }
        if (knightMarginLeft== 1000) {
         clearInterval(runWorker);
         runWorker=0;
         runSound.pause();
         attack();
         attackSound.play();
        }
       if(runImage==11) {
         runImage=1;
       }
       document.getElementById("12").src ="Run"+runImage+".png";
     },100);
   }
    var attackImage =1 ;
    var attackWorker =0;
    var attackCount =0 ;
    var attackSound =new Audio ("attack.mp3");
      
  function attack() {
  attackWorker = setInterval(() => {
    attackImage++;
    if (attackImage == 11) {
      attackImage = 1;
      clearInterval(attackWorker);
      attackWorker = 0;
    }
    document.getElementById("12").src = "Attack" + attackImage + ".png";

    attackCount++;
    if (attackCount == 5) {
      alert("You won fucker");
      window.location.reload();
    }
  }, 100);
}
