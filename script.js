function myCanvas() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("masterpiece");
    ctx.drawImage(img,0,0,250,300);
  }
 
  function myCanvas2() {
    var c = document.getElementById("myCanvas2");
    var ctx = c.getContext("2d");
    ctx.font = "40px Verdana";

    var gradient = ctx.createLinearGradient(0,0, c.width, 0);
    gradient.addColorStop("0","#1a58a3");
    gradient.addColorStop("0.5", "#26a36f");
    gradient.addColorStop("1.0", "#17856d");
    gradient.addColorStop("1.0", "#21cfa9");
    

    ctx.strokeStyle = gradient;
    ctx.strokeText(">DevBilal<", 10, 90);
  }