function printFactorialPyramid(rows) {
  const pyramidLines = [];
  let currentFactorial = 1n; // Use BigInt to prevent integer overflow on large rows

  // Base case: Row 0
  pyramidLines.push("0! = 1");

  // Calculate each row sequentially using multiplication
  for (let i = 1; i <= rows; i++) {
    currentFactorial *= BigInt(i);   

    // Build the expansion string backwards (e.g., "3 x 2 x 1")
    const steps = Array.from({ length: i }, (_, idx) => i - idx).join(" x ");

    // Format the full line equation with localized comma separators for readability
    const lineText = `${i}! = ${steps} = ${currentFactorial.toLocaleString()}`;
    pyramidLines.push(lineText);
  }

  // Find the maximum length to center-align all lines
  const maxWidth = Math.max(...pyramidLines.map((line) => line.length));

  // Print the centered pyramid
  console.log("--- FACTORIAL PYRAMID ---");
  pyramidLines.forEach((line) => {
    // Calculate required padding for left-alignment centering
    const padding = Math.floor((maxWidth - line.length) / 2);
    console.log(" ".repeat(padding) + line);
  });
}

// Change this number to expand or shrink your pyramid
let TOTAL_ROWS = 12;

printFactorialPyramid(TOTAL_ROWS);