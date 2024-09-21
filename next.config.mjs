/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // github Pages の本番リリース時に独自ドメインを使う場合、ディレクトリが減るので意図的に減らす必要あり(package.json側も修正)
  assetPrefix: process.env.NODE_ENV === "production" ? "/project_name" : "",
};

export default nextConfig;
