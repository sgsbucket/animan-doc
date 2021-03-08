---
title: Custom Rendering
---
import Icon from "@material-ui/core/Icon";
import { Screenshot, ScreenshotMark } from "../../src/components/Screenshot"

This function allows you to make a render of a series of shots into one movie.

## Start a custom render

On renderman page, click “Custom Render” to open the rendering page.

<Screenshot image="/screenshot/renderman.png">
  <ScreenshotMark x="71.2%" y="18.8%" width="18%" height="9%" textPosition="bottom-left" focusDim="true"></ScreenshotMark>
</Screenshot>

On the Custom Render page

1. Choose a show from the dropdown menu.
1. Select an episode
1. You can optionally pick an Act, a Scene, a Shot to include less shots
1. Click “Start Render”

<Screenshot image="/screenshot/renderman_custom_render.png">
  <ScreenshotMark x="27%" y="75%" width="32%" height="10%" borderRadius="10px" textPosition="bottom-right">
   Shows how many shots are included in this custom rendering
  </ScreenshotMark>
</Screenshot>

## Render Options

When only one shot is included in the custom rendering, there is an extra option available:

#### Codec

There are 4 options to choose from:

1. Preview
   
   The preview quality 

1. Offline
   
   The offline quality 

1. Online
   
   The online quality 

1. Apha Channel
   
   The online quality with alpha channel


## Render Result

When the custom render starts, the main page will add a new process for this custom renderer.
Once the rendering complete, a download button will be available to download the movie to the location of your choice.

<Screenshot image="/screenshot/renderman_custom_render_result.png">
</Screenshot>
