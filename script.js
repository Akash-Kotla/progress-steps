let progress = document.getElementById('progress')
let prev = document.getElementById('prev')
let next = document.getElementById('next')
let circles = document.querySelectorAll('.circle')
let currentactive = 1

next.addEventListener('click', () => {
    
    currentactive++
    if (currentactive > circles.length) {
        currentactive = circles.length
    }
    update()



})
prev.addEventListener('click', () => {
    currentactive--
    if (currentactive < 1) {
        currentactive = 1

    }
    update()
})
function update() {
    circles.forEach((circle, idx) => {
        // console.log(circle);
        // console.log(idx);
        if (idx < currentactive) {
            circle.classList.add('active')
        }
        else {
            circle.classList.remove('active')
        }

    })
    let actives=document.querySelectorAll('.active')
    progress.style.width=( actives.length-1)/(circles.length-1)
    *100+'%'
    if(currentactive===1){
        prev.disabled=true
    }else if(currentactive===circles.length){
        next.disabled=true
    }else{
        prev.disabled=false
        next.disabled=false
    }
}











