/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.svelte"],
  darkMode: "class",
	theme: {
		extend: {
			spacing: {
				128: "32rem",
				144: "36rem",
			},
		},
	},
  plugins: [require("daisyui")],
	daisyui: {
		themes: ["dark", "light"]
	}
}

