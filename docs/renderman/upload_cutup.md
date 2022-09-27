---
title: Upload Cut-Up
---
import Icon from "@material-ui/core/Icon";
import { Screenshot, ScreenshotMark } from "../../src/components/Screenshot"

Importing a Cut-Up begins the process of bringing an Episode into Animan. Uploading a Cut-Up file will create an Episode, including all Shots, Animatics, and audio files for each Shot.

:::note
The video resolution must be set to even numbered pixel counts.  If there is an odd numbered pixel dimension in the X or Y then the render engine will reject the file.
:::

## Uploading Cut-Up files

On the Renderman Page, click "Cut-Up" to open the Cut-Up Page.

<Screenshot image="/screenshot/renderman.png">
  <ScreenshotMark x="82.2%" y="18.8%" width="11%" height="9%" textPosition="bottom-left" focusDim="true"></ScreenshotMark>
</Screenshot>

On the Cut-Up Page:

1. Choose this Episode's Show.
1. Choose the Cut-Up's .xml and .mp4/.mov files.
1. Click the "Upload" button to start.
1. Once the process completes, the system will send all Admin users a confirmation email.

<Screenshot image="/screenshot/renderman_upload_cutup.png">
  <ScreenshotMark x="8%" y="38%" width="15%" height="12%" textPosition="right" borderRadius="10px">Select the Show</ScreenshotMark>
  <ScreenshotMark x="8%" y="51%" width="15%" height="12%" textPosition="right" borderRadius="10px">Choose the Cut-Up's .xml</ScreenshotMark>
  <ScreenshotMark x="8%" y="64%" width="15%" height="12%" textPosition="right" borderRadius="10px">Choose the Cut-Up's .mp4/.mov</ScreenshotMark>
  <ScreenshotMark x="4.8%" y="92%" width="9%" height="10%" textPosition="right" borderRadius="10px">Click "Upload" when finished</ScreenshotMark>
</Screenshot>


## Options
There are options that Admin users can specify before Uploading the Cut-Up:

- Split Videos Only

  Checking this option will prepare all the Resources of the Cut-Up, including Thumbnails, animatic.mp4, audio.wav, and .json files for all the Shots, but the Cut-Up will not be Uploaded to the Animan server. It is useful for diagnosing the Cut-Up and the Animatic.

- Allow Custom FPS

  If unchecked, the Cut-Up process will only proceed if the detected FPS of the animatic is 23.97 or 29.97.


## Linking Episode Types
Sometimes a Show's animation pipeline might require the Episode to be split into a Render and a Composite Episode.  This is normally because of different Animation programs being used.  

### How to link EP 1XX - COMP to EP 1XX - ANIM

#### STEP 1 - Upload & Rename EPs

A) Cut Up Episode / Upload to Animan
B) Rename the episode “1XX - COMP”
- Animan > Psi-Cops > E1XX > Shots > Pencil Icon > Edit Episode > 1XX - COMP > Save
<Screenshot image="/screenshot/renderman_Comp-rename.png">
</Screenshot>

C) Upload the episode again. Repeat (B) but name the episode “1XX - ANIM”
- Note - The default episode Category is ‘Shot’. Leave the COMP episode unchanged as ‘Shot’ category.

#### STEP 2 - Change ANIM Category

A) Change the episode Category on “1XX - ANIM” to “Shot With Animate Render Target”
- Animan > Psi-Cops > E1XX > Shots > Pencil Icon > Edit Episode > Category > Shot With Animate Render Target > Save


#### STEP 3 - Link EPs

A) Go to the COMP version of the episode. Click on any shot.
B) Go to Resources > + (add resource) > Category > Filter to ‘Shot With Animate Render Target’

<Screenshot image="/screenshot/renderman_Comp-RenderTarget.png">
</Screenshot>
- Note - The results will be unwieldy and list every shot in that category for the show (see example below). 

<Screenshot image="/screenshot/renderman_Comp-RenderTarget2.png">
</Screenshot>
- Note - Now, you only get specific 112 search results.

C) Click the + icon to link the ANIM shot to the matching COMP shot

D) Add shot as reference. You will be prompted to automatically link ALL of the ANIM shots to the COMP shots. Select ‘Yes, Link Shots’

<Screenshot image="/screenshot/renderman_Comp-LinkShots.png">
</Screenshot>

<Screenshot image="/screenshot/renderman_Comp-LinkShots2.png">
</Screenshot>

DONE. The episodes are now linked together.