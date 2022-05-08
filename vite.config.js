import path from 'path'
import WindiCSS from 'vite-plugin-windicss'

export default {
  base:
    process.env === 'production' ? '/threejs_vitejs_windicss_starter/' : '/',

  publicDir: true,

  plugins: [WindiCSS()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
}
