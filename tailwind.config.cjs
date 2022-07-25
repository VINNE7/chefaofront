module.exports = {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        semiwhite: "#fafafa",
        ghostwhite: "#f0f0f5",
        blueywhite: "#e8edfd",
        raisinblack: "#24252E",
        oxfordblue: "#0B1B34",
        royalblue: "#001B42",
        yellowcrayolla: "#FFE75C",
        cyberyellow: "#FFD400",
        darkgolden: "#E9BA1D",
        error: "#DA1414",
        colorFocus: "#2E5AAC",
        grayDisabled: "#A3A3A3"
      },
      fontFamily: {
        tahoma: 'Tahoma'
      },
      backgroundImage: {
        'radioChecked': "url('/src/assets/images/radioChecked.svg')"
      }
    },
  },
  plugins: [],
};
