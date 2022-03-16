var _frames = document.querySelectorAll(".photoFrame");
var gallery = document.querySelector(".gallery");
var pageNum = 0; 

let galwidth = $(gallery).width();
let galheight = $(gallery).height();

console.log(galheight, galwidth);

TweenMax.set("section", {perspective: 400});

function frameSetting(){
    _frames.forEach(function(item, i){
        TweenMax.to(item, 0, {
            top : galheight / 2 - 200,
            left : galwidth / 2 + i * 400 - 510,
            rotationX : 0, 
            rotationY : 0, 
            rotationZ : 0,
             
        })
    })
}

window.addEventListener('resize', function(){
    resize();
})

function resize(){
    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;
    frameSetting();
}

resize();