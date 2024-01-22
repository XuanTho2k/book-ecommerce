/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js,css}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          100: "#808089",
          200: "#787878",
          300: "#242424",
        },
        darkslategray: "#38383d",
        black: "#000",
        lavenderblush: "#fff0f1",
        crimson: "#ff424e",
        silver: "#c7c7c7",
        darkorange: "#fd820a",
        whitesmoke: {
          100: "#f7f7f7",
          200: "#f2f2f2",
          300: "#ebebf0",
        },
        royalblue: "#0d5cb6",
        lightgray: "#ccc",
        ghostwhite: "#f5f5fa",
        dodgerblue: "#1a94ff",
        gold: "#fdd835",
        cornflowerblue: "#3382db",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
      },
      borderRadius: {
        "21xl": "40px",
      },
    },
    fontSize: {
      "2xs": "0.69rem",
      base: "1rem",
      xs: "0.75rem",
      smi: "0.81rem",
      inherit: "inherit",
      lgg: "1.5rem",
      lggg: "2rem",
    },
    screens: {
      mq1225: {
        raw: "screen and (max-width: 1225px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
