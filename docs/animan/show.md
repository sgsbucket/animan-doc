---
title: Shows
---
import Icon from "@material-ui/core/Icon";
import { Screenshot, ScreenshotMark } from "../../src/components/Screenshot"

A Show represents a series of Episodes, broken into Seasons, and the many Resources that are used to produce the Episodes.

Every Resource in Animan belongs to ONE show and may be used for multiple Seasons and Episodes. Resoures reference each other.

The hierachy of the Resource structure is described below:

```
Show
├── Resource Category
│   └── Resource
│       └── File
└── Season
    └── Episode
        └── Shot
            ├── .fla / .xstage
            ├── audio
            └── animatic
```
:::note
Although a Shot is listed under an Episode in the hierachy above, it is also a Resource, and belongs a special Resource Category, **Shot**.

A Shot page has all tools that you can find in a Resource page.
:::

## Add New Show
:::info
- Privilege required: admin
- Location: (page) Profile / (tab) Shows
:::

#### Steps
1. Click “Add new Show” on the right of the page.
1. Enter the name of the Show
1. Click “Create”

<Screenshot image="/screenshot/create_show.png">
  <ScreenshotMark x="84.5%" y="64%" width="30%" height="18%" textPosition="right" borderRadius="10px"></ScreenshotMark>
</Screenshot>

Once the Show is created, it is assigned a short code. The short code is used in various places to represent the Show.  It is the url related to the Show.

To edit the name or the short code of the Show, open the Show’s page, (click a Show from (page) profile/(tab) Shows), click the triangle button beside the title of the Show, and click “Edit” button.

<Screenshot image="/screenshot/edit_show_name.png">
  <ScreenshotMark x="23%" y="16%" width="8%" height="12%" textPosition="right" borderRadius="50%"></ScreenshotMark>
  <ScreenshotMark x="33%" y="32%" width="24%" height="15%" textPosition="right" borderRadius="10px"></ScreenshotMark>
</Screenshot>

## Rendering

Admins can turn rendering On or Off per Episode. On triggers Renderman to render online or offline Shots for production. The rendering progress can be viewed on Animan.

:::note
Preview videos on Shot pages and thumbnails on any Resource page will always render.  Renderman is constantly looking for new revisions of resources to render.
:::

### Turn Rendering On or Off
:::info
- Privilege required: Admin
- Location: (page) Profile / (tab) Shows
:::
1. Click “+” button on the right of the desire Show to list all Episodes of the Show.
1. Click the checkboxes on the right of the desire Episode to turn rendering On or Off.

<Screenshot image="/screenshot/create_show.png">
  <ScreenshotMark x="4.5%" y="75%" width="4%" height="10%" textPosition="right" borderRadius="50%"></ScreenshotMark>
  <ScreenshotMark x="58%" y="85%" width="22%" height="12%" textPosition="top" borderRadius="10px">
    Toggle Online/Offline Rendering
  </ScreenshotMark>
</Screenshot>


### View Rendering Progress
:::info
- Location: (page) Profile / (tab) Render Progress
:::
The rendering progress can be viewed in this tab.

Use the “Mode” dropdown menu to specify the rendering mode to view (Offline or Online).

<Screenshot image="/screenshot/show_render_progress.png">
  <ScreenshotMark x="11.5%" y="21%" width="22%" height="15%" textPosition="right" borderRadius="10px">
    Choose mode to view progress.
  </ScreenshotMark>
  <ScreenshotMark x="33.1%" y="32.3%" width="10%" height="9.5%" textPosition="right" borderRadius="8px">
    <div>Shows the progress of an Episode.</div>
    <div>Click to show the progress detail.</div>
  </ScreenshotMark>
  <ScreenshotMark x="50%" y="80%" width="99%" height="36%" textPosition="top" borderRadius="8px">
    List render status of each Shot of the selected Episode.
  </ScreenshotMark>
</Screenshot>

All Episodes that are turned on are shown on the top of the tab, and each Episode has a progress bar for a quick status view. Click on the Episode box to list the Shot rendering status of the Episode.

Click on the titles SHOT/TIME/SIZE to sort the view.

Render progress supports 4 render modes:

 * **Online mode**: no-compression quality rendering of shots that is used for final product.
 * **Offline mode**: similar to online rendering, but the quality is 1080p for test purpose.
 * **Preview mode**: preview mode are the preview movies of shots.
 * **Thumbnail mode**: thumbnails of the resources from psd and similar image files.

## Show Stats
:::info
- Location: (page) Show / (tab) Stats
:::

This page shows an overview of the progress of all Episode of a Show.

<Screenshot image="/screenshot/show_stats.png">
</Screenshot>

The page shows a list of boxes, each box represents a [Resource Category](category) in the show.

Each Resource Category box shows a grid, each grid shows the number of resources (or shots) in a episode that is currently in a stage.