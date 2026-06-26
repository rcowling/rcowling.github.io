// Mobile navigation toggle — no framework dependency.
(function () {
	var toggle = document.getElementById("navToggle");
	var nav = document.getElementById("primaryNav");

	if (!toggle || !nav) return;

	toggle.addEventListener("click", function () {
		var isOpen = nav.classList.toggle("is-open");
		toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
	});

	// Close menu when a link is tapped (mobile)
	nav.querySelectorAll("a").forEach(function (link) {
		link.addEventListener("click", function () {
			nav.classList.remove("is-open");
			toggle.setAttribute("aria-expanded", "false");
		});
	});
})();
