AFRAME.registerComponent("game-play", {
  schema: {
    elementId: { type: "string", default: "#ring1" },    
  },
  update: function () {
    this.isCollided(this.data.elementId);
  },

  init: function () {
    var duration = 120;
    const timerEl = document.querySelector("#timer");
    this.startTimer(duration, timerEl);
  },

  startTimer: function (duration, timerEl) {
    var minutes;
    var seconds;

    var timer = setInterval(countDown, 1000);

    function countDown() {
      if (duration >= 0) {
        minutes = parseInt(duration / 60);
        seconds = parseInt(duration % 60);

        if (minutes < 10) {
          minutes = "0" + minutes;
        }
        if (seconds < 10) {
          seconds = "0" + seconds;
        }

        timerEl.setAttribute("text", {
          value: minutes + ":" + seconds,
        });

        duration -= 1;
      } 
      else {
        clearInterval(timer);        
      }
    }
  },
  isCollided: function (elemntId) {
    const element = document.querySelector(elemntId);
    element.addEventListener("collide", (e) => {
      if (elemntId.includes("#ring")) {
          element.setAttribute("visible",false);
          this.updateScore()
          this.updateTargets()

      } else {
        this.gameover()

      }
    },1000);
  },
  updateTargets:function(){
    var element=document.querySelector("#targrts")
    var count=element.getAttribute("text").value;
    var currentTargets=parseInt(count);
    currentTargets-=1
    element.setAttribute("text",{
      value:currentTargets
    })
  },
  updateScore:function(){
    var element=document.querySelector("#score")
    var count=element.getAttribute("text").value;
    var currentTargets=parseInt(count);
    currentScore-=1
    element.setAttribute("text",{
      value:currentScore
    })
  },
  gameover:function(){
    var planE1=document.querySelector("#plane_model")
    var element=document.querySelector("#game_over_text");
    element.setAttribute("visible",true{
      planeE1.setAttribute("dynamic-body",{
        mass:1
      })
    })
    
  },
});
