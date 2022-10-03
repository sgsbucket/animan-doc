---
title: Export Shots
---
import Icon from "@material-ui/core/Icon";
import { Screenshot, ScreenshotMark } from "../../src/components/Screenshot"

Renderman provides a tool to export shots and name them according to custom rules.

## Start an Export

On the Renderman Page, click the "Export Shots" button within the kebab menu.

<Screenshot image="/screenshot/renderman_Export_shot.png">
  <ScreenshotMark x="88%" y="52%" width="16%" height="15%" textPosition="bottom-left" focusDim="true"></ScreenshotMark>
</Screenshot>

On the Export Shot Page:

1. Choose a Show
1. Select an Episode
1. Select a Render Mode
1. Decsribe the Filename Format

<Screenshot image="/screenshot/renderman_Export_form.png">
</Screenshot>

:::info
Filename Format
Using this field, Supervisors can create a file name template. The output video files will be named according to this template as they are generated.

Filenames can contain text as well as variables.  Animan will insert resource meta information into filenames using the following variables.  Variables are differentaied from test when contained within curly braces.
- {id} = The Shot ID
- {act} = The Act
- {scene} = The Scene
- {shot} = The Shot
- {ext_id} = The External ID
:::