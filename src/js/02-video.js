
import Player from "@vimeo/player";
import throttle from "lodash.throttle";


const iframe = document.querySelector("iframe");

const player = new Player(iframe);
console.log(player)

const LOCALSTORAGE_VIMEO_KEY = "videoplayer-current-time"

const saveCurrentTimeJson = localStorage.getItem(LOCALSTORAGE_VIMEO_KEY)

playSaveTime(saveCurrentTimeJson)


player.on("timeupdate", throttle(saveCurrentTime, 1000))
player.off("timeupdate", saveCurrentTime)


function playSaveTime(saveTimeJson) {
    try {
        if (!saveTimeJson) {
            return
        }

        const seconds = JSON.parse(saveTimeJson).seconds;
        player.setCurrentTime(seconds);
    } catch (error) {
        console.log(error.name);
        console.log(error.message);
    }
}

function saveCurrentTime(currentTime) {
    localStorage.setItem(LOCALSTORAGE_VIMEO_KEY, JSON.stringify(currentTime))
}