const microApps = [
  {
    name: 'sub-vue',
    entry: import.meta.env.VITE_APP_SUB_VUE_ENTRY,
    activeRule: '/sub-vue'
  },
  {
    name: 'sub-react',
    entry: import.meta.env.VITE_APP_SUB_REACT_ENTRY,
    activeRule: '/sub-react'
  },
];

const apps = microApps.map(item => {
  return {
    ...item,
    container: '#container',
    props: {
      routerBase: item.activeRule
    }
  };
});

export default apps;
