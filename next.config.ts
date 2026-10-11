import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // O CSS do site é pequeno (~7KB): vai num <style> no <head> em vez de 2
    // arquivos que bloqueavam a renderização
    inlineCss: true,
  },
  images: {
    // 90 é usado nas thumbs do portfólio: prints com texto pequeno perdem nitidez em 75
    qualities: [75, 90],
  },
  async headers() {
    return [
      {
        source: '/images/portfolio/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, must-revalidate',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
