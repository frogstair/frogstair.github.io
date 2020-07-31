window.addEventListener("load", onLoad)

var previous = -1;

function onLoad() {
    var subtext = document.getElementById("subtext");
    switchErase(subtext)
}

function addText(subtext, text) {
    var i = 0;
    var space = true;
    var iID = setInterval(
        function() {
            if (i >= text.length) {
                clearInterval(iID);
                switchErase(subtext)
                return
            }
            if(space) {
                subtext.innerText = subtext.innerText.trim();
                space = !space;
            }
            subtext.innerText = subtext.innerText.concat(text[i]);
            i++
        }, 100
    );
}

function removeText(subtext) {
    var iID = setInterval(
        function() {
            if (subtext.innerText.length < 2) {
                subtext.innerText = "  "
                clearInterval(iID);
                switchWrite(subtext)
                return
            }
            subtext.innerText = subtext.innerText.slice(0, -1);
        }, 100
    );
}

function switchWrite(subtext) {
    var items = ["This is my frog domain", 
    "I am a Go back-end developer", 
    "I am a C developer", 
    "I develop UWP apps with C#",
    "My name is Daniel"];
    var id = Math.floor(Math.random() * items.length);
    while(id === previous)
        id = Math.floor(Math.random() * items.length);
    previous = id;
    var text = items[id];
    setTimeout(addText, 1000, subtext, text);
}

function switchErase(subtext) {
    setTimeout(removeText, 3000, subtext)
}