
module.exports = {
  // content: ["./src/**/*.{js,jsx,ts,tsx}"],
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
],
  theme: {
    extend: {},
    container:{
      center:true,
      padding:"1rem",
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ['corporate'],
  },
  important:true,
}
