const textDisplay = document.getElementById('text');
const words = ['Hello', 'My Name is Sachin Meena', 'This is my Portfolio', 'Let me walk you through'];
// const words = ['hi', 'hello', 'kaiseho'];
let i = 0;
let j = 0;
let current = [];
let isDeleting = false;
let isEnd = false;
let colour = document.getElementById('intro-left-ani')

function loop() {

    textDisplay.innerHTML = current.join('');
    if (i < words.length) {
        if (!isDeleting && j <= words[i].length) {
            current.push(words[i][j]);
            j++;
        }
        if (isDeleting && j <= words[i].length) {
            current.pop(words[i][j])
            j--;
            // colour.style.color = 'magneta';
        }
        if (j == words[i].length) {
            isEnd = true;
            isDeleting = true;

        }
        if (isDeleting && j == 0) {
            current = [];
            isDeleting = false;
            i++;
            if (i == words.length) {
                i = 0;
            }
        }
    }
    const speedUp = 50;
    const normal = 20;
    const time = isEnd ? 2000 : isDeleting ? speedUp : normal;
    setTimeout(loop, 200)
}


loop()