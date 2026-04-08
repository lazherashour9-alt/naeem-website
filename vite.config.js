import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/naeem-website/', // replace with your repo name
  plugins: [react()],
});