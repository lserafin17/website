
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://www.lukeserafin.com',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 678, hash: 'b3a6a967a0db9a3a0fc9506032e2027e6044d0d79c7df4a600c1a8c463ab71a5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1035, hash: '62727d502dc5139a22809caa06320af39fd62f10bbe70b20aecb49ce01500407', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-6XP47TV4.css': {size: 134, hash: 'oMEU2SjqfU8', text: () => import('./assets-chunks/styles-6XP47TV4_css.mjs').then(m => m.default)}
  },
};
