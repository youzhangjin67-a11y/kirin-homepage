import { defineConfig } from 'astro/config';

// GitHub Pages 预览部署在 /kirin-homepage/ 子路径下
// 正式部署到 www.wuxuanqilin.top 根路径时，把 base 改回 '/' 并把 site 保留
export default defineConfig({
  site: 'https://youzhangjin67-a11y.github.io',
  base: '/kirin-homepage',
});
