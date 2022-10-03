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

## Shot Codec

Admins can set codec details of the shot category.

<Screenshot image="/screenshot/resource_category_Codec.png">
  <ScreenshotMark x="97.5%" y="66.5%" width="5%" height="10%" textPosition="bottom-left" borderRadius="25px">
    Edit Online Codec
  </ScreenshotMark>
</Screenshot>

## Shot External ID

For situations where Shot ID may be dictated by the nomenclature of a 3rd party studio, Shots may have an External ID set.  It is an additional unique identifier for a shot.

<Screenshot image="/screenshot/shot_external_ID.png">
  <ScreenshotMark x="44%" y="6%" width="12%" height="5%" textPosition="bottom" borderRadius="25px">
    External ID
  </ScreenshotMark>
  <ScreenshotMark x="67%" y="39%" width="13%" height="5%" textPosition="bottom" borderRadius="25px">
  </ScreenshotMark>  
</Screenshot>

Files may be exported using the External ID or Shot ID.



## Shot Render Errors

Render error notes are generated when Renderman has a problem creating rendering a Shot. To see details, turn on System Notes and hover over the render error.


<Screenshot image="/screenshot/show_render_errors.png">
  <ScreenshotMark x="95%" y="64.6%" width="8%" height="5%" textPosition="bottom-right" borderRadius="10px">
  </ScreenshotMark>
  <ScreenshotMark x="50%" y="93%" width="20%" height="7%" textPosition="bottom-right" borderRadius="10px">
  </ScreenshotMark>
</Screenshot>