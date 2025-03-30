import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    strictPort: true,
    port: 5173,
  },
  preview: {
    port: process.env.PORT ? Number(process.env.PORT) : 4173, // Ensure the preview server uses the correct port
    allowedHosts: ["todolist-vkng.onrender.com"], // Allow your Render domain
  },
})