import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:4321",
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": "/src/",
      },
    },
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
  integrations: [
    sitemap({
      // Génère automatiquement le sitemap.xml
      filter: (page) => !page.includes("/admin/"),
    }),
    react(),
  ],
  image: {
    // Permet d'optimiser les images depuis WordPress
    domains: ["starterkit-blog.local"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "starterkit-blog.local",
      },
    ],
  },
  output: "static", // Génération statique pour performance maximale
  build: {
    inlineStylesheets: "auto",
  },
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Figtree",
        cssVariable: "--font-figtree",
      },
    ],
    svgo: true,
  },
});
