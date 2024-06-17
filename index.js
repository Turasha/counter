//counter
let count = 0
let value = document.querySelector("#value");
let btn = document.querySelectorAll(".btn");

btn.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const style = e.currentTarget.classList
        if(style.contains('decrease')){
            count--
        } else if (style.contains('increase')) {
            count++
        }else{
            count=0
        }

        if(count>0){
            value.style.color = "green"
        } else if (count < 0){
            value.style.color = "red"
        }else{
            value.style.color = "black"
        }

        value.textContent = count
    })
})