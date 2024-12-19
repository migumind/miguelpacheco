// Get references to the GIF and the side panel
const gif = document.getElementById('gif');
const sidePanel = document.getElementById('sidePanel');

// Toggle the side panel on GIF click
gif.addEventListener('click', function (event) {
  // Prevent the click event from bubbling up to the document
  event.stopPropagation();

  // Toggle the side panel visibility
  if (sidePanel.style.display === 'block') {
    sidePanel.style.opacity = '0'; // Start fading out
    setTimeout(() => {
      sidePanel.style.display = 'none'; // Hide after fade out
    }, 300); // Match this duration with the CSS transition duration
  } else {
    sidePanel.style.display = 'block'; // Show the side panel
    setTimeout(() => {
      sidePanel.style.opacity = '1'; // Fade in
    }, 10); // Small delay to allow display to take effect
  }
});

// Close the side panel when clicking outside of it
document.addEventListener('click', function (event) {
  // Check if the click is outside the side panel and the GIF
  if (!sidePanel.contains(event.target) && !gif.contains(event.target)) {
    sidePanel.style.opacity = '0'; // Start fading out
    setTimeout(() => {
      sidePanel.style.display = 'none'; // Hide after fade out
    }, 300); // Match this duration with the CSS transition duration
  }
});
