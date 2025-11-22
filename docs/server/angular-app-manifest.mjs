
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://lukeserafin.com',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 674, hash: 'b60f59e05d40618ef0e30df6c56f2421ce35630e0ca199fcfdbd346000d1618b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1031, hash: '7fba8d18822c0492ba3911e899a3a79ae8c191f269e0af4f5b68ac52eab483a6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-6XP47TV4.css': {size: 134, hash: 'oMEU2SjqfU8', text: () => import('./assets-chunks/styles-6XP47TV4_css.mjs').then(m => m.default)}
  },
};
