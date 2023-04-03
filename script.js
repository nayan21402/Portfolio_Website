

document.addEventListener('DOMContentLoaded', () => {
    const def = document.querySelector('.about');
    const landing = 0;
    window.scrollTo(0, landing);
    
    const textRotate = document.querySelector('.text-rotate');
    const text = textRotate.textContent;
    const splitText = text.split('');

    textRotate.textContent = '';

    for (let i = 0; i < splitText.length; i++) {
        textRotate.innerHTML += `<span>${splitText[i]}</span>`;
    }

    const spanText = document.querySelectorAll('span');

    textRotate.addEventListener('mousemove', (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
        spanText.forEach((span) => {
            span.style.transform = `rotateY(${xAxis*2}deg) rotateX(${yAxis*2}deg)`;
        });
    });

    textRotate.addEventListener('mouseleave', () => {
        spanText.forEach((span) => {
            span.style.transform = `rotateY(0deg) rotateX(0deg)`;
        });
    });

   


});

var eye = document.querySelector('.eye_mask');
var pupil = document.querySelector('.eye');

document.addEventListener('mousemove', function (e) {
    var x = e.clientX - eye.getBoundingClientRect().left - eye.offsetWidth / 2;
    var y = e.clientY - eye.getBoundingClientRect().top - eye.offsetHeight / 2;
    var angle = Math.atan2(y, x);
    var distance = Math.min(Math.sqrt(x * x + y * y), 80);
    pupil.style.transform = 'translate(' + (distance * Math.cos(angle)) + 'px, ' + (distance * Math.sin(angle)) + 'px)';
});
function parabolicPath(x) {
    // adjust these values to control the shape of the curve
    const a = 0.01;
    const b = 2;
    const c = 0;
    return a * x * x + b * x + c;
}

window.addEventListener('scroll', function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrollPercent = (scrollTop / scrollHeight) * 100;
    console.log(scrollPercent + "%");

    const rect_out = document.querySelector('.rectangle_outer');
    var container = document.querySelector('.parallax');
    var containerRect = container.getBoundingClientRect();
    var containerTop = containerRect.top;
    var containerBottom = containerRect.bottom;
    var windowHeight = window.innerHeight;
    if (scrollPercent>30 ) {
        var images = document.querySelectorAll('.parallax .background img');
        var offset = window.scrollY - windowHeight;
        
        images.forEach(function (image, index) {
            image.style.top = (offset) * (index + 1) * 0.1 + 'px';
        });
    }
    
    
  var ex1=this.document.getElementById('ex1');
  var ex2=this.document.getElementById('ex2');
    var ex3 = this.document.getElementById('ex3');
    var ex4 = this.document.getElementById('ex4');


  y=window.scrollY;
  //console.log(y);
  if(scrollPercent>53 && scrollPercent<70){
      //ex1.style.transform = `rotate(${y / 10}deg) scale(0.3)`;
      var factx=2.53-scrollPercent/100
      var facty=scrollPercent/10 -3.3;
      ex1.style.opacity=(scrollPercent/100-0.53)*5;
      ex1.style.scale=0.8;
      ex1.style.left = (container.offsetWidth/factx)*1.3 + 'px';
      ex1.style.top = (container.offsetHeight/facty)+ 'px';
      ex1.style.rotate=facty*12+'deg';
      console.log(container.offsetHeight);
      //ex1.style.top=100;
      ex2.style.opacity = (scrollPercent / 100 - 0.53) * 5;
      ex2.style.scale = 0.6;
      ex2.style.right = (container.offsetWidth / factx) * 1.3 + 'px';
      ex2.style.top = (container.offsetHeight / (facty+8)) + 'px';
      ex2.style.rotate = facty * 8 + 'deg';
        
      var factx2=2+scrollPercent/100; 
      ex3.style.opacity = (scrollPercent / 100 - 0.53) * 5;
      ex3.style.scale = 0.9;
      ex3.style.left = (container.offsetWidth*0.5/facty) + 'px';
      ex3.style.top = (container.offsetHeight /facty)*0.4 + 'px';
      ex3.style.rotate = -facty * 12 + 'deg';
    
      ex4.style.opacity = (scrollPercent / 100 - 0.53) * 5;
      ex4.style.scale = 0.6;
      ex4.style.left = (container.offsetWidth * 0.7 / facty) + 'px';
      ex4.style.top = (container.offsetHeight / facty)*0.8 - container.offsetHeight/3 + 'px';
      ex4.style.rotate = -facty * 7 + 'deg';
      console.log(ex3.offsetHeight);
      
  }
  else if(scrollPercent>70){
      ex1.style.left = container.offsetWidth / factx + 'px';
      ex1.style.top = container.offsetHeight / facty + 'px';
  }
    cry = document.querySelector('.cry');
    cry.style.opacity = scrollPercent*1.1 / 100;
    console.log(scrollPercent / 100);
});








