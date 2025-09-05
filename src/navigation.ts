import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: '首頁',
      href: getPermalink('/'),
    },
    {
      text: '關於我',
      href: getPermalink('/about'),
    },
    {
      text: '文章分類',
      href: getPermalink('/tags'),
    },
    // 如果您有作品集，可以取消註解下面這段
    // {
    //   text: '我的作品',
    //   href: getPermalink('/projects'),
    // },
  ],
  actions: [],
};

export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/internet_zanya/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/zanyaowo' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://github.com/arthelokyo">Arthelokyo</a> · All rights reserved.
  `,
};
