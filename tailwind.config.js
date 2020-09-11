module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    cursor: {
      grab: "grab",
    },
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      normal: "0",
      wider: ".1em",
      widest: ".2em",
    },
    opacity: {
      "0": "0",
      "25": ".25",
      "50": ".5",
      "75": ".75",
      "10": ".1",
      "20": ".2",
      "30": ".3",
      "40": ".4",
      "50": ".5",
      "60": ".6",
      "70": ".7",
      "80": ".8",
      "90": ".9",
      "100": "1",
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
        "4/5": "80%",
        "9/11": "81.8%",
        "9/10": "90%",
        "1/1": "100%",
        "14": "3.5rem",
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
        "3/10": "30vh",
        "4/10": "40vh",
        "5/10": "50vh",
        "6/10": "60vh",
        "7/10": "70vh",
        "8/10": "80vh",
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
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
  },

  variants: {
    opacity: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    scale: ['responsive', 'hover', 'focus', 'active', 'group-hover']
  },
  plugins: [],
  experimental: {
    extendedFontSizeScale: true,
    applyComplexClasses: true,
  },
  future: {
    removeDeprecatedGapUtilities: true,
  },
}
