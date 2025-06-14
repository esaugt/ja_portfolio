import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // Permite imágenes desde cualquier dominio (menos seguro)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    // También puedes usar domains si tienes dominios específicos
    // domains: ['example.com', 'cdn.example.com'],
  },
};

export default nextConfig;
