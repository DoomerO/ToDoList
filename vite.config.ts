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
    allowedHosts: ["todolist-vkng.onrender.com"], // Allow your Render domain
  },
})