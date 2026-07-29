
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 1028, hash: '3b560a22a621cd23a9c476f314d90234511bc58be88052e2d00da8199d76cccc', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1363, hash: 'bd5168be0d904ad57bb9e3c772e40a6c9ccf3a77a742120963991a657aa2286d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-6XP47TV4.css': {size: 134, hash: 'oMEU2SjqfU8', text: () => import('./assets-chunks/styles-6XP47TV4_css.mjs').then(m => m.default)}
  },
};
