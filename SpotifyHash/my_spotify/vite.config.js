import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    // Atenção: Isso permite acesso de qualquer host.
    // Use apenas para testes de desenvolvimento.
    allowedHosts:[
      '366ce0483bd3.ngrok-free.app'
    ]
  }
})
