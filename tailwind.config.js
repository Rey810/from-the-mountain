module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    cursor: {
      grab: "grab",
    },
    extend: {
      width: {
        mc: "max-content",
        ideal: "65rem",
      },
      spacing: {
        "1/1": "100%",
        "1/2": "50%",
        "2/3": "66.666666667%",
        "3/4": "75%",
      },
      zIndex: {
        "-10": "-10",
        "-20": "-20",
      },
    },
  },

  variants: {},
  plugins: [],
}
