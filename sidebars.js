module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Animan',
      items: [
        {
          type: 'doc',
          id: 'intro',
        },
        {
          type: 'category',
          label: 'Members',
          items: [
            'animan/member',
            'animan/quota',
            'animan/member_preference',
          ],
        },
        {
          type: 'category',
          label: 'Shows',
          items: [
            'animan/show',
            'animan/episode',
            'animan/category',
            'animan/resource',
            'animan/shot',
            'animan/episode_progress',
            'animan/render_progress',
          ],
        },
      ]
    },
    {
      type: 'category',
      label: 'Renderman',
      items: [
        'renderman/intro',
        'renderman/upload_cutup',
        'renderman/custom_rendering',
        'renderman/export_show',
      ]
    },
  ],
};
