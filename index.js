let text = "Play with me!" 
let i = 0;
let speed = 100;

function type() {
    if (i < text.length) {
    document.querySelector(".header_title").textContent += text.charAt(i);
    i++;
    setTimeout(type, speed);
    }
}

type()

const button = document.querySelector("#btn");
const input = document.querySelector("#guess")
const answer = Math.floor(Math.random()*30) + 1;

input.addEventListener("keypress", function(e){
    if (e.keyCode === 13) 
    play()
})

button.addEventListener("click", play);

function play() {
    const enterNumber = document.querySelector("#guess").value;

    if (enterNumber < 1 || enterNumber > 30) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter a number from 1 to 30!',
        })
        document.querySelector("#guess").value = "";
    }

    else if (isNaN(enterNumber)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Need to enter a number!',
        })
        document.querySelector("#guess").value = "";
    }
    
    else {
        if (enterNumber > answer) {
            Swal.fire("Enter below!", "The computer is winning so far");
        }
        else if (enterNumber < answer) {
            Swal.fire("Enter above!", "The computer is winning so far");
        }
        else {
            Swal.fire({
                title: 'Victory!',
                imageUrl: 'victory.jpeg',
                imageWidth: 400,
                imageHeight: 300,
                imageAlt: 'Custom image',
            })
        }
        document.querySelector("#guess").value = "";
    }
}
