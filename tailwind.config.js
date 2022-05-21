module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        toolsplaza: {
          primary: "#6E46F1",
          secondary: "#3498db",
          accent: "#37cdbe",
          neutral: "#34495e",
          gray: "#95a5a6",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
