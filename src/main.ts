import { createApp } from 'vue';
import { registerMicroApps, start } from 'qiankun';
import './style.scss';
import App from './App.vue';

createApp(App).mount('#app');

registerMicroApps([
  {
    name: 'reactApp',
    entry: '//localhost:3000',
    container: '#container',
    activeRule: '/app-react',
  },
  {
    name: 'vueApp',
    entry: '//localhost:8080',
    container: '#container',
    activeRule: '/app-vue',
  }
]);

start();
