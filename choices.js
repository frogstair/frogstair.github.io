function mouseOver() {
    var el = document.getElementById("choices");
    el.style.display = "block";
    setTimeout(function() {
        el.style.opacity = 1;
        el.style.transform = "translate(-50%, 30%)";
    })
}

function mouseOut() {
    var el = document.getElementById("choices");
    el.style.opacity = 0;
    el.style.transform = "translate(-50%, -50%)";
    setTimeout(function() {
        el.style.display = "none";
    }, 100);
}