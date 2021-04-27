---
title: Custom Rendering
---
import Icon from "@material-ui/core/Icon";
import { Screenshot, ScreenshotMark } from "../../src/components/Screenshot"

This function allows Users to render a series of Shots into one video.

## Start a Custom Render

On the Renderman Page, click the "Custom Render" button to open the Rendering Page.

<Screenshot image="/screenshot/renderman.png">
  <ScreenshotMark x="71.2%" y="18.8%" width="18%" height="9%" textPosition="bottom-left" focusDim="true"></ScreenshotMark>
</Screenshot>

On the Custom Render page

1. Choose a Show from the drop-down menu.
1. Select an Episode or instead pick an Act, Scene, or a Shot to include less shots.
1. Click the "Start Render" button.

<Screenshot image="/screenshot/renderman_custom_render.png">
  <ScreenshotMark x="27%" y="75%" width="32%" height="10%" borderRadius="10px" textPosition="bottom-right">
   The amount of Shots included in this custom render.
  </ScreenshotMark>
</Screenshot>

## Render Options

When only one Shot is included in the custom rendering, there is an extra option available:

#### Codec

There are four options in the Codec drop-down menu that change the quality of the render:

1. Preview
   
   Generates preview videos of shots.

1. Online
   
   There is no compression in this mode of rendering of shots, resulting in final product quality.

1. Offline
   
   Similar to online rendering, but the quality is 1080p and meant for test purposes.


1. Apha Channel
   
   Online quality with Alpha Channel for later compositing.


## Render Result

When the Custom Render starts, the main page will add a new process for this render. Once rendering is complete, a "Download" button will appear in order to Download the video to the location of your choice.

<Screenshot image="/screenshot/renderman_custom_render_result.png">
</Screenshot>
