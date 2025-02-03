/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.weatherbit.io",
                port: "",
                pathname: "/static/img/icons/**",
                search: ""
            }
        ]
        
    }
};

export default nextConfig;
