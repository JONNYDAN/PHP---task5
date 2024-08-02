// Function to get parameters from the URL path
function getPathParameter(index) {
  let pathParts = window.location.pathname.split('/');
  return pathParts[index];
}

// Get the id and size parameters from the URL
let id = getPathParameter(3);
let size = getPathParameter(4);

// If the size parameter is not set or is invalid, default to 4
size = size ? parseInt(size, 10) : 4;

// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(size, KeyboardInputManager, HTMLActuator, LocalStorageManager);
});