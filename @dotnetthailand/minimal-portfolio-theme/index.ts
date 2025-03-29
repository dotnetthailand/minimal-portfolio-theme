import defineTheme from 'astro-theme-provider';
import react from '@astrojs/react';
import { z } from 'astro/zod';

export default defineTheme({
  name: 'minimal-portfolio-theme',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
  integrations: [
    react()]
});
