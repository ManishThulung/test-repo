/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["antd"],
  images: {
    // causing build issue
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "flagcdn.com",
    //     port: "",
    //     pathname: "",
    //   },
    // ],
    loader: "akamai",
    path: "",
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  
};

module.exports = nextConfig;
