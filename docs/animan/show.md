---
title: Shows
---

A show represents a series of episodes, broken into seasons, and the many resources that are used to produce the episodes.

Every resource in animan belongs to ONE show and may be used for multiple seasons and episodes. Resoures reference each other.

The hierachy of the resource structure is described below:

```
show
├── resource category
│   └── resource
│       └── file
└── season
    └── episode
        └── shot
            ├── fla/xstage
            ├── audio
            └── animatic
```
:::note
Although a shot is listed under an episode in the graph above, it is also a resource, and belongs a special resource category, **Shot**.

A shot page has all tools that you can find in a resource page.
:::

## Add new show
:::info
- Privilege required: admin
- Location: (page) Profile / (tab) Shows
:::

#### Steps
1. Click “Add new Show” on the right of the page.
1. Enter the name of the show
1. Click “Create”

Once the show is created, it is assigned a short code. The short code is used in various place to represent the show, eg: the url of the pages that is related to the show

To edit the name or the short code of the show, open the show’s page, (click a show from (page) profile/(tab) shows), click the triangle button beside the title of the show, and click “Edit” button.

## Rendering

Admin can turn rendering on or off to trigger Renderman to render shots for production. The rendering progress can be viewed on animan.

:::note
The preview of shots does not need the trigger to render. Renderman is constantly looking for new revisions of resources to render previews.
:::

### Turn rendering on/off
:::info
- Privilege required: admin
- Location: (page) Profile / (tab) Shows
:::
1. Click “+” button on the right of the desire show to list all episodes of the show.
1. Click the checkboxes on the right of the desire episode to turn rendering on/off.

### View rendering progress
:::info
- Location: (page) Profile / (tab) Shows
:::
The rendering progress can be viewed in this tab.

Use the “Mode” dropdown menu to specify the rendering mode to view (offline or online).

All episodes that is turned on are shown on the top of the tab, and each episode has a progress bar to quick view. Click on the episode box to list the shot rendering status of the episode.

Click on SHOT/TIME/SIZE of the list to view the shots in different order.
