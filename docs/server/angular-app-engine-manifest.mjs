
export default {
  basePath: 'https://www.lukeserafin.com',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
