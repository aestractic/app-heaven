import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import plugin from "tailwindcss";

export default defineConfig ({
  plugin: [react()],
  base:'https://aestractic.github.io/app-heaven/'
})

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    // ...other Vite config
    define: {
      'process.env': env, // This exposes your env variables
    },
  };
});