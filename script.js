const turkey = document.getElementById("a")

let xPos = 0;

function moveturkey(){
    if (xPos < 5){
        xPos += 1
    }
    else {
        xPos = 0
    }
    turkey.setAttribute('position', `${xPos} 0 -5`)
    requestAnimationFrame(moveturkey)
}

moveturkey()
