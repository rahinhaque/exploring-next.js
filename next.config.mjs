/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      // {
      //   protocol: "https",
      //   hostname: "img.freepik.com",
      //   port: "",
      //   pathname: "**",
      // },
      // {
      //   protocol: "https",
      //   hostname: "png.pngtree.com",
      //   port: "",
      //   pathname: "**",
      // },
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
