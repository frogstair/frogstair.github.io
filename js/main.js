$(() => {
    if(Cookies.get("dark") == 1) {
        setDark();
        $("#darkbox").prop("checked", true);
    } else {
        setLight();
        $("#darkbox").prop("checked", false);
    }

    $("body").show();
})

function dark() {
    selected = $("#darkbox").is(':checked');
    if(!selected) setDark()
    else setLight();
}

function setLight() {
    Cookies.set("dark", "0");
    $(".darkmode-slider::before").removeClass("dark")
    $(".darkable").removeClass("dark")
}

function setDark() {
    Cookies.set("dark", "1");
    $(".darkmode-slider::before").addClass("dark")
    $(".darkable").addClass("dark")
}

function generateEmail() {

    var emails = [
        "Begin your essay here...",
        "Hello Daniel!",
        "Whats up?",
        "Begin your formal email:"
    ]

    var email = encodeURIComponent(emails[Math.floor(Math.random() * emails.length)]);
    $("#email").attr("href", `mailto:daniladudkin412@gmail.com?subject=Hey!&body=${email}`)
}