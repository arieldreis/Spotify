import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    // Atenção: Isso permite acesso de qualquer host.
    // Use apenas para testes de desenvolvimento.
    allowedHosts:[
      '031dec8dfa8d.ngrok-free.app'
    ]
  }
})
