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
            'animan/member_group',
          ],
        },
        {
          type: 'category',
          label: 'Shows',
          items: [
            'animan/show',
            'animan/episode',
            'animan/resource',
            'animan/resource_tools',
            'animan/category',
            'animan/shot',
            'animan/episode_progress',
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
        'renderman/export_shots',
      ]
    },
    {
      type: 'category',
      label: 'FAQ',
      items: [
        'faq/why_checkout_is_important',
        'faq/what_happens_with_revisions',
        'faq/did_not_get_invitatin_email',
        'faq/change_resource_thumbnail',
        'faq/insert_shot_into_a_scene',
        'faq/what_happens_to_audio_in_a_shot',
        'faq/xstage_use_embed_audio',
      ],
    },
  ],
};
