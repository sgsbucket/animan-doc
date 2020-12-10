module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Animan',
      items: [
        'intro',
        'animan/member',
        {
          type: 'category',
          label: 'Shows',
          items: [
            'animan/show',
            'animan/episode',
            'animan/category',
            'animan/resource',
          ],
        },
      ]
    },
    {
      type: 'category',
      label: 'Renderman',
      items: [
        'renderman/intro'
      ]
    },
  ],
};
