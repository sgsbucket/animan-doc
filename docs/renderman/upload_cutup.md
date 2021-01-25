---
title: Upload Cutup
---
import Icon from "@material-ui/core/Icon";
import { Screenshot, ScreenshotMark } from "../../src/components/Screenshot"

Cutup is all that begins the flow of an episode on animan.

Upload a cutup will create an episode, the shots of the episode, animatic and audio files of each shot.

## Upload Cutup files

On renderman page, click “Cutup” to open the cutup page.

<Screenshot image="/screenshot/renderman.png">
  <ScreenshotMark x="82.2%" y="18.8%" width="11%" height="9%" textPosition="bottom-left" focusDim="true"></ScreenshotMark>
</Screenshot>

In the Cutup page:

1. Choose a show that this episode belongs to.
1. Choose the xml and mp4/mov of the cutup.
1. Click “Upload” to start
1. Once the process completes, the system will send you an email.

<Screenshot image="/screenshot/renderman_upload_cutup.png">
  <ScreenshotMark x="8%" y="38%" width="15%" height="12%" textPosition="right" borderRadius="10px">Select a show</ScreenshotMark>
  <ScreenshotMark x="8%" y="51%" width="15%" height="12%" textPosition="right" borderRadius="10px">Choose a cutup xml</ScreenshotMark>
  <ScreenshotMark x="8%" y="64%" width="15%" height="12%" textPosition="right" borderRadius="10px">Choose a cutup mov</ScreenshotMark>
  <ScreenshotMark x="4.8%" y="90.7%" width="9%" height="10%" textPosition="right" borderRadius="10px">Click upload when finish</ScreenshotMark>
</Screenshot>


## Options
There are options that you can specify before uploading the cutup

- Split Videos Only

  Check this option will make the process only prepare all the resources of the cutup, including thumbnails, animatic.mp4, audio.wav and json files of all the shots, but it will not be uploaded to server.

  If it useful when diagnosing the cutup and the animatic.

- Allow Custom FPS

  If unchecked, the cutup process will not proceed if the detected FPS of the animatic is neither 23.97 nor 29.97.
