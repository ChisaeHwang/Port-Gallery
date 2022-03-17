var _frames = document.querySelectorAll(".photoFrame");
var gallery = document.querySelector(".gallery");
var zoomBtn = document.querySelectorAll("button");
var pageNum = 0; 

let galwidth = $(gallery).width();
let galheight = $(gallery).height();

let zoom = false;

console.log(galheight, galwidth);


for(var i=0; i < zoomBtn.length; i++){
    (function(idx){
        zoomBtn[idx].onclick = function(){
            if(pageNum == idx){
                 zoom = true;
            }
            pageNum = idx;
            zoomFrame();
        }
    })(i);
}

TweenMax.set("section", {perspective: 400});

function frameSetting(){
    _frames.forEach(function(item, i){
        TweenMax.to(item, 0, {
            top : galheight / 2 - 200,
            left : galwidth / 2 + i * 400 - 510,             
        })
    })
}

zoomBtn.forEach(function(item, i){
    TweenMax.from(item, .4, {
        top : 100,
        autoAlpha : 0,
        ease : Power3.easeInOut, 
        delay : i * .1 + .5,
    })
})

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
        TweenMax.to(gallery, 1, {
            scale : (3, 3),
            ease : Power4.easeInOut, 
            delay : .1
        })

        if(pageNum == 0){
            _frames.forEach(function(item, i){
                TweenMax.to(item, 1, {
                    top : galheight / 2 - 200,
                    left : galwidth / 2 + i * 1000 - 120,
                    scale : (2,2),
                    ease : Power4.easeInOut, 
                    delay : .1
                })
            })
        }else if(pageNum == 1){
            _frames.forEach(function(item, i){
                TweenMax.to(item, 1, {
                    top : galheight / 2 - 200,
                    left : galwidth / 2 + i * 1000 - galwidth / 1.07,
                    scale : (2,2),
                    ease : Power4.easeInOut, 
                    delay : .1
                })
            })
        }else if(pageNum == 2){
            _frames.forEach(function(item, i){
                TweenMax.to(item, 1, {
                    top : galheight / 2 - 200,
                    left : galwidth / 2 + i * 1000 - (galwidth * 1.76),
                    scale : (2,2),
                    ease : Power4.easeInOut, 
                    delay : .1
                })
            })
        }

        if(zoom){
            reset();
            zoom = false;
            pageNum = 4;
        }
        
}

function reset(event){
    if(pageNum == pageNum){
        TweenMax.to(gallery, 1, {
            scale : (1, 1),
            ease : Power4.easeInOut, 
            delay : .1
        })
        _frames.forEach(function(item, i){
            TweenMax.to(item, 1, {
                scale : (1, 1),
                top : galheight / 2 - 200,
                left : galwidth / 2 + i * 400 - 510,    
                ease : Power4.easeInOut, 
                delay : .1       
            })
        })
    }
}

resize();
