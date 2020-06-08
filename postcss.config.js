module.exports = () => ({
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  plugins: [require("tailwindcss")],
})

// remember to add autoprefixer and purge!
