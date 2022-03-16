var gallery = document.querySelector(".gallery");
var zoomBtn = document.querySelectorAll("button");

function zoomFrame(){
        TweenMax.to(gallery, 1, {
            scale : (3, 3),
            left : width /2 - 200
        })
}

zoomBtn[0].addEventListener('click', function(){
    zoomFrame();
    console.log('2');
})