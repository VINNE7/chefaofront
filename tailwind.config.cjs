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
        colorfooter: '#D9D9D9',
        error: "#DA1414",
        colorFocus: "#2E5AAC",
        grayDisabled: "#A3A3A3",
        royaldark: "#001B42"
      },
      fontFamily: {
        tahoma: 'Tahoma'
      },

      lineHeight: {
        'extra-loose': '2.5',
        '12': '2.75rem',

      backgroundImage: {
        'radioChecked': "url('/src/assets/images/radioChecked.svg')"
      }
    },
  }
  },
  plugins: [],
};
