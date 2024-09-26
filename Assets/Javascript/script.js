const hamburgerIcon = document.getElementById("hamburger-icon");
const closeIcon = document.getElementById("close-icon");
const navItems = document.querySelector("ul");
const backdrop = document.getElementById("backdrop");

hamburgerIcon.addEventListener("click", () => {
	hamburgerIcon.classList.add("hidden");
	navItems.classList.remove("hidden");
	closeIcon.classList.remove("hidden");
	backdrop.classList.remove("hidden");
});

closeIcon.addEventListener("click", () => {
	hamburgerIcon.classList.remove("hidden");
	navItems.classList.add("hidden");
	closeIcon.classList.add("hidden");
	backdrop.classList.add("hidden");
});

backdrop.addEventListener("click", () => {
	hamburgerIcon.classList.remove("hidden");
	navItems.classList.add("hidden");
	closeIcon.classList.add("hidden");
	backdrop.classList.add("hidden");
});
