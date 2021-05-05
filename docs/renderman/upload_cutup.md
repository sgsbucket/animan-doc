---
title: Upload Cut-up
---
import Icon from "@material-ui/core/Icon";
import { Screenshot, ScreenshotMark } from "../../src/components/Screenshot"

Importing a Cut-up is the process of bringing an episode into Animan.

Upload of a cut-up will create an Episode including all Shots, and Animatics and audio files for each Shot.

## Upload Cut-up files

On the Renderman Page, click “Cut-up” to open the Cut-up Page.

<Screenshot image="/screenshot/renderman.png">
  <ScreenshotMark x="82.2%" y="18.8%" width="11%" height="9%" textPosition="bottom-left" focusDim="true"></ScreenshotMark>
</Screenshot>

In the Cut-up Page:

1. Choose the Show that this Episode belongs to.
1. Choose the xml and mp4/mov of the Cut-up.
1. Click “Upload” to start
1. Once the process completes, the system will send Admins an email

<Screenshot image="/screenshot/renderman_upload_cutup.png">
  <ScreenshotMark x="8%" y="38%" width="15%" height="12%" textPosition="right" borderRadius="10px">Select a show</ScreenshotMark>
  <ScreenshotMark x="8%" y="51%" width="15%" height="12%" textPosition="right" borderRadius="10px">Choose a - xml</ScreenshotMark>
  <ScreenshotMark x="8%" y="64%" width="15%" height="12%" textPosition="right" borderRadius="10px">Choose a cut-up mov</ScreenshotMark>
  <ScreenshotMark x="4.8%" y="92%" width="9%" height="10%" textPosition="right" borderRadius="10px">Click upload when finish</ScreenshotMark>
</Screenshot>


## Options
There are options that Admins can specify before Uploading the Cut-up:

- Split Videos Only

  Checking this option will prepare all the Resources of the Cut-up, including Thumbnails, animatic.mp4, audio.wav and .json files for all the Shots, but it will not be Uploaded to the Animan server.

  If it useful when diagnosing the Cut-up and the Animatic.

- Allow Custom FPS

  If unchecked, the Cut-up process will only  proceed if the detected FPS of the animatic is 23.97 or 29.97.
