<!doctype html>
<html>
    <head>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100&family=Poppins:wght@200&display=swap" rel="stylesheet">
        <link href="main.css" rel="stylesheet">

        <script src="text.js" type="text/javascript"></script>
        <script src="choices.js" type="text/javascript"></script>
    </head>
    <body>
        <div id="choices" onmouseleave="mouseOut(this)" class="choices-container">
            <p class="choice">About me</p>
            <p class="choice">My skills</p>
            <p class="choice">My projects</p>
            <p class="choice">Contact</p>
            <p class="choice">Donate</p>
        </div>
        <div class="center" onmouseenter="mouseOver(this)">
            <p class="main-text">
                frogstair
            </p>
            <pre id="subtext" class="sub-text">Welcome to my site</pre>
        </div>
    </body>
</html>