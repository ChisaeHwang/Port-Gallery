var frames = document.querySelectorAll(".photoFrame");
var gallery = document.querySelector(".gallery");
var zoomBtn = document.querySelectorAll("button");
const pageNext = document.querySelector(".backimg");
var pageNum = 4; 

let galwidth = $(gallery).width();
let galheight = $(gallery).height();

let btnOver = false;
let zoom;

console.log(galheight, galwidth);

for(var i=0; i<zoomBtn.length; i++){
    (function(idx){
        zoomBtn[idx].onclick = function(){
            if(pageNum == idx){
                 btnOver= true;          
            }

            pageNum = idx;
            zoomFrame();
        }
    })(i);
}

function frameSetting(){
    frames.forEach(function(item, i){
        TweenMax.to(item, 0, {
            top : galheight / 2 - 200,
            left : galwidth / 2 + i * 400 - 510,             
        })
    })
}

window.addEventListener('resize', function(){
    if(!zoom){
        resize();
    }
})

function resize(){
    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;
    frameSetting();
}

// button 위치에 따라 left값 수정
function zoomFrame(){

        TweenMax.to(gallery, .75, {
            scale : (3, 3),
            ease : Power4.easeInOut, 
            delay : .08
        })

        if(pageNum == 0){
            frames.forEach(function(item, i){
                TweenMax.to(item, .75, {
                    top : galheight / 2 - 200,
                    left : galwidth / 2 + i * 1000 - 120,
                    scale : (2,2),
                    ease : Power4.easeInOut, 
                    delay : .08
                })
            })
            redFrame();
        }else if(pageNum == 1){
            frames.forEach(function(item, i){
                TweenMax.to(item, .75, {
                    top : galheight / 2 - 200,
                    left : galwidth / 2 + i * 1000 - galwidth / 1.07,
                    scale : (2,2),
                    ease : Power4.easeInOut, 
                    delay : .08
                })
            })
            redFrame();
        }else if(pageNum == 2){
            frames.forEach(function(item, i){
                TweenMax.to(item, .75, {
                    top : galheight / 2 - 200,
                    left : galwidth / 2 + i * 1000 - (galwidth * 1.76),
                    scale : (2,2),
                    ease : Power4.easeInOut, 
                    delay : .08
                })
            })
            redFrame();
        }

        if(btnOver){
            reSet();
            btnOver = false;
            pageNum = 4;
            enlFrame();
        }
}

function redFrame(){
    document.querySelector("canvas").style.pointerEvents = "none";
    document.querySelector("canvas").style.zIndex = 11;
    document.querySelector("canvas").style.transitionDelay = "0.3s";
    nextSite();
}

function enlFrame(){
    document.querySelector("canvas").style.pointerEvents = "auto";
    document.querySelector("canvas").style.zIndex = 9;
    document.querySelector("canvas").style.transitionDelay = "1s";
    
    for(var i=0; i<frames.length; i++){
        frames[i].style.cursor = "auto";
          frames[i].onclick = function(){
            return;
        }
      }
}

function reSet(event){
    if(pageNum == pageNum){
        TweenMax.to(gallery, 1, {
            scale : (1, 1),
            ease : Power4.easeInOut, 
            delay : .08
        })
        frames.forEach(function(item, i){
            TweenMax.to(item, 1, {
                scale : (1, 1),
                top : galheight / 2 - 200,
                left : galwidth / 2 + i * 400 - 510,    
                ease : Power4.easeInOut, 
                delay : .08       
            })
        })
    }
}

function nextSite (e) {
    for(var i=0; i<frames.length; i++){
        frames[i].style.cursor = "pointer";
        frames[i].onclick = function(){
            zoomPage();
        }
    }
}

function zoomPage (e) {
    TweenMax.to(pageNext, 1, {
        scale:(10, 10),
        ease : Power4.easeInOut, 
        delay : .08,
    })
}

resize();
