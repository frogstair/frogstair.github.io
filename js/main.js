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