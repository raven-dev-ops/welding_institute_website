/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  experimental: {
    allowedDevOrigins: [
      "https://3000-firebase-tradeschoolwebsite-1752350821054.cluster-vyr53kd25jc2yvngldrwyq6zc4.cloudworkstations.dev",
    ],
  },
};
