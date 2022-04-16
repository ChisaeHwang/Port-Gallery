const toDoText = document.querySelector(".backText");
const toDoCursor = document.querySelector(".textCursor");
const takePhoto = document.querySelectorAll(".photo");
const artBtn = document.querySelectorAll("button");

var photoArr = ["photo1.png", "photo2.png", "photo3.png"];

// map 함수 이용해서 링크 이동

function* countNum(i) {

     function* infinity(i = 0) {
          while (true) yield i++;
     }

     function* limit(i, num) {
          for (const a of num) {
            yield a;
            if (a == i) return;
          }
     }

     for (const a of limit(i.length - 1, infinity())) {
       yield a;
     }
}

function deleteToDo(event){
     toDoText.remove();
     toDoCursor.remove();
     i = Math.round(Math.random() * photoArr.length);
     console.log(i);
     offImg();
     for (const i of countNum(photoArr)){
          document.querySelectorAll(".photoFrame")[i].style.zIndex = 10;
          document.querySelector("canvas").style.zIndex = 9;
     }
}

function offImg(event){
     document.querySelector(".lightShadow").style.background = "black";
     document.querySelector(".lightShadow").style.transition = "0s";
     for (var i=0; i<photoArr.length; i++){
          takePhoto[i].style.background = "none";
          takePhoto[i].style.opacity = "0"
     }

     artBtn.forEach(function(item, i){
          TweenMax.to(item, .4, {
              top : -100,
              autoAlpha : 1,
              ease : Power3.easeInOut, 
              delay : i* .1,
          })
     })
}

function changeImg(event){
     document.querySelector(".lightShadow").style.background = "radial-gradient(circle 25em at var(--lampX) var(--lampY), rgba(0,0,0,0) 0%, rgba(0,0,0,.5) 80%,rgba(0,0,0,.95) 100%)";
     document.querySelector(".lightShadow").style.transition = "all 1s ease-in-out";
     photoNum = Math.floor(Math.random() * photoArr.length);
     for (const i of countNum(photoArr)){
          takePhoto[i].style.opacity = "1";
     }

     switch(photoNum){
          case 0:
               takePhoto[0].style.background = `url(img/${photoArr[2]})`;
               takePhoto[1].style.background = `url(img/${photoArr[0]})`;
               takePhoto[2].style.background = `url(img/${photoArr[1]})`;
               break;
          case 1:
               takePhoto[0].style.background = `url(img/${photoArr[0]})`;
               takePhoto[1].style.background = `url(img/${photoArr[1]})`;
               takePhoto[2].style.background = `url(img/${photoArr[2]})`;
               break;
          case 2:
               takePhoto[0].style.background = `url(img/${photoArr[1]})`;
               takePhoto[1].style.background = `url(img/${photoArr[2]})`;
               takePhoto[2].style.background = `url(img/${photoArr[0]})`;
               
     }
}

toDoText.addEventListener("click", deleteToDo);