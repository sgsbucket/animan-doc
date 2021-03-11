---
title: Shots
menu: show
---
import Icon from "@material-ui/core/Icon";
import { Screenshot, ScreenshotMark } from "../../src/components/Screenshot"

A Shot is a special type of Resource. The interface and work flow on the Shot page is almost identical to [Resource](resource) page.

The info section of a Shot page contains the animation information and some buttons to edit the Shot and configure the Rendering.

<Screenshot image="/screenshot/shot_info.png">
  <ScreenshotMark x="63%" y="70%" width="15%" height="10%" textPosition="bottom-right" borderRadius="25px">
    Toggle Rendering
  </ScreenshotMark>
  <ScreenshotMark x="50%" y="70%" width="12%" height="10%" textPosition="bottom-left" borderRadius="20px">
    Toggle Active
  </ScreenshotMark>
</Screenshot>

## Active

If Active is off, the Shot is considered removed from the Episode. (users can still see the Shot listed on Episode Page).
When Active is off, the Shot will not be included in quota calculations, search results, and Render lists.

## Skip Render

When Skip Render is on, [Renderman](../renderman/intro) will not render this Shot.

## Edit Shot

Click "Edit Shot" to change the Animatic, Audio, and the length of the animation.

<Screenshot image="/screenshot/shot_info.png">
  <ScreenshotMark x="58%" y="57.5%" width="27%" height="13%" textPosition="bottom-right" borderRadius="10px">
  </ScreenshotMark>
</Screenshot>

When the Edit Shot dialog is up, drop a new mp4 or .wav file into the corresponding box, adjust the frame numbers, and click the Save button.
Optionally, you can set the frame number to use a specific frame as the Thumbnail.

<Screenshot image="/screenshot/edit_shot.png">
</Screenshot>