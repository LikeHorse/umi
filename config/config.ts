import { defineConfig } from 'umi';
import routes from './routes';
import defaultLayoutConfig from './defaultLayoutSettings';

export default defineConfig({
  layout: defaultLayoutConfig,
  routes,
  hash: true,
});
