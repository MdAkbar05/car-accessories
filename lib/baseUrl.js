const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL ||
  process.env.NEXT_PUBLIC_DEPLOY_DOMAIN ||
  "http://localhost:3000";

export default baseUrl;
