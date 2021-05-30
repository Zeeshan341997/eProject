// navigationbar 

function navColor() {
    if(window.scrollY){
        document.getElementById("colorChange").style.background = "white";
        document.getElementById("colorChange").style.boxShadow = "1px 5px 15px gray";
     

    }
    else{
    
        document.getElementById("colorChange").style.boxShadow = "none";
    }
}

window.addEventListener('scroll', navColor);

// our team slider

function mySliderUp(){

    document.getElementById("slide").style.top = "-100%";
    // document.getElementById("slide").style.animation = "fade-up";
    // document.getElementById("slide").style.animationDuration = "0.8s";
}
function mySliderDown(){
    document.getElementById("slide").style.top = "0";
    // document.getElementById("slide").style.animatedClassName = 'fade-in';
    // document.getElementById("slide").style.animationDuration = "0.8s";
}
    // animation

AOS.init({
duration: 2000,
once: true,

});
    
function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var navigation = document.querySelector('.tabs-btn');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}



