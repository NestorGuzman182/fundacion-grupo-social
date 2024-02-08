/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com', 'plus.unsplash.com'],
  },
  output: 'export'
  ,

  async generateStaticParams() {
    const staticParams = [
      { params: { id: '1' } },
      { params: { id: '2' } },
    ];

    return staticParams;
  },


};

export default nextConfig;

