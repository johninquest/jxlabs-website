// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Site URL (placeholder - update with your actual domain)
  site: 'https://johnxlabs.de',
  
  // Build output directory
  outDir: './dist',
  
  // Disable Astro dev toolbar
  devToolbar: {
    enabled: false
  },
  
  // Font configuration for Google Font Inter
  fonts: [{
    provider: fontProviders.google(),
    name: 'Inter',
    cssVariable: '--font-inter',
    weights: [400, 500, 600, 700],
    styles: ['normal']
  }]
});
