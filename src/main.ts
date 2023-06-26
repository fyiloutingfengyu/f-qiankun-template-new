import { createApp } from 'vue';
import { registerMicroApps, start, setDefaultMountApp } from 'qiankun';
import './style.scss';
import App from './App.vue';
import microApps from './micro-apps-config.ts';

createApp(App).mount('#app');

registerMicroApps(microApps, {
    beforeLoad: (app) => {
      console.log('beforeLoad', app);
      return Promise.resolve();
    },
  }
);

setDefaultMountApp('/sub-vue');

start();
