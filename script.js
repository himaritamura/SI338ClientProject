const show_best = document.getElementById("show_best");
const show_recent = document.getElementById("show_recent");

// const best_button = document.querySelector('label[for="show_best"]');
// const recent_button = document.querySelector('label[for="show_recent"]');

let best_shown = false;
let recent_shown = false;

function showBest() {
    if (!best_shown) { 
        // button pressed
        document.getElementById("best_time").style.border = "blue 5px solid";
        
        // jump to content
        document.getElementById("best_time").scrollIntoView();
    }
    else {
        // button released
        document.getElementById("best_time").style.border = "none";
    }
    best_shown = !best_shown
}

function showRecent() {
    if (!recent_shown) { 
        // button pressed
        document.getElementById("recent").style.border = "orange 5px solid";


        // jump to content
        document.getElementById("recent").scrollIntoView();
    }
    else {
        // button released
        document.getElementById("recent").style.border = "none";
    }
    recent_shown = !recent_shown
}

show_best.addEventListener("click", showBest);
show_recent.addEventListener("click", showRecent);