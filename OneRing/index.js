if("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
         navigator.serviceWorker.register("sw.js")
         .then(registration => {
            console.log("SW registered");
         })
         .error(error => {
            console.log("SW registration failed: ", error);
         });
    });
}


const darkness = document.getElementById("darkness");
const evil = document.getElementById("evil");

const TheOneRing = document.getElementById("TheOneRing");


evil.addEventListener("change", prepniObrazek);
darkness.addEventListener("change", prepniRezim);


function prepniObrazek(event) {
    if(evil.checked) {
        TheOneRing.src = "TheOneRing02.png";
    } else {
        TheOneRing.src = "TheOneRing01.png";
    }
}


function prepniRezim(event) {
    if(darkness.checked) {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }
}