import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solid()],

  // Any requests to the /api path will be proxied to http://localhost:5000. 
  // For example, if you make an API request to /api/users while running the Vite development server, 
  // it will be forwarded to http://localhost:5000/api/users.
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        // the origin of the host header will be changed to match the target URL when proxying requests. 
        // This is particularly useful in avoiding CORS-related issues when your backend API is on a different domain during development.
        changeOrigin: true,
      }
    }
  }
})
