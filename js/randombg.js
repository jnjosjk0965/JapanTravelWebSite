const bgImage = ["bg_japan.jpg","bg_osaka.jpg","bg_tokyo.jpg","bg_kyoto.jpg"];
const bgLength = bgImage.length;
const background = document.querySelector("#header_main");

function imgChange(){
    const chosenImage = bgImage[Math.floor(Math.random()*bgLength)];
    background.style.backgroundImage = `url(images/${chosenImage})`
}

function resizeImg(){
    if((window.innerWidth / 16) < (window.innerHeight / 9)){
        background.style.backgroundSize = "auto 100%";
    }
    else{
        background.style.backgroundSize = "100% auto";
    }
}

setInterval(imgChange,3000);

window.addEventListener('resize',resizeImg);