---
title: I don't like the auto generated thumbnail that shows up for an asset.  Can I change it?
---
import Icon from "@material-ui/core/Icon";
import { Screenshot, ScreenshotMark } from "../../src/components/Screenshot"

There is two ways to change the thumbnail of a resource.

 1. [Assign a frame of a animation shot](#assign-a-frame-of-a-animation-shot)
 2. [Upload an image as the thumbnail](#upload-an-image-as-the-thumbnail)

## Assign a frame of a animation shot

* This works only for animation shot.

Open the shot page, then

1. click "Edit Shot" button
2. change "The frame of thumb"
3. click "Save".

You can preview the thumbnail before saving.

<Screenshot image="/screenshot/resource_edit_thumb_frame.png">
  <ScreenshotMark x="42%" y="32%" width="18%" height="6%" textPosition="bottom" borderRadius="10px">
  1
  </ScreenshotMark>
  <ScreenshotMark x="84%" y="31.8%" width="18%" height="10%" textPosition="bottom" borderRadius="10px">
  2
  </ScreenshotMark>
  <ScreenshotMark x="89.5%" y="87.6%" width="11%" height="8%" textPosition="bottom" borderRadius="10px">
  3
  </ScreenshotMark>
</Screenshot>


## Upload an image as the thumbnail

Open the resource page, then

1. Check out the resource
2. Upload an image to "animatic.gif"
3. Check in the reousrce

You can upload any web image format, like png, jpg, gif, etc..
The resource will take any image uploaded to the "animatic.gif" as its thumbnail.

<Screenshot image="/screenshot/resource_file_section.png">
  <ScreenshotMark x="16.2%" y="49%" width="31%" height="35%" textPosition="bottom" borderRadius="10px">
  </ScreenshotMark>
</Screenshot>