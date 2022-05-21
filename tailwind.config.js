module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        toolsplaza: {
          primary: "#4411E8",
          secondary: "#3498db",
          accent: "#37cdbe",
          neutral: "#2d3436",
          gray: "#95a5a6",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
