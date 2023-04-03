
document.addEventListener('DOMContentLoaded', () => {
    // Get a reference to the button element
    var gal=document.getElementsByClassName("gallery")[0];
    var pp=document.getElementsByClassName("pp")[0];
    var rc = document.getElementsByClassName("rc")[0];
    const button1 = document.querySelector("#b1");
    const button2 = document.querySelector("#b2");
    const button3 = document.querySelector("#b3");

    // Add an event listener to the button element
    button1.addEventListener("click", function () {
        // Code to execute when the button is clicked
        gal.style.backgroundImage = "url('portfolio/one.png')";
        pp.textContent = "Le Paradis";
        rc.textContent="In this project we had to create brand identity of a hypothetical hotel chain Le Paradis"
    });
    button2.addEventListener("click", function () {
        // Code to execute when the button is clicked
        gal.style.backgroundImage = "url('portfolio/two.png')";
        pp.textContent = "Study Panda";
        rc.textContent = "My final project for Human Computer Interaction (HCI) course.I designed an app that helps students manage their courses and get external help.";

    });
    button3.addEventListener("click", function () {
        // Code to execute when the button is clicked
        gal.style.backgroundImage = "url('portfolio/three.png')";
        pp.textContent = "Illustrations";
        rc.textContent = "I have created illustrations for various things like tshirts,websites and just for pure fun !";


    });

});