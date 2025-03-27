import { defineConfig } from "astro/config";
import MinimalTheme from '../@dotnetthailand/minimal-portfolio-theme';

export default defineConfig({
  integrations: [
    MinimalTheme({
      config: {
        title: "@dotnetthailand/minimal-portfolio-theme theme",
        description: "My awesome theme",
      },
      pages: {

      },
      overrides: {

      }
    }),
  ],
});
