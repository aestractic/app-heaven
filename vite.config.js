import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    // ...other Vite config
    define: {
      'process.env': env, // This exposes your env variables
    },
  };
});