import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    reactCompiler: true,
    allowedDevOrigins: ["127.0.0.1", "localhost"],

    // SEO: Disable trailing slashes to prevent redirect issues
    // This fixes "Page with redirect" errors in Google Search Console
    trailingSlash: false,

    images: {
          remotePatterns: [
            {
                      protocol: "https",
                      hostname: "image.thum.io",
            },
            {
                      protocol: "https",
                      hostname: "storage.googleapis.com",
            },
                ],
    },
};

export default nextConfig;
