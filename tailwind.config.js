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
      boxShadow: {
        outline: '0 0 0 3px #ec4e20'
      },
      spacing: {
        "1/1": "100%",
        "1/2": "50%",
        "1/3": "33.33333333%",
        "1/40": "20%",
        "2/3": "66.666666667%",
        "3/4": "75%",
      },
      zIndex: {
        "-10": "-10",
        "-20": "-20",
      },
      inset: {
        "1/2": "50%",
      },
    },
  },

  variants: {},
  plugins: [],
}
