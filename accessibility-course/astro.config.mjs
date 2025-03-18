import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { createCssVariablesTheme } from "shiki/core";

import react from "@astrojs/react";

const myTheme = createCssVariablesTheme({
  name: "dark-plus-custom",
  variablePrefix: "--shiki-",
});

export default defineConfig({
  integrations: [tailwind(), react()],
  markdown: {
    shikiConfig: {
      theme: "github-light",
      wrap: true,
    },
  },
});