import { defineConfig, fontProviders } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';

export default defineConfig({
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
  ],
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Geist Sans',
      cssVariable: '--font-geist-sans',
      options: {
        variants: [
          {
            src: ['./src/fonts/GeistVF.woff'],
            weight: '100 900',
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'Geist Mono',
      cssVariable: '--font-geist-mono',
      options: {
        variants: [
          {
            src: ['./src/fonts/GeistMonoVF.woff'],
            weight: '100 900',
          },
        ],
      },
    },
  ],
});
