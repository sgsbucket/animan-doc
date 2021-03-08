---
title: Shows
---
import Icon from "@material-ui/core/Icon";
import { Screenshot, ScreenshotMark } from "../../src/components/Screenshot"

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

<Screenshot image="/screenshot/create_show.png">
  <ScreenshotMark x="84.5%" y="64%" width="30%" height="18%" textPosition="right" borderRadius="10px"></ScreenshotMark>
</Screenshot>

Once the show is created, it is assigned a short code. The short code is used in various place to represent the show, eg: the url of the pages that is related to the show

To edit the name or the short code of the show, open the show’s page, (click a show from (page) profile/(tab) shows), click the triangle button beside the title of the show, and click “Edit” button.

<Screenshot image="/screenshot/edit_show_name.png">
  <ScreenshotMark x="23%" y="16%" width="8%" height="12%" textPosition="right" borderRadius="50%"></ScreenshotMark>
  <ScreenshotMark x="33%" y="32%" width="24%" height="15%" textPosition="right" borderRadius="10px"></ScreenshotMark>
</Screenshot>

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

<Screenshot image="/screenshot/create_show.png">
  <ScreenshotMark x="4.5%" y="75%" width="4%" height="10%" textPosition="right" borderRadius="50%"></ScreenshotMark>
  <ScreenshotMark x="58%" y="85%" width="22%" height="12%" textPosition="top" borderRadius="10px">
    Toggle Online/Offline Rendering
  </ScreenshotMark>
</Screenshot>


### View rendering progress
:::info
- Location: (page) Profile / (tab) Render Progress
:::
The rendering progress can be viewed in this tab.

Use the “Mode” dropdown menu to specify the rendering mode to view (offline or online).

<Screenshot image="/screenshot/show_render_progress.png">
  <ScreenshotMark x="11.5%" y="21%" width="22%" height="15%" textPosition="right" borderRadius="10px">
    Choose mode to view progress
  </ScreenshotMark>
  <ScreenshotMark x="33.1%" y="32.3%" width="10%" height="9.5%" textPosition="right" borderRadius="8px">
    <div>Shows the progress of an episode</div>
    <div>Click to show the progress detail</div>
  </ScreenshotMark>
  <ScreenshotMark x="50%" y="80%" width="99%" height="36%" textPosition="top" borderRadius="8px">
    List render status of each shot of the selected episode.
  </ScreenshotMark>
</Screenshot>

All episodes that is turned on are shown on the top of the tab, and each episode has a progress bar to quick view. Click on the episode box to list the shot rendering status of the episode.

Click on SHOT/TIME/SIZE of the list to view the shots in different order.

The progress support 4 modes:

 * **Online mode**: no-compression quality rendering of shots that is used for final product.
 * **Offline mode**: similar to online rendering, but the quality is 1080p for test purpose.
 * **Preview mode**: preview mode are the preview movies of shots.
 * **Thumbnail mode**: thumbnails of the resources of psd and similar image resources.

## Show Stats
:::info
- Location: (page) Show / (tab) Stats
:::

This page shows an overview of the progress of all episode in a show.

<Screenshot image="/screenshot/show_stats.png">
</Screenshot>

The page shows a list of boxes, each box represents a [Resource Category](category) in the show.

Each Resource Category box shows a grid, each grid shows the number of resources (or shots) in a episode that is currently in a stage.