let characters = document.querySelectorAll('.character');
let animationInterval;

function moveQueue() {
    characters.forEach((char, index) => {
        let pos = parseInt(char.style.left || 0);
        char.style.position = 'relative';
        char.style.left = pos + 2 + 'px';
    });
}

function startQueue() {
    stopQueue();
    animationInterval = setInterval(moveQueue, 100);
}

function stopQueue() {
    clearInterval(animationInterval);
}
