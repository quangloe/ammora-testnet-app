import { defineConfig } from "vite";

// Trình duyệt bị CORS chặn khi gọi thẳng Data API của Ammora từ localhost.
// Vite dev server sẽ gọi hộ (server-to-server nên không bị CORS).
export default defineConfig({
  server: {
    proxy: {
      "/ammora-api": {
        target: "https://ammora-giwa-sepolia-data.fly.dev",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/ammora-api/, ""),
      },
    },
  },
});
