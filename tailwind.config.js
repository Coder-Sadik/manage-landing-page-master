/** @type {import('tailwindcss').Config} */
module.exports = {
	purge: {
		content: ["./*.html", "./Assets/**/*.js"],
		safelist: [
			"mx-auto",
			"mySwiper",
			"flex",
			"md:gap-10",
			"mt-16",
			"mb-10",
			"max-w-[90vw]",
			"md:max-w-[450px]",
			"md:px-10",
			"bg-VeryLightGray",
			"relative",
			"py-10",
			"px-5",
			"swiper-slide",
			"cursor-pointer",
		],
	},
	theme: {
		extend: {
			colors: {
				// primary
				BrightRed: "hsl(12, 88%, 59%)",
				DarkBlue: "hsl(228, 39%, 23%)",
				// neutral
				DarkGrayishBlue: "hsl(227, 12%, 61%)",
				VeryDarkBlue: "hsl(233, 12%, 13%)",
				VeryPaleRed: "hsl(13, 100%, 96%)",
				VeryLightGray: "hsl(0, 0%, 98%)",
			},
			fontFamily: {
				vietnamPro: ["Be Vietnam Pro", "sans-serif"],
			},
			backgroundImage: {
				bgMobile: "url('./Assets/images/bg-simplify-section-mobile.svg')",
				bgTablet: "url('./Assets/images/bg-tablet-pattern.svg')",
				bgDesktop: "url('./Assets/images/bg-simplify-section-desktop.svg')",
			},
		},
	},
	plugins: [],
};
