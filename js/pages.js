function pageHandler(el) {
	var frontpage = document.getElementById("frontpage-holder");
	var holder = document.getElementById(el.id + "-holder");
	mouseOut()

	frontpage.style.opacity = 0;
	holder.style.display = "block";

	setTimeout(
		function() {
			frontpage.style.display = "none";
			holder.style.opacity = 1;
		}, 100
	)
}

function back(el) {
	var frontpage = document.getElementById("frontpage-holder");
	var holder = el.parentElement;

	holder.style.opacity = "0";
	frontpage.style.display = "block";
	
	setTimeout(
		function() {
			holder.style.display = "none";
			frontpage.style.opacity = 1;
		}, 100
	)
}