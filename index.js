const audioPlayer = document.getElementById('audioPlayer');
        const playPauseBtn = document.getElementById('playPauseBtn');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const shuffleBtn = document.getElementById('shuffleBtn');
        const volumeControl = document.getElementById('volumeControl');
        const currentTimeDisplay = document.getElementById('currentTime');
        const totalDurationDisplay = document.getElementById('totalDuration');
        const progressBar = document.querySelector('.progress-bar .filled');
        const songImage = document.querySelector('.song-image');
        const songName = document.getElementById('songName');
        const songArtist = document.getElementById('songArtist');

        let currentSongIndex = 0;
        let isShuffle = false;

        const songs = [
            { name: " Hey Minnaley", artist: "G.V.prakash kumar", src: "music/Hey Minnale.mp3", image: "songimg/amaran2.jpg" },
            { name: " Golden Sparrow", artist: "G.V.prakash kumar,Dhanush,Arivu,sublashini", src: "music/Golden-Sparrow-MassTamilan.dev.mp3", image: "songimg/golden sparrow.jpg" },
            { name: "Illuminati", artist: "Sushin-shyam-Dabzee", src: "music/Illuminati-Sushin-Shyam-Dabzee.mp3", image: "songimg/illuminati.jpg" },
            { name: "Manasilayo", artist: "Anirudh Ravichadar", src: "music/Manasilaayo.mp3", image: "songimg/manasilayo.jpg" },
            { name: " Chillanjirukkiye", artist: "Roseholden", src: "music/Chillanjirukkiye.mp3", image: "songimg/Aasa Orave.jpg" },
            { name: "Matta", artist: "Yuvan Shankar Raja,Shenbagaraj,vel,sam,Narayanan Ravishankar", src: "music/Matta.mp3", image: "songimg/Goat-greatest-of-all-time-movie-songs-download-vijay-goat-songs.jpg" },
            { name: "Vennilavu-Saaral", artist: "G.V.prakash kumar", src: "music/Vennilavu-Saaral-MassTamilan.dev.mp3", image: "songimg/amaran.png" },
            { name: " Aasa Orave", artist: "Roseholden", src: "music/Aasa Orave.mp3", image: "songimg/Aasa Orave.jpg" },
            { name: "Hunter Vantar", artist: "Anirudh", src: "music/Hunter Vantaar.mp3", image: "songimg/vettaiyan.jpg" },
            { name: "Paiya dei", artist: "Indie Music,Aasal Kolaru", src: "music/Paiya Dei.mp3", image: "songimg/paiya dei.jpg" },
            { name: " Dheema", artist: "Anirudh Ravichandar", src: "music/Dheema-MassTamilan.dev.mp3", image: "songimg/dheema.jpg" }
        ];

        function updateSong() {
            const currentSong = songs[currentSongIndex];
            document.getElementById('audioSource').src = currentSong.src;
            songImage.src = currentSong.image;
            songName.textContent = currentSong.name;
            songArtist.textContent = `Artist: ${currentSong.artist}`;
            audioPlayer.load();
            audioPlayer.play();
            playPauseBtn.textContent = '❚❚';
        }

        playPauseBtn.addEventListener('click', () => {
            if (audioPlayer.paused) {
                audioPlayer.play();
                playPauseBtn.textContent = '❚❚';
            } else {
                audioPlayer.pause();
                playPauseBtn.textContent = '▶';
            }
        });

        audioPlayer.addEventListener('timeupdate', () => {
            let currentTime = audioPlayer.currentTime;
            let duration = audioPlayer.duration;

            let progress = (currentTime / duration) * 100;
            progressBar.style.width = progress + '%';

            currentTimeDisplay.textContent = formatTime(currentTime);
            totalDurationDisplay.textContent = formatTime(duration);
        });

        function formatTime(seconds) {
            let minutes = Math.floor(seconds / 60);
            let remainingSeconds = Math.floor(seconds % 60);
            return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
        }

        progressBar.addEventListener('click', (e) => {
            const barWidth = e.currentTarget.offsetWidth;
            const clickX = e.offsetX;
            const newTime = (clickX / barWidth) * audioPlayer.duration;
            audioPlayer.currentTime = newTime;
        });

        volumeControl.addEventListener('input', () => {
            audioPlayer.volume = volumeControl.value;
        });

        nextBtn.addEventListener('click', () => {
            currentSongIndex = (currentSongIndex + 1) % songs.length;
            updateSong();
        });

        prevBtn.addEventListener('click', () => {
            currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
            updateSong();
        });

        shuffleBtn.addEventListener('click', () => {
            isShuffle = !isShuffle;
            shuffleBtn.style.backgroundColor = isShuffle ? '#45a049' : '#4caf4f00';
        });

        audioPlayer.addEventListener('ended', () => {
            if (isShuffle) {
                currentSongIndex = Math.floor(Math.random() * songs.length);
            } else {
                currentSongIndex = (currentSongIndex + 1) % songs.length;
            }
            updateSong();
        });

        updateSong();


        function toggleLike() {
            const likeButton = document.querySelector('.like-button');
            likeButton.classList.toggle('liked');
          }
        

        
function openNav() {
    document.getElementById("mySidenav").style.width = "200px"; 
  }
  
 
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0"; 
  }


// Function to toggle visibility of divs based on the button clicked
function toggleContent(mode) {
    const allContent = document.getElementById('allContent');
    const musicContent = document.getElementById('musicContent');
    const podcastContent = document.getElementById('podcastContent');
  
    // Hide all sections
    allContent.classList.remove('active');
    musicContent.classList.remove('active');
    podcastContent.classList.remove('active');
  
    // Show the selected section
    if (mode === 'all') {
      allContent.classList.add('active');
    } else if (mode === 'music') {
      musicContent.classList.add('active');
    } else if (mode === 'podcast') {
      podcastContent.classList.add('active');
    }
  }
  
  // Event listeners for each button to switch between divs
  document.getElementById('allColumns').addEventListener('click', () => toggleContent('all'));
  document.getElementById('musicColumns').addEventListener('click', () => toggleContent('music'));
  document.getElementById('podcastColumns').addEventListener('click', () => toggleContent('podcast'));
  
  // Initially display the 'All' content when the page loads
  toggleContent('all');
  

  function openNav() {
    document.getElementById("mySidenav1").style.width = "300px"; 
  }
  
 
  function closeNav() {
    document.getElementById("mySidenav1").style.width = "80px"; 
  }