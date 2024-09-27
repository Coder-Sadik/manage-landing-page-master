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
// Function to fetch and populate carousel from JSON data
async function fetchCarouselData() {
	const response = await fetch("Assets/Javascript/persons.json");
	const data = await response.json();

	const carousel = document.getElementById("mySwiper");
	// Generate carousel items
	data.people.forEach((person) => {
		const carouselItem = document.createElement("div");
		carouselItem.classList.add(
			"flex-shrink-0", // Ensures items don't shrink and stay in one line
			"mx-auto",
			"max-w-[90vw]",
			"md:max-w-[450px]",
			"md:px-10",
			"bg-VeryLightGray",
			"relative",
			"py-10",
			"px-5",
			"swiper-slide",
			"cursor-pointer"
		);

		carouselItem.innerHTML = `
	  <img class="h-14 absolute left-[39vw] md:left-[193px] -top-[28px]" src="${person.profile_img}" alt="${person.name}'s image" />
	  <p class="font-bold text-DarkBlue my-4">${person.name}</p>
	  <p class="text-DarkGrayishBlue">${person.comment}</p>
	`;

		carousel.appendChild(carouselItem);
	});
}

//for carousel
const swiper = new Swiper(".swiper", {
	// Optional parameters
	direction: "horizontal",
	loop: false,

	// If we need pagination
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},

	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	// And if we need scrollbar
	scrollbar: {
		el: ".swiper-scrollbar",
	},
	breakpoints: {
		1024: {
			slidesPerView: 4,
			loop: true,
		},
	},
});

// Fetch carousel data on DOMContentLoaded
document.addEventListener("DOMContentLoaded", fetchCarouselData);
