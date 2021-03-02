---
title: Shots
menu: show
---
import Icon from "@material-ui/core/Icon";
import { Screenshot, ScreenshotMark } from "../../src/components/Screenshot"

Shots is a special type of resource. The interface and work flow on shot page is almost identical to [resource](/resource) page.

The info section of a shot page contains the animation information and some buttons to edit the shot and config the rendering.

<Screenshot image="/screenshot/shot_info.png">
  <ScreenshotMark x="63%" y="70%" width="15%" height="10%" textPosition="bottom-right" borderRadius="25px">
    Toggle rendering
  </ScreenshotMark>
  <ScreenshotMark x="50%" y="70%" width="12%" height="10%" textPosition="bottom-left" borderRadius="20px">
    Toggle active
  </ScreenshotMark>
</Screenshot>

## Active

If "Active" is off, the shot is considered removed from the episode (you can still see the shot listed on episode page).
When Active is off, the shot will not be included in quota calculation/search result/render list.

## Skip Render

When "Skip Render" is on, [Renderman](../renderman/intro) will not render this shot.

## Edit Shot

Click "Edit Shot" to change the animatic, audio, and the length of the animation.

<Screenshot image="/screenshot/shot_info.png">
  <ScreenshotMark x="58%" y="57.5%" width="27%" height="13%" textPosition="bottom-right" borderRadius="10px">
  </ScreenshotMark>
</Screenshot>

When "Edit Shot" dialog is up, drop a new mp4 or .wav file into the corresponding box, adjust the frame numbers, and click Save button.
Optionally, you can set the frame of thumb to use a specific frame as the thumbnail.

<Screenshot image="/screenshot/edit_shot.png">
</Screenshot>