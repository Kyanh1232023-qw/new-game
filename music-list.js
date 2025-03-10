// music-list.js - Danh sách bài hát
let allMusic = [
  { name: "Bài hát 1", artist: "Ca sĩ 1", img: "image1.jpg", src: "music1.mp3" },
  { name: "Bài hát 2", artist: "Ca sĩ 2", img: "image2.jpg", src: "music2.mp3" },
  { name: "Bài hát 3", artist: "Ca sĩ 3", img: "image3.jpg", src: "music3.mp3" },
  { name: "Bài hát 4", artist: "Ca sĩ 4", img: "image4.jpg", src: "music4.mp3" },
  { name: "Bài hát 5", artist: "Ca sĩ 5", img: "image5.jpg", src: "music5.mp3" }
];

// music.js - Xử lý phát nhạc và danh sách
const musicList = document.querySelector(".music-list ul");
const searchInput = document.getElementById("search-input");

function loadMusicList() {
  musicList.innerHTML = "";
  allMusic.forEach((music, index) => {
    let li = document.createElement("li");
    li.innerHTML = `
      <div class="row">
        <span>${music.name}</span>
        <p>${music.artist}</p>
      </div>
      <audio class="${music.src}" src="songs/${music.src}"></audio>
    `;
    li.setAttribute("onclick", `playSelectedMusic(${index})`);
    musicList.appendChild(li);
  });
}

searchInput.addEventListener("keyup", function() {
  let filter = this.value.toLowerCase();
  let li = document.querySelectorAll(".music-list ul li");

  li.forEach((song) => {
    let songName = song.querySelector("span").innerText.toLowerCase();
    song.style.display = songName.includes(filter) ? "block" : "none";
  });
});

loadMusicList();
