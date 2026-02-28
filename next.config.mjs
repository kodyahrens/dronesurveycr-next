/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      { source: "/", destination: "/index.html" },
      { source: "/index.php", destination: "/index.html" },
      { source: "/services", destination: "/services.html" },
      { source: "/services/", destination: "/services.html" },
      { source: "/quote", destination: "/quote.html" },
      { source: "/quote/", destination: "/quote.html" },
      {
        source: "/services/geopositioning",
        destination: "/services/geopositioning.html"
      },
      {
        source: "/services/geopositioning/",
        destination: "/services/geopositioning.html"
      },
      {
        source: "/services/lidar-mapping",
        destination: "/services/lidar-mapping.html"
      },
      {
        source: "/services/lidar-mapping/",
        destination: "/services/lidar-mapping.html"
      },
      {
        source: "/services/photogrammetry",
        destination: "/services/photogrammetry.html"
      },
      {
        source: "/services/photogrammetry/",
        destination: "/services/photogrammetry.html"
      }
    ];
  }
};

export default nextConfig;
