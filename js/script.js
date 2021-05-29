// navigationbar 

function navColor() {
    if(window.scrollY){
        document.getElementById("colorChange").style.background = "white";
        document.getElementById("colorChange").style.boxShadow = "1px 5px 15px gray";
        // document.getElementById("iconColor").classList.add("text-dark");
        // document.getElementById("iconColor2").classList.add("text-dark");
        // document.getElementById("iconColor3").classList.add("text-dark");
        // document.getElementById("iconColor4").classList.add("text-dark");
        // document.getElementById("iconColor5").classList.add("text-dark");
        // document.getElementById("iconColor6").classList.add("text-dark");
        // document.getElementById("iconColor7").classList.add("text-dark");
        // document.getElementById("iconColor8").classList.add("text-dark");
        // document.getElementById("iconColor9").classList.add("text-dark");
        // document.getElementById("iconColor10").classList.add("text-dark");

    }
    else{
        // document.getElementById("colorChange").style.background = "transparent";
        document.getElementById("colorChange").style.boxShadow = "none";
        // document.getElementById("iconColor").classList.remove("text-dark");
        // document.getElementById("iconColor2").classList.remove("text-dark");
        // document.getElementById("iconColor3").classList.remove("text-dark");
        // document.getElementById("iconColor4").classList.remove("text-dark");
        // document.getElementById("iconColor5").classList.remove("text-dark");

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
    
