// Get modal elements
const winnerModal = document.getElementById("winner-modal");
const winnerMessage = document.getElementById("winner-message");
const closeModal = document.getElementById("close-modal");

// Function to show the winner modal
const showWinnerModal = (winner) => {
    winnerMessage.textContent = `Player ${winner} wins! 🎉`;
    winnerModal.style.display = "flex"; // Show the modal

    // Add confetti effect
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
    });
};

// Function to close the modal and reset the game
closeModal.addEventListener("click", () => {
    winnerModal.style.display = "none"; // Hide the modal
    resetGame(); // Reset the game (you already have this function)
});

// Update checkWinner function
const checkWinner = () => {
    for (let pattern of winPatterns) {
        const pos1val = boxes[pattern[0]].innerHTML;
        const pos2val = boxes[pattern[1]].innerHTML;
        const pos3val = boxes[pattern[2]].innerHTML;

        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showWinnerModal(pos1val); // Show fancy winner modal
                disableAllBoxes(); // Disable all boxes
                return;
            }
        }
    }

    // Check for a draw
    let isDraw = true;
    boxes.forEach((box) => {
        if (box.innerHTML === "") {
            isDraw = false;
        }
    });
    if (isDraw) {
        winnerMessage.textContent = "It's a draw! 🎭";
        winnerModal.style.display = "flex"; // Show the modal for a draw
    }
};