
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 1028, hash: '78191424bf64c31041ba2673be296acdbd5994c77b111f695a906b6e4ec17d6e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1363, hash: '08a1a1b1e2c9fd7e2c38a5e33b1e3b323b1edbcf5963520e83faabae5cb38975', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-6XP47TV4.css': {size: 134, hash: 'oMEU2SjqfU8', text: () => import('./assets-chunks/styles-6XP47TV4_css.mjs').then(m => m.default)}
  },
};
