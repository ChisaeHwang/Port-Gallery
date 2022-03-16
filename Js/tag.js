const toDoText = document.querySelector(".backText");
const takePhoto = document.querySelectorAll(".photo");

var photoArr = ["photo1.png", "photo2.png", "photo3.png"];

function deleteToDo(event){
     toDoText.remove();
     i = Math.round(Math.random() * photoArr.length);
     console.log(i);
     offImg();
}

function offImg(event){
     document.querySelector(".lightShadow").style.background = "black";
     document.querySelector(".lightShadow").style.transition = "0s";
     for (var i=0; i<photoArr.length; i++){
          takePhoto[i].style.background = "none";
          takePhoto[i].style.opacity = "0"
     }
}

function changeImg(event){
     document.querySelector(".lightShadow").style.background = "radial-gradient(circle 20em at var(--lampX) var(--lampY), rgba(0,0,0,0) 0%, rgba(0,0,0,.5) 80%,rgba(0,0,0,.95) 100%)";
     document.querySelector(".lightShadow").style.transition = "all 1s ease-in-out";
     photoNum = Math.floor(Math.random() * photoArr.length);
     for (var i=0; i<photoArr.length; i++){
          takePhoto[i].style.opacity = "1"
     }

     switch(photoNum){
          case 0:
               takePhoto[0].style.background = "url(img/" + photoArr[2] +")";
               takePhoto[1].style.background = "url(img/" + photoArr[0] +")";
               takePhoto[2].style.background = "url(img/" + photoArr[1] +")";
               break;
          case 1:
               takePhoto[0].style.background = "url(img/" + photoArr[0] +")";
               takePhoto[1].style.background = "url(img/" + photoArr[1] +")";
               takePhoto[2].style.background = "url(img/" + photoArr[2] +")";
               break;
          case 2:
               takePhoto[0].style.background = "url(img/" + photoArr[1] +")";
               takePhoto[1].style.background = "url(img/" + photoArr[2] +")";
               takePhoto[2].style.background = "url(img/" + photoArr[0] +")";
               
     }
}

toDoText.addEventListener("click", deleteToDo);