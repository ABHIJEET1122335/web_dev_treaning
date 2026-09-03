let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn1");
let resetBtn2 = document.querySelector(".reset-btn2");
let msgCon = document.querySelector(".msg-con"); // Fixed selector
let msg = document.querySelector("#msg");

let turn0 = true; // Fixed typo (tern0 -> turn0)

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

// Add event listeners to each box
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0 === true) { // Use === for strict comparison
            box.innerHTML = "0"; // Player "0" makes a move
            box.style.color = "#343a40"; // Set color for "0"
            turn0 = false; // Switch to player "X"
        } else {
            box.innerHTML = "X"; // Player "X" makes a move
            box.style.color = "#212529"; // Set color for "X"
            turn0 = true; // Switch to player "0"
        }
        box.disabled = true; // Disable the box after it's clicked
        checkWinner(); // Check if there's a winner
    });
});
// Function to check for a winner
const checkWinner = () => {
    for (let pattern of winPatterns) {
        const pos1val = boxes[pattern[0]].innerHTML;
        const pos2val = boxes[pattern[1]].innerHTML;
        const pos3val = boxes[pattern[2]].innerHTML;

        // Check if all positions in the pattern are filled and equal
        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val); // Display the winner
                return; // Exit the function
            }
        }
    }
};
// Function to display the winner
const showWinner = (winner) => {
    msg.innerHTML = `Winner is ${winner}! 🎉`; // Update the winner message
    msgCon.classList.remove("hide"); // Show the message container
    disableAllBoxes(); // Disable all boxes after a win


    // Check for a draw (all boxes are filled and no winner)
    let isDraw = true;
    boxes.forEach((box) => {
        if (box.innerHTML === "") {
            isDraw = false;
        }
    });
    if (isDraw) {
        msg.innerHTML = "It's a draw! 🎭"; // Update the draw message
        msgCon.classList.remove("hide"); // Show the message container
    }
};

// Function to disable all boxes
const disableAllBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

// Function to reset the game
resetBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerHTML = ""; // Clear the box content
        box.disabled = false; // Re-enable the box
    });
    msgCon.classList.add("hide"); // Hide the winner/draw message
    turn0 = true; // Reset the turn to player "0"
});
// Add event listener to the second reset button
resetBtn2.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerHTML = ""; // Clear the box content
        box.disabled = false; // Re-enable the box
    });
    msgCon.classList.add("hide"); // Hide the winner/draw message
    turn0 = true; // Reset the turn to player "0"
});

