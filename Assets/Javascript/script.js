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

//carousel
const carousel = document.getElementById("carousel");

// Function to handle swipe gestures
let isDown = false;
let startX;
let scrollLeft;

carousel.addEventListener("mousedown", (e) => {
	isDown = true;
	carousel.classList.add("active");
	startX = e.pageX - carousel.offsetLeft;
	scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener("mouseleave", () => {
	isDown = false;
	carousel.classList.remove("active");
});

carousel.addEventListener("mouseup", () => {
	isDown = false;
	carousel.classList.remove("active");
});

carousel.addEventListener("mousemove", (e) => {
	if (!isDown) return;
	e.preventDefault();
	const x = e.pageX - carousel.offsetLeft;
	const walk = (x - startX) * 2; // Scroll-fast
	carousel.scrollLeft = scrollLeft - walk;
});

// Swipe functionality for touch devices
let touchStartX;
let touchEndX;

carousel.addEventListener("touchstart", (e) => {
	touchStartX = e.changedTouches[0].screenX;
});

carousel.addEventListener("touchend", (e) => {
	touchEndX = e.changedTouches[0].screenX;
	handleSwipe();
});

function handleSwipe() {
	if (touchStartX - touchEndX > 50) {
		// Swipe left
		carousel.scrollBy({ left: 300, behavior: "smooth" });
	} else if (touchEndX - touchStartX > 50) {
		// Swipe right
		carousel.scrollBy({ left: -300, behavior: "smooth" });
	}
}
