const colorDisplay = document.getElementById('color-display');
const generateBtn = document.getElementById('generate-btn');

function generateRandomColor() {
  // Generate random numbers for red, green, and blue
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  
  // Create the RGB color string
  const rgbColor = `rgb(${red}, ${green}, ${blue})`;
  
  // Set the background color of the display and update the text content
  colorDisplay.style.backgroundColor = rgbColor;
  
  return rgbColor;
}

generateBtn.addEventListener('click', () => {
  const newColor = generateRandomColor();
  console.log(`Generated color: ${newColor}`); 
});
