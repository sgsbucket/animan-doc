---
title: Episodes
---
import Icon from "@material-ui/core/Icon";
import { Screenshot, ScreenshotMark } from "../../src/components/Screenshot"

An Episode contains a sequence of Shots that produce the final broadcast video.

Episode video is rendered on [Renderman](renderman/intro).

## Add Scene Script
:::info
- Privilege: Supervisor
- Location: (page) episode / (tab) shots
:::

Scene Script is a place where Supervisors may place the script of the scene.  Animators and other artists can use it to inform their work.

Click <Icon>menu</Icon> under the Scene label and click "Script" to bring up a dialog for
editing the script of the scene.

<Screenshot image="/screenshot/episode_shots.png">
  <ScreenshotMark x="8.6%" y="71.5%" width="4.8%" height="8.5%" textPosition="right" borderRadius="50%"></ScreenshotMark>
</Screenshot>

## Insert shot
:::info
- Privilege: Supervisor
- Location: (page) Episode / (tab) Shots
:::

After Renderman builds an Episode, you can still insert/remove/edit shots in Animan.
On the Episode page, click the <Icon>more_vert</Icon> button, and select "Insert After <Icon>vertical_align_bottom</Icon>" to open up a dialog
of inserting a new Shot after the selected Shot.

<Screenshot image="/screenshot/episode_shows_options.png">
  <ScreenshotMark x="45.3%" y="42%" width="6%" height="8.5%" textPosition="right" borderRadius="50%"></ScreenshotMark>
</Screenshot>

The dialog requires:

- **Frames** field
- an animatic.mp4 file
- a corresponding audio.wav file

Optionally, you can specify a frame from the video to be the Thumbnail of the Shot.

<Screenshot image="/screenshot/episode_shows_insert_shot.png">
</Screenshot>

:::tip The name of the Shot
The default name of the new Shot is chosen by the system.
The Shot number in the new Shot's name is the middle number between the previous and the next shot.
- Ex. If you insert a Shot after E101-1-2-3, the name of the new Shot will likely be E101-1-2-3.5

You can click <Icon>menu</Icon> under the Scene label and click "Normalize Shot Numbers" to
rename the shots of the scene be more easily readable.

<Screenshot image="/screenshot/episode_shows_normalize_shotnames.png">
    <ScreenshotMark x="12%" y="37.5%" width="9%" height="15%" textPosition="right" borderRadius="50%"></ScreenshotMark>
    <ScreenshotMark x="35%" y="79%" width="52%" height="16%" textPosition="right" borderRadius="10px"></ScreenshotMark>
</Screenshot>
:::

## Edit shot
:::info
- Privilege: Supervisor
- Location: (page) Episode / (tab) Shots
:::

Edit a Shot is very similar to insert a Shot. Click "Edit" from the same <Icon>more_vert</Icon> button
on a Shot to bring up the dialog.

<Screenshot image="/screenshot/episode_shows_options.png">
    <ScreenshotMark x="57%" y="51.5%" width="18%" height="10%" textPosition="right" borderRadius="10px"></ScreenshotMark>
</Screenshot>

You can change either the animatic.mp4 or audio.wav or both.

If the new wav or mp4 has a different length from the origin shot length, you must provide both animatic.mp4 and audio.wav and
provide the correct frames number in the **Frames** field.

## Quick Assign Worker
:::info
- Privilege: Supervisor
- Location: (page) Episode / (tab) Shots
:::

On the Shots page, toggle **Detail** checkbox to drop down each Shot's detail box.
<Screenshot image="/screenshot/episode_shots_detail.png">
  <ScreenshotMark x="93.5%" y="24%" width="10%" height="8%" textPosition="right" borderRadius="10px"></ScreenshotMark>
  <ScreenshotMark x="29.2%" y="66%" width="4.6%" height="9%" textPosition="right" borderRadius="50%">
    quick assign worker
  </ScreenshotMark>
</Screenshot>

The detail box Shows the Stages that need a Member to work on it. If a Stage does not have Member assigned, the Supervisor
can click the (?) button to quickly assign a Member to the Stage.