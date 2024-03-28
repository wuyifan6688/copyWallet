/** @type {import('next').NextConfig} */
const nextConfig = {
    //note 配置永久重定向
    async redirects() {
        return [
            {
                source: '/',
                destination: '/test',
                permanent: true,
            },
        ]
    }, images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.icons8.com',
                port: '',
                pathname: '**',
            },
        ],
    },
};

export default nextConfig;
