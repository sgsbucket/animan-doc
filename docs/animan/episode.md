---
title: Episodes
---
import Icon from "@material-ui/core/Icon";

An episode contains a series of shots that produces the final movie of the episode.

Episode can only be generated on [Renderman](renderman/intro).

## Add Scene Script
:::info
- Privilege: supervisor
- Location: (page) episode / (tab) shots
:::

Scene Script is useful for animators to understand... (actually I dont know what it is used for.)

Click <Icon>menu</Icon> under the Scene label and click "Script" to bring up a dialog for
editing the script of the scene.

## Insert shot
:::info
- Privilege: supervisor
- Location: (page) episode / (tab) shots
:::

After Renderman builds an episode, you can still insert/remove/edit shots in Animan App.
On episode page, click the <Icon>more_vert</Icon>
button, and select "Insert After <Icon>vertical_align_bottom</Icon>" to open up a dialog
of inserting a new shot after the selected shot.

The dialog requires:

- **Frames** field
- a animatic.mp4
- a corresponding audio.wav

Optionally, you can specify a frame from the video to be the thumbnail of the shot.

:::tip The name of the shot
The default name of the new shot is chosen by the system.
The shot number in the new shot's name is the middle number between the previous and the next shot.
- Ex. If you insert a shot after E101-1-2-3, the name of the new shot will likely be E101-1-2-3.5

You can click <Icon>menu</Icon> under the Scene label and click "Normalize Shot Numbers" to
rename the shots of the scene be more friendly readable.
:::

## Edit shot
:::info
- Privilege: supervisor
- Location: (page) episode / (tab) shots
:::

Edit a shot is very similar to insert a shot. Click "Edit" from the same <Icon>more_vert</Icon> button
on a shot to bring up the dialog.

You can change either the animatic.mp4 or audio.wav or both. 

If the new wav or mp4 has a different length, you must provide both animatic.mp4 and audio.wav and
provide the correct frame number in the **Frames** field.


