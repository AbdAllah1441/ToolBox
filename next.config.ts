import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
};

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
