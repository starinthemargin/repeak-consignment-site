import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.repeakconsignment.com',
  integrations: [sitemap()],
  // Old Wix addresses, so existing links and search results still land somewhere useful.
  redirects: {
    '/services-3': '/brands/',
    '/wait-list': '/consign-with-us/',
    '/book-online': '/consign-with-us/',
    '/contact': '/consign-with-us/',
    '/service-page/consignment-intake-new-client': '/consign-with-us/',
    '/service-page/existing-client-drop-go': '/consign-with-us/',
    '/english-refund-policy': '/',
  },
});
