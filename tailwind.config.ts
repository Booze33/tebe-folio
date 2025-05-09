module.exports = {
  theme: {
    extend: {
      fontWeight: {
        heavy: 950,
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      animation: {
        blink: "blink is infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      }
    },
  },
};
