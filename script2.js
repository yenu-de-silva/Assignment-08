let queueContainer = document.getElementById('queue');
let intervalId;

const colors = ['red', 'green', 'blue', 'yellow', 'pink'];

function createBlock(color) {
    const block = document.createElement('div');
    block.classList.add('block', color);
    return block;
}

function enqueueBlock() {
    if (queueContainer.children.length >= 10) {
        queueContainer.removeChild(queueContainer.firstChild);
    }
    const nextColor = colors[Math.floor(Math.random() * colors.length)];
    const block = createBlock(nextColor);
    queueContainer.appendChild(block);
}

function startQueue() {
    stopQueue();
    intervalId = setInterval(enqueueBlock, 1000);
}

function stopQueue() {
    clearInterval(intervalId);
}
