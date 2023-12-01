function ModeFunction() {
    let element = document.body;
    let icon = document.getElementById("mode")
    element.classList.toggle("light-theme");
    icon.classList.toggle("icon-dark");
}

let ButtonMode = document.querySelector("#mode")
ButtonMode.addEventListener("click", ModeFunction)