var eye = document.querySelector('.eye_mask');
var pupil = document.querySelector('.eye');

document.addEventListener('mousemove', function (e) {
    var x = e.clientX - eye.getBoundingClientRect().left - eye.offsetWidth / 2;
    var y = e.clientY - eye.getBoundingClientRect().top - eye.offsetHeight / 2;
    var angle = Math.atan2(y, x);
    var distance = Math.min(Math.sqrt(x * x + y * y), 80);
    pupil.style.transform = 'translate(' + (distance * Math.cos(angle)) + 'px, ' + (distance * Math.sin(angle)) + 'px)';
});

window.addEventListener('scroll', function () {
    var container = document.querySelector('.parallax');
    var containerRect = container.getBoundingClientRect();
    var containerTop = containerRect.top;
    var containerBottom = containerRect.bottom;
    var windowHeight = window.innerHeight;
    if (containerTop < windowHeight && containerBottom-550 >= 0) {
        var images = document.querySelectorAll('.parallax .background img');
        var offset = window.scrollY - windowHeight-100;

        images.forEach(function (image, index) {
            image.style.top = (offset) * (index + 1) * 0.08 + 'px';
        });
        var img = document.querySelector('#scrolling-image');
        let offset2 = window.scrollY;
        img.style.transform = `scale(0.5) translateX(-50%) translateY(${offset2}px)`;

    }
    
   
});




