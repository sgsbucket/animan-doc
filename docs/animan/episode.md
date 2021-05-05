---
title: Episodes
---
import Icon from "@material-ui/core/Icon";
import { Screenshot, ScreenshotMark } from "../../src/components/Screenshot"

An Episode contains a sequence of Shots that produce the final broadcast video. You can see the Episodes of a Show by navigating to that Show. The Episodes tab will be activated by default and you can click any Episode number to see that Episode's information and Resources.

## Add Scene Script
:::info
Role: Supervisor

Location: 

- Page: Episode
- Tab: Shots
:::

Supervisors can add the script to a Scene. Animators and other artists can then use it to inform their work.

Click <Icon>menu</Icon> under the desired Scene's label (e.g. Scene 1) and click "Script" to bring up a dialog for editing the script of the scene.

<Screenshot image="/screenshot/episode_shots.png">
  <ScreenshotMark x="8.6%" y="71.5%" width="4.8%" height="8.5%" textPosition="right" borderRadius="50%"></ScreenshotMark>
</Screenshot>

## Insert Shot
:::info
Role: Supervisor

Location: 

- Page: Episode
- Tab: Shots
:::

After Renderman builds an Episode, you can still insert/remove/edit Shots in Animan.
On the Episode page, click the <Icon>more_vert</Icon> button, and select "Insert After <Icon>vertical_align_bottom</Icon>" to open up a dialog box where you can insert a new Shot after the selected Shot.

<Screenshot image="/screenshot/episode_shows_options.png">
  <ScreenshotMark x="45.3%" y="42%" width="6%" height="8.5%" textPosition="right" borderRadius="50%"></ScreenshotMark>
</Screenshot>

To successfully insert a Shot, the dialog box requires three assets:

- The number of total Frames
- An animatic file (.mp4)
- A corresponding audio file (.wav)

Optional: Specify a frame from the video to set it as the thumbnail for the Shot.

<Screenshot image="/screenshot/episode_shows_insert_shot.png">
</Screenshot>

:::tip The name of the Shot
The default name of the new Shot is chosen by Animan. The Shot number used in the new Shot's name is the middle number between the previous Shot and the next Shot.
- E.g. If you insert a Shot after the Shot named E101-1-2-3, the name of the new Shot will likely be E101-1-2-3.5.

You can click <Icon>menu</Icon> icon under the Scene label and select "Normalize Shot Numbers" to rename the Shots of the scene to be more easily readable.

<Screenshot image="/screenshot/episode_shows_normalize_shotnames.png">
    <ScreenshotMark x="12%" y="37.5%" width="9%" height="15%" textPosition="right" borderRadius="50%"></ScreenshotMark>
    <ScreenshotMark x="35%" y="79%" width="52%" height="16%" textPosition="right" borderRadius="10px"></ScreenshotMark>
</Screenshot>
:::

## Edit Shot
:::info
Role: Supervisor

Location: 

- Page: Episode
- Tab: Shots
:::

Editing a Shot is very similar to inserting a Shot. Click "Edit" from the same [three dot icon] button found on the top right of a Shot's thumbnail to bring up the editing dialog box.

<Screenshot image="/screenshot/episode_shows_options.png">
    <ScreenshotMark x="57%" y="51.5%" width="18%" height="10%" textPosition="right" borderRadius="10px"></ScreenshotMark>
</Screenshot>

Here you can change the animatic (.mp4), the audio (.wav), or both.

If either the new .wav or .mp4 has a different length from the original Shot length, you must provide both the animatic (.mp4) and audio (.wav), as well as provide the correct frames number in the ***Frames*** field.

## Quick Assign Worker
:::info
Role: Supervisor

Location: 

- Page: Episode
- Tab: Shots
:::

On the Shots page, check the **Detail** checkbox at the top right of the screen to drop down each Shot's detail box.
<Screenshot image="/screenshot/episode_shots_detail.png">
  <ScreenshotMark x="93.5%" y="24%" width="10%" height="8%" textPosition="right" borderRadius="10px"></ScreenshotMark>
  <ScreenshotMark x="29.2%" y="66%" width="4.6%" height="9%" textPosition="right" borderRadius="50%">
    quick assign worker
  </ScreenshotMark>
</Screenshot>

The Shot's detail box displays all the Stages that need a Member's work. If a Stage does not have a Member assigned, the Supervisor can click the (?) button next to that Stage to quickly assign Member(s).