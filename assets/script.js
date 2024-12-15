// JavaScript for Modal
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('email-form');
  const purchaseButtons = document.querySelectorAll('.purchase-btn');
  const closeModal = document.querySelector('.close-btn');

  purchaseButtons.forEach((button) => {
    button.addEventListener('click', () => {
      modal.style.display = 'flex';
    });
  });

  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});

// List of songs in the playlist
const playlist = [
  'Jansport J - Can We Connect.mp3',
  'Roy Davis Jr., Peven Everett - Gabriel - Live Garage Mix.mp3',
  'Isaiah Rashad - Find a Topic (homies begged).mp3',
  'JayDottCee - idea717 (anotherlifetime).mp3',
];

let currentSongIndex = 0; // The current song's index
const audioPlayer = document.getElementById('audio-player');
const audioSource = document.getElementById('audio-source');

// Toggle play/pause
function toggleAudio() {
  if (audioPlayer.paused) {
    audioPlayer.play();
  } else {
    audioPlayer.pause();
  }
}

// Play the previous song
function previousSong() {
  currentSongIndex =
    currentSongIndex === 0 ? playlist.length - 1 : currentSongIndex - 1;
  changeSong();
}

// Play the next song
function nextSong() {
  currentSongIndex =
    currentSongIndex === playlist.length - 1 ? 0 : currentSongIndex + 1;
  changeSong();
}

// Change the song
function changeSong() {
  audioSource.src = playlist[currentSongIndex];
  audioPlayer.load(); // Reload the audio player with the new song
  audioPlayer.play(); // Automatically start playing the new song
}
