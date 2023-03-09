import throttle from "lodash.throttle";
import Player from '@vimeo/player';
const LOCALE_STORAGE = 'videoplayer-current-time'


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const time = player.on('timeupdate', throttle(function(data) {
    localStorage.setItem(LOCALE_STORAGE, JSON.stringify(data));
}, 1000));

const array = JSON.parse(localStorage.getItem(LOCALE_STORAGE));
const currentTime = array['seconds'];

player.setCurrentTime(currentTime);