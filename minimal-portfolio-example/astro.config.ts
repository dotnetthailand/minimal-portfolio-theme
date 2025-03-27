import { defineConfig } from "astro/config";
import MinimalPortforlioTheme from '../@dotnetthailand/minimal-portfolio-theme';

export default defineConfig({
  integrations: [
    MinimalPortforlioTheme({
      config: {
        title: "minimal-portfolio-theme",
        description: "My awesome theme",
      },
      pages: {

      },
      overrides: {

      }
    }),
  ],
});
