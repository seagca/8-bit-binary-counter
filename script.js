const canvas = document.getElementById('counter-display');
const context = canvas.getContext('2d');
let counterValue = [0, 0, 0, 0, 0, 0, 0, 0];

function updateCounter() {
    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the counter value
    const binaryString = counterValue.join('');
    context.font = '48px Arial';
    context.fillText(binaryString, 10, 60);
}

function incrementCounter() {
    let carry = 1; // Initial carry value

    for (let i = counterValue.length - 1; i >= 0; i--) {
        counterValue[i] += carry;
        if (counterValue[i] > 1) {
            counterValue[i] = 0;
            carry = 1; // Carry over to the next bit
        } else {
            carry = 0;
            break; // No carry, exit the loop
        }
    }

    updateCounter();
}

function resetCounter() {
    counterValue = [0, 0, 0, 0, 0, 0, 0, 0];
    updateCounter();
}

// Update the counter initially
updateCounter();

// Add event listener to the increment button
const incrementButton = document.getElementById('increment-button');
incrementButton.addEventListener('click', incrementCounter);

// Add event listener to the reset button
const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', resetCounter);
