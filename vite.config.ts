import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueI18n from '@intlify/vite-plugin-vue-i18n';

// https://vitejs.dev/config/
export default defineConfig({
  alias: {
    'vue-i18n': 'vue-i18n/dist/vue-i18n.runtime.esm-bundler.js',
  },
  plugins: [
    vue(),
    vueI18n({
      include: path.resolve(__dirname, './path/to/src/locales/**'),
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/styles/utilities";
        `,
      },
    },
  },
});
