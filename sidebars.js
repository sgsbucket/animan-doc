module.exports = {
  docs: {
    "What it is": ['intro'],
    Animan: [
      'animan/intro',
      'animan/member',
      {
        type: 'category',
        label: 'Shows',
        items: [
          'animan/show',
          'animan/episode',
          'animan/resource',
        ],
      },
    ],
    Renderman: [
      'renderman/intro'
    ],
  },
};
