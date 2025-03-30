/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundColor: {
				custom: "#000",
			},
			colors: {
				custom: "#000",
			},
			boxShadow: {
				light_on: "rgb(201 201 201) 0px -1px 59px 9px",
			},
			backgroundImage: {
				noise: "url('/src/assets/media/gifs/Noise Grain.gif')",
      },
      
		},
	},
	plugins: [],
};
