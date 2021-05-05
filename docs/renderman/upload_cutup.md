---
title: Upload Cut-up
---
import Icon from "@material-ui/core/Icon";
import { Screenshot, ScreenshotMark } from "../../src/components/Screenshot"

Importing a Cut-up begins the process of bringing an Episode into Animan. Uploading a Cut-up file will create an Episode, including all Shots, Animatics, and audio files for each Shot.

## Uploading Cut-up files

On the Renderman Page, click "Cut-up" to open the Cut-up Page.

<Screenshot image="/screenshot/renderman.png">
  <ScreenshotMark x="82.2%" y="18.8%" width="11%" height="9%" textPosition="bottom-left" focusDim="true"></ScreenshotMark>
</Screenshot>

On the Cut-up Page:

1. Choose this Episode's Show.
1. Choose the Cut-up's .xml and .mp4/.mov files.
1. Click the "Upload" button to start.
1. Once the process completes, the system will send all Admin users a confirmation email.

<Screenshot image="/screenshot/renderman_upload_cutup.png">
  <ScreenshotMark x="8%" y="38%" width="15%" height="12%" textPosition="right" borderRadius="10px">Select the Show</ScreenshotMark>
  <ScreenshotMark x="8%" y="51%" width="15%" height="12%" textPosition="right" borderRadius="10px">Choose the Cut-up's .xml</ScreenshotMark>
  <ScreenshotMark x="8%" y="64%" width="15%" height="12%" textPosition="right" borderRadius="10px">Choose the Cut-up's .mp4/.mov</ScreenshotMark>
  <ScreenshotMark x="4.8%" y="92%" width="9%" height="10%" textPosition="right" borderRadius="10px">Click "Upload" when finished</ScreenshotMark>
</Screenshot>


## Options
There are options that Admin users can specify before Uploading the Cut-up:

- Split Videos Only

  Checking this option will prepare all the Resources of the Cut-up, including Thumbnails, animatic.mp4, audio.wav, and .json files for all the Shots, but the Cut-up will not be Uploaded to the Animan server. It is useful for diagnosing the Cut-up and the Animatic.

- Allow Custom FPS

  If unchecked, the Cut-up process will only proceed if the detected FPS of the animatic is 23.97 or 29.97.
