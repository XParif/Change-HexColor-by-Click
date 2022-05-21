/**
 * Project Requirements:
 * - change the background color by generating random hex color by clicking a button
 * - also display the hex code to a disabled input field
 */

// Steps

// Step 1 - create onload handler
window.onload = () => {
  main();
};

function main() {
  const root = document.getElementById("root");
  const btn = document.getElementById("change-btn");
  const output = document.getElementById("output");

  btn.addEventListener("click", function () {
    const bgColor = generateHexColor();
    root.style.backgroundColor = bgColor;
    output.value = bgColor;
  });
}

// Step 2 - random color generator function
function generateHexColor() {
  // #000000 #ffffff
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);

  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

// Step 3 - collect all necesseary references

// step 4 - handle the click event
