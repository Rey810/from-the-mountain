module.exports = () => ({
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  plugins: [require("tailwindcss"), require("autoprefixer")],
})

// remember to add autoprefixer and purge!
