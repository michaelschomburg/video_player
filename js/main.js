
//load media player

$('#player').mediaelementplayer({
  features: ['playpause','progress','duration', 'tracks', 'volume', 'fullscreen']
});

// The transcript text get its highlight color here

const player = document.querySelector('#player');
const text = document.querySelectorAll('span');
const textContainer = document.querySelector('.text-container');


player.addEventListener('timeupdate', () => {
  for (let i = 0; i < text.length; i++) {
    if (text[i].dataset.start < player.currentTime && player.currentTime < text[i].dataset.end) {
      text[i].style.color = 'red'
      }
      else {
        text[i].style.color = 'black'
      }
  }
});

// By clicking the transcript the video jumps to the associated moment of the video

  textContainer.addEventListener('click', function(e){
    player.currentTime = e.target.getAttribute('data-start');
        console.log(player.currentTime)
  });
