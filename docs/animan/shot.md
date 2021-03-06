---
title: Shots
menu: Show
---
import Icon from "@material-ui/core/Icon";
import { Screenshot, ScreenshotMark } from "../../src/components/Screenshot"

A Shot is a special type of Resource. The interface and workflow on the Shot page is almost identical to the [Resource](Resource) page.

The Info section of a Shot page contains the animation information, and buttons to edit the Shot and configure the Rendering.

<Screenshot image="/screenshot/shot_info.png">
  <ScreenshotMark x="63%" y="70%" width="15%" height="10%" textPosition="bottom-right" borderRadius="25px">
    Toggle Rendering
  </ScreenshotMark>
  <ScreenshotMark x="50%" y="70%" width="12%" height="10%" textPosition="bottom-left" borderRadius="20px">
    Toggle Active
  </ScreenshotMark>
</Screenshot>

## Active

If the Active toggle is off, the Shot is considered removed from the Episode (users can still see the Shot listed on the Episode page). Also, the Shot will NOT be included in quota calculations, search results, and Render lists.

## Skip Render

When Skip Render is checked, [Renderman](../renderman/intro) will not render this Shot.

## Edit Shot

Click the "Edit Shot" button to change the Animatic, audio, and the length of the animation.

<Screenshot image="/screenshot/shot_info.png">
  <ScreenshotMark x="58%" y="57.5%" width="27%" height="13%" textPosition="bottom-right" borderRadius="10px">
  </ScreenshotMark>
</Screenshot>

When the Edit Shot dialog box appears, you can drop a new .mp4 or .wav file into the corresponding area, as well as adjust the frame numbers. You also have the option to set the frame number to use a specific frame as the Thumbnail.

<Screenshot image="/screenshot/edit_shot.png">
</Screenshot>

Do not forget to click the "Save" button or else you can click outside the dialog box to exit without saving.