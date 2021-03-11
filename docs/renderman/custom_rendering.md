---
title: Custom Rendering
---
import Icon from "@material-ui/core/Icon";
import { Screenshot, ScreenshotMark } from "../../src/components/Screenshot"

This function allows Users to Render series of Shots into one movie.

## Start a Custom Render

On the Renderman page, click “Custom Render” to open the Rendering page.

<Screenshot image="/screenshot/renderman.png">
  <ScreenshotMark x="71.2%" y="18.8%" width="18%" height="9%" textPosition="bottom-left" focusDim="true"></ScreenshotMark>
</Screenshot>

On the Custom Render page

1. Choose a Show from the dropdown menu.
1. Select an Episode
1. Optionally pick an Act, Scene, or a Shot to include less shots
1. Click “Start Render”

<Screenshot image="/screenshot/renderman_custom_render.png">
  <ScreenshotMark x="27%" y="75%" width="32%" height="10%" borderRadius="10px" textPosition="bottom-right">
   Shows how many Shots are included in this custom Rendering
  </ScreenshotMark>
</Screenshot>

## Render Options

When only one Shot is included in the custom rendering, there is an extra option available:

#### Codec

There are 4 options to choose from:

1. Preview
   
   The Preview quality 

1. Offline
   
   The Offline quality 

1. Online
   
   The Online quality 

1. Apha Channel
   
   The online quality with Alpha Channel for later compositing.


## Render Result

When the Custom Render starts, the main page will add a new process for this Custom Renderer.
Once Rendering has completed, a Download button will be available to Download the movie to the location of your choice.

<Screenshot image="/screenshot/renderman_custom_render_result.png">
</Screenshot>
