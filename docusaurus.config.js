module.exports = {
  title: 'Animan Doc',
  tagline: 'animation studio management',
  url: 'https://github.com/sgsbucket/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Smiley Guy Studios', // Usually your GitHub org/user name.
  projectName: 'animan-doc', // Usually your repo name.
  themeConfig: {
    algolia: {
      apiKey: '6a8c81d6910f37bf36ba316f18f36477',
      indexName: 'animan-doc',
      contextualSearch: true,
    },
    navbar: {
      title: 'Animan Doc',
      logo: {
        alt: 'Animan Document',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'https://animan.smileyguystudios.com',
          activeBasePath: 'docs',
          label: 'Open Animan',
          position: 'left',
        },
        {
          href: 'https://github.com/sgsbucket/animan-doc',
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
              label: 'Animan',
              type: 'doc',
              to: '/',
            },
            {
              label: 'Renderman',
              to: 'renderman/intro',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Smiley Guy Studios',
              href: 'https://smileyguystudios.com/',
            },
            {
              label: 'Animan App',
              href: 'https://animan.smileyguystudios.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Smiley Guy Studios. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          editUrl:
            'https://github.com/sgsbucket/animan-doc/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  stylesheets: [
    'https://fonts.googleapis.com/icon?family=Material+Icons',
  ]
};
