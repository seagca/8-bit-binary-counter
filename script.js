// Get the necessary elements from the DOM
var binaryCounterDisplay = document.getElementById('counter');
var decimalCounterDisplay = document.getElementById('decimal-counter');
var startButton = document.getElementById('startBtn');
var stopButton = document.getElementById('stopBtn');
var resetButton = document.getElementById('resetBtn');

// Initialize the count and interval ID
var count = 0;
var intervalId = null;

// Function to convert count to 8-bit binary
function convertToBinary(count) {
    var binary = count.toString(2);
    // Pad the binary representation with leading zeros
    while (binary.length < 8) {
        binary = '0' + binary;
    }
    return binary;
}

// Function to update the counter displays
function updateCounterDisplays() {
    binaryCounterDisplay.textContent = convertToBinary(count);
    decimalCounterDisplay.textContent = count;
}

// Function to start the counter
function startCounter() {
    intervalId = setInterval(incrementCount, 1000);
    startButton.disabled = true;
    stopButton.disabled = false;
}

// Function to stop the counter
function stopCounter() {
    clearInterval(intervalId);
    startButton.disabled = false;
    stopButton.disabled = true;
}

// Function to reset the counter
function resetCounter() {
    stopCounter();
    count = 0;
    updateCounterDisplays();
}

// Function to increment the count
function incrementCount() {
    count++;
    if (count > 255) {
        count = 0; // Reset count if it exceeds 8 bits
    }
    updateCounterDisplays();
}

// Event listeners for the buttons
startButton.addEventListener('click', startCounter);
stopButton.addEventListener('click', stopCounter);
resetButton.addEventListener('click', resetCounter);

// Initial display
updateCounterDisplays();
