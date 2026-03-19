import { defineConfig, fontProviders } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'static',
  adapter: vercel(),
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
  ],
  vite: {
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-dom/client', 'react/jsx-runtime'],
    },
    ssr: {
      noExternal: ['@radix-ui/*'],
    },
  },
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
