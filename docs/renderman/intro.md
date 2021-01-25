---
title: Installation
---
import Icon from "@material-ui/core/Icon";
import { Screenshot, ScreenshotMark } from "../../src/components/Screenshot"

## What is Renderman
Renderman is a companion app to animan. It runs on a local ‘render’ pc controlled by your studio.
It produces production video as instructed by animan.
It also renders preview images and thumnails of the resources and shots that are hosted on the animan server.

## Installation

### Prerequisites
Your render machine needs the software listed below installed to support rendering various file formats.

1. Adobe Animate
2. Harmony Toonboom 17/up
3. After Effect

### Install renderman

Your customer support team member will provide you with the latest installer (renderman.exe) for renderman.

1. Copy the renderman.exe to a folder.
   > Everything that renderman produces will be stored in this folder, so be sure to choose a folder that can hold 2 TB of files.

1. Run the installer.
   > Once the installation complete, it brings up a console page on the default browser.
   The url is http://localhost:8991 You can check the status of renderman on this page.

:::info
Renderman will auto-update to the latest version.
:::

## Setup Renderman

If renderman is not running or the render pc restarts, simply double-click renderman.exe to bring it back to running.

:::info
You should setup the render pc to auto-start renderman when windows starts up.
:::

Once renderman is up, click the config button to bring up the configuration dialog.

<Screenshot image="/screenshot/renderman.png">
  <ScreenshotMark x="96.66%" y="18.8%" width="7%" height="9%" textPosition="bottom-left" focusDim="true">Config button</ScreenshotMark>
</Screenshot>

In the dialog, fill in the correct path to each software executable.

## Config
#### Animate Path
The path to Adobe Animate executable.

```sh
// example
C:/Program Files/Adobe/Adobe Animate 2021/Animate.exe
```
#### Harmony Path
The path to Harmony executable.

```sh
// example
C:/Program Files (x86)/Toon Boom Animation/Toon Boom Harmony 17 Premium/win64/bin/HarmonyPremium.exe
```

#### Output Mov Format
This format determine the name of the output mov files.
Use alphabet, underline, {id}, {act}, {scene}, {shot} in the format.

Examples for the shot ID=1502, in Act:1, Scene:3, Shot:12
```sh
// produce s_1502.mov
s_{id}
```
```sh
// produce 1_3_12.mov
{act}_{scene}_{shot}
```

#### Render
There are 4 config box in the Render section.

A render circle in renderman includes 4 render targets in order:
1. Thumb: renders pdf thumbnails
2. Preview: renders preview movies of shots that is shown in animan site.
3. Offline: renders offline version movie clips that are stored on render pc
4. Online: renders online movie clips that are stored on render pc

The default render amount of shots for each target is 10.
You can set Thumb/Preview/Online to 1, and keep 10 on Offline to fasten offline renderings.

