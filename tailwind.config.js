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
        outline: "0 0 0 1px #ec4e20",
      },
      spacing: {
        "1/5": "20%",
        "1/3": "33.33333333%",
        "2/5": "40%",
        "1/2": "50%",
        "2/3": "66.666666667%",
        "3/4": "75%",
        "1/1": "100%",
        "17": "4.25rem",
        "18": "4.5rem",
        "72": "28rem",
        "76": "30rem",
        "80": "32rem",
      },
      zIndex: {
        "-10": "-10",
        "-20": "-20",
      },
      inset: {
        "1/2": "50%",
        "1/3": "33.33333%",
      },
      minHeight: {
        "9/10": "90vh",
        "8/10": "80vh",
        "7/10": "70vh",
        "6/10": "60vh",
      },
      maxHeight: {
        "9/10": "90vh",
        "8/10": "80vh",
        "7/10": "70vh",
        "6/10": "60vh",
      },
      gridTemplateRows: {
        // Simple 8 row grid
        "12": "repeat(12, minmax(0, 1fr))",
      },
      gridRowEnd: {
        "8": "8",
        "9": "9",
        "10": "10",
        "11": "11",
        "12": "12",
        "13": "13",
      },
      gridRowStart: {
        "8": "8",
        "9": "9",
        "10": "10",
        "11": "11",
        "12": "12",
        "13": "13",
      },
    },
  },

  variants: {},
  plugins: [],
  experimental: {
    extendedFontSizeScale: true,
    applyComplexClasses: true,
  },
  future: {
    removeDeprecatedGapUtilities: true,
  },
}
