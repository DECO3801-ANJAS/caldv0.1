import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },

  env: {
    // frontendURL: "https://cookialize.vercel.app/",
    frontendURL: "localhost:3000/",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: false,
    screenshotOnRunFailure: false,
  },
});
