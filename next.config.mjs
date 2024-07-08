/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/',
                destination: '/app/home',
            },
        ];
    },
};

export default nextConfig;
