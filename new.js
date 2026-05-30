const playBtn = document.getElementById("play-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const progressBar = document.getElementById("progress");
const audioPlayer = document.getElementById("audio-player");
const songTitle = document.getElementById("song-title");
const songArtist = document.getElementById("song-artist");
const audioSource = document.getElementById("audio-source");

const songs = [
  {
    title: "Song Title 1",
    artist: "Artist 1",
    src: "song1.mp3",
    image: "https://via.placeholder.com/100"
  },
  {
    title: "Song Title 2",
    artist: "Artist 2",
    src: "song2.mp3",
    image: "https://via.placeholder.com/100"
  },
  {
    title: "Song Title 3",
    artist: "Artist 3",
    src: "song3.mp3",
    image: "https://via.placeholder.com/100"
  }
];

let currentSongIndex = 0;

// Function to update the player with the current song
function updatePlayer() {
  const currentSong = songs[currentSongIndex];
  songTitle.textContent = currentSong.title;
  songArtist.textContent = currentSong.artist;
  audioSource.src = currentSong.src;
  document.querySelector(".album-art").src = currentSong.image;
  audioPlayer.load();
}

// Play or pause the song
playBtn.addEventListener("click", () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playBtn.textContent = "⏸️";
  } else {
    audioPlayer.pause();
    playBtn.textContent = "▶️";
  }
});

// Change to the next song
nextBtn.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updatePlayer();
  audioPlayer.play();
  playBtn.textContent = "⏸️";
});

// Change to the previous song
prevBtn.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  updatePlayer();
  audioPlayer.play();
  playBtn.textContent = "⏸️";
});

// Update progress bar
audioPlayer.addEventListener("timeupdate", () => {
  const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  progressBar.value = progress;
});

// Change progress when user interacts with the bar
progressBar.addEventListener("input", () => {
  audioPlayer.currentTime = (progressBar.value / 100) * audioPlayer.duration;
});

// Initialize the player with the first song
updatePlayer();