module.exports = {
  title: 'Bitcoin Improvement Proposals ',
  tagline: 'Index of all proposals',
  url: '',
  baseUrl: '/',
  favicon: 'https://github.com/bitcoin.png',
  organizationName: 'Bitcoin', // Usually your GitHub org/user name.
  projectName: 'BIPS', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'BIPS',
      logo: {
        alt: 'BIPS Logo',
        src: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg',
      },
      links: [
        {
          to: 'docs/doc0',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        // { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/bitcoin/bips',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/doc0',
            },
            // {
            //   label: 'Second Doc',
            //   to: 'docs/doc2',
            // },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/bitcoin',
            },
            {
              label: 'Official Website',
              href: 'https://bitcoin.org/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            // {
            //   label: 'Blog',
            //   to: 'blog',
            // },
            {
              label: 'GitHub',
              href: 'https://github.com/bitcoin/bips',
            },
          ],
        },
      ],
      copyright: `Created For the 💙 of Bitcoin`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};