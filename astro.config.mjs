import { defineConfig } from 'astro/config';

// GitHub Pages 预览部署在 /kirin-homepage/ 子路径下
// 宝塔主站（www.wuxuanqilin.top）部署在根路径：BASE_PATH=/ npm run build
export default defineConfig({
  site: 'https://youzhangjin67-a11y.github.io',
  base: process.env.BASE_PATH ?? '/kirin-homepage',
});
