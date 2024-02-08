/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com', 'source.unsplash.com', 'plus.unsplash.com'],
      },
    async generateStaticParams(defaultPathMap) {
      return {
        '/': { page: '/' },
        '/listado': { page: '/listado' },
      }
    }
};

export default nextConfig;
