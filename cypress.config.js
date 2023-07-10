module.exports = {
  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
    supportFile: "cypress/support/component.js", // Add this line
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
