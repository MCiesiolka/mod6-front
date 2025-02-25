import { API_URL } from "./config.js";

addEventListener("DOMContentLoaded", async function(){

    const urlparam = new URLSearchParams(window.location.search)
    const songID = urlparam.get("id")
    console.log(songID)

   import { API_URL } from "./config.js";

const response = await fetch(`${API_URL}/songs/${songID}`);

    const song = await response.json()
    console.log(song)

    let heading = ""
    heading+= `${song.title}`
    document.querySelector("h1").innerHTML = heading

    let html = ""
    html+= `
        <h3>Artist - ${song.artist} </h3>
        <p>Popularity - ${song.popularity} </p>
        <p>Release Date - ${song.releaseDate} </p>
        
    `
    document.querySelector("div").innerHTML = html
})
