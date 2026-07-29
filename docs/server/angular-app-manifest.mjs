
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 1028, hash: '6bed45547379c910d3f958fc9544e7fe429c98f285982dc6083ab036f37a10ad', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1363, hash: '28a0c05f7942a1412ab19f1165888d1567dabacdbaaddca75c66b04892d5a1c0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-6XP47TV4.css': {size: 134, hash: 'oMEU2SjqfU8', text: () => import('./assets-chunks/styles-6XP47TV4_css.mjs').then(m => m.default)}
  },
};
