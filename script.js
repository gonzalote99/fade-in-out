window.onload = function() {
  var object = document.getElementById('object');
  document.getElementById('fadeIn').onclick = function () {
    fadeIn(object, 1);
  }

  document.getElementById('fadeOut').onclick = function () {
    fadeOut(object, 1)
  }
}

function fadeIn(element, time) {
  process(element,time,0,100);
}

function fadeOut(element, time) {
  process(element,time,100,0);
}


function process(element,time,initial,end) {
  if(initial === 0) {
    increment = 2;
    element.style.display = "block";
  }  else {
    increment = -2;
  }

  opc = initial;

  interval = setInterval(function () {
    if((opc == end)) {
      if (end == 0) {
           element.style.display = "none";
      } clearInterval(interval);
    } else {
      opc += increment;
      element.style.opacity = opc/100;
      element.style.filter = "alpha(opacity="+opc+")"
    }
    
   }, time * 10 )

}