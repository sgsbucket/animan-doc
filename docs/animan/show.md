---
title: Shows
---
import Icon from "@material-ui/core/Icon";
import { Screenshot, ScreenshotMark } from "../../src/components/Screenshot"

A Show represents a series of Episodes, collected into Seasons, and includes the many Resources that are used in these Episodes.

Every Resource in Animan belongs to only one Show, but may be used for multiple Episodes within that Show. Resources can reference other Resources, but again only within a single Show.

The hierarchy of the Show/Episode/Resource:

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
Although a Shot is listed under an Episode in the hierarchy above, it is also a Resource, and belongs a special Resource Category: **Shot**.

A Shot page has all the tools that you can find in a Resource page.
:::

## Add New Show
:::info
Role: Admin

Location: 

- Page: Profile
- Tab: Shows
:::

#### Steps
1. Click on "Add New Show" to the right of the page.
1. Enter the name of the Show.
1. Click the "Create" button.

<Screenshot image="/screenshot/create_show.png">
  <ScreenshotMark x="84.5%" y="64%" width="30%" height="18%" textPosition="right" borderRadius="10px"></ScreenshotMark>
</Screenshot>

Once a Show is created, it is assigned a short code. The short code is used in various places on Animan to represent the Show.

To edit the name or the short code of the Show, open the Show's page (for example, from the Profile page's Shows tab), click the triangle button beside the title of the Show, and click the "Edit" button.

<Screenshot image="/screenshot/edit_show_name.png">
  <ScreenshotMark x="23%" y="16%" width="8%" height="12%" textPosition="right" borderRadius="50%"></ScreenshotMark>
  <ScreenshotMark x="33%" y="32%" width="24%" height="15%" textPosition="right" borderRadius="10px"></ScreenshotMark>
</Screenshot>

## Rendering

There are four modes of rendering:

 * **Online**: There is no compression in this mode of rendering of Shots, resulting in final product quality.
 * **Offline**: Similar to online rendering, but the quality is 1080p and meant for test purposes.
 * **Preview**: Generates preview videos of shots.
 * **Thumbnail**: Generates thumbnails of Resources from their original image files.
 
Admin users can turn rendering On or Off for each Episode. When set to On, Renderman will render Online or Offline Shots for production.

:::note
The preview videos on Shot pages and the thumbnails on Resource pages will always render the latest revision, regardless of rendering being turned On or Off.
:::

### Turn Rendering On or Off
:::info
Role: Admin

Location: 

- Page: Profile
- Tab: Shows
:::
1. Click the + button to the left of the desired Show to list all Episodes of the Show.
1. Click the respective checkbox to the right of the desired Episode to turn rendering On or Off.

<Screenshot image="/screenshot/create_show.png">
  <ScreenshotMark x="4.5%" y="75%" width="4%" height="10%" textPosition="right" borderRadius="50%"></ScreenshotMark>
  <ScreenshotMark x="58%" y="85%" width="22%" height="12%" textPosition="top" borderRadius="10px">
    Toggle Online/Offline Rendering
  </ScreenshotMark>
</Screenshot>


### View Rendering Progress
:::info
Role: Member, Supervisor, Admin

Location: 
- Page: Profile
- Tab: Render Progress
:::

The rendering progress can be viewed in the Render Progress tab. Render progress is shown for all four render modes: Online, Offline, Preview and Thumbnail.

Use the "Mode" drop-down menu to specify the rendering mode to view: Offline or Online.

<Screenshot image="/screenshot/show_render_progress.png">
  <ScreenshotMark x="11.5%" y="21%" width="22%" height="15%" textPosition="right" borderRadius="10px">
    Choose mode to view progress.
  </ScreenshotMark>
  <ScreenshotMark x="33.1%" y="32.3%" width="10%" height="9.5%" textPosition="right" borderRadius="8px">
    <div>Shows the progress of an Episode.</div>
    <div>Click to display the progress detail.</div>
  </ScreenshotMark>
  <ScreenshotMark x="50%" y="80%" width="99%" height="36%" textPosition="top" borderRadius="8px">
    List render status of each Shot of the selected Episode.
  </ScreenshotMark>
</Screenshot>

All Episodes that have rendering turned on are listed below the "Mode" drop-down menu. Each Episode has a progress bar for a quick view at its status. Click on the Episode box to list the Shot rendering status for that Episode."

Clicking on the column headings SHOT, TIME, or SIZE will sort the render table by that column's values.


## Show Stats
:::info
Role: Member, Supervisor, Admin

Location: 
- Page: Show
- Tab: Stats
:::
Clicking on the "Stats" tab on a Show's page will display an overview of the progress of all Episodes of the Show.

<Screenshot image="/screenshot/show_stats.png">
</Screenshot>

This page has expandable boxes for each [Resource Category](category). When expanded, these boxes reveal a table where that Resource category is divided by Episode and Resource stage. From this table, you can quickly see how many Resources for this category are in each stage for each Episode.