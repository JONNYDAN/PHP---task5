// Function to get query parameters from the URL
function getQueryParameter(name) {
  let url = new URL(window.location.href);
  return url.searchParams.get(name);
}

// Get the size parameter from the URL
let size = getQueryParameter('size');

// If the size parameter is not set or is invalid, default to 4
size = size ? parseInt(size, 10) : 4;

// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(size, KeyboardInputManager, HTMLActuator, LocalStorageManager);
});

