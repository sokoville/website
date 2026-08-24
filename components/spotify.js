const WORKER_URL = "https://last-fm-proxy.matthewbogen06.workers.dev/";

let params = new URLSearchParams(window.location.search);
let playing = false;
let imgcache = new Image();

function requestUpdate(user) {
    let url = `${WORKER_URL}/?user=${encodeURIComponent(user)}`;
    let request = new Request(url, {
        "method": "GET",
    });
    return fetch(request);
}

function successHandler(value) {
    if (value.status !== 200) {
        return;
    }
    value.json().then(data => {
        //console.log(data);
        let track = data.recenttracks.track[0];
        let img = track.image[0]["#text"];
        for (let imgdata of track.image) {
            img = imgdata["#text"];
        }
        if (img == "") {
            let art = track.artist;
            img = art.image[0]["#text"];
            for (let imgdata of art.image) {
                img = imgdata["#text"];
            }
        }
        if (img == "") {
            // Seems to be the default "no image" logo.
            img = "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png";
        }
        imgcache.src = img;
        let el_logo = document.querySelector(".logo");
        let el_artist = document.querySelector(".artist");
        let el_title = document.querySelector(".title");
        if (track["@attr"] == undefined) {
            if (playing) {
                // Stop Playing
                console.log("Stopped playing track.");
                playing = false;
            }
        } else if (playing == false) {
            // Start Playing
            console.log("Started playing track.");
            playing = true;
            document.getElementById("music_display").style.display = "flex";
            // document.getElementById("bruh").style.display = "block";
            imgcache.src = img;
            el_logo.src = img;
            el_artist.innerText = track.artist.name;
            el_title.innerText = track.name;

        } else {
            // Track Change
            let old_artist = el_artist.innerText;
            let old_title = el_title.innerText;
            if ((old_artist != track.artist.name) || (old_title != track.name)) {
                console.log("Changed track.");
                flip(function() {
                    el_logo.src = img;
                    el_artist.innerText = track.artist.name;
                    el_title.innerText = track.name;
                });
                document.getElementById("music_display").style.display = "flex";
                // document.getElementById("bruh").style.display = "block ";
            }
        }
    }, reason => {
    })

    setTimeout(tick, 15000);
}

function failureHandler(reason) {
    console.log("Last.FM Query failed:", reason)
    setTimeout(tick, 60000);
}

function tick() {
    let rq = requestUpdate("sokocian");
    rq.then(successHandler, failureHandler);
    rq.catch(failureHandler);
}

function zoom() {
    let width = document.documentElement.clientWidth;
    let height = document.documentElement.clientHeight;
    let csize = document.documentElement.getBoundingClientRect();
    let wscale = width / csize.width;
    let hscale = height / csize.height;
    document.body.style.zoom = hscale;
}

function flip(callback) {
    callback();
}

(function() {
    console.log(window.location.origin);
    zoom();
    tick();
})();