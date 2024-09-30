const left = document.getElementById("left")
const right = document.getElementById("right")

const randomNum = Math.floor(Math.random().toFixed(2)*10)

console.log("randomNum: ", randomNum)

left.style.marginTop = `3${randomNum}vh`
right.style.marginTop = `3${randomNum}vh`
