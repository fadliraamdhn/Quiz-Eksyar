const startButton = document.getElementById("start")
const rules = document.getElementById("rules-container")
const newStart = document.getElementById("start-button")
const playButton = document.getElementById("play")
const think = document.getElementById("noplay")

// fungsi memanggil rules
startButton.addEventListener("click", () => {
    rules.classList.remove("hidden");
    newStart.classList.add("hidden");
});

//fungsi kembali ke start
think.addEventListener("click", () => {
    rules.classList.add("hidden");
    newStart.classList.remove("hidden");
})

