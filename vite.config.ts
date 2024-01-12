import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import devtools from 'solid-devtools/vite'

export default defineConfig({
  plugins: [
    // NOTE: support solidjs dev tool
    // Reference: https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#getting-started
    devtools({
      /* features options - all disabled by default */
      autoname: true, // e.g. enable autoname
    }),
    solid()
  ],

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
