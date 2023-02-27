import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
   
const player = new Player(iframe, {
    loop: true,
    fullscreen: true,
    quality: '1080p',
  });
  
const getCurrentTime = function(currentTime) {
    const seconds = currentTime.seconds;
    localStorage.setItem('videoplayer-current-time', seconds);
}
player.on('timeupdate', throttle(getCurrentTime, 1000));
if (localStorage.getItem('videoplayer-current-time')) {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
} else {
  player.setCurrentTime(0);
}