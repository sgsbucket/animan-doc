---
title: Installation
---
import Icon from "@material-ui/core/Icon";
import { Screenshot, ScreenshotMark } from "../../src/components/Screenshot"

## What is Renderman
Renderman is a companion app to Animan. It runs on one or many local ‘render’ PCs controlled by your Studio.
It produces production video as instructed by Animan.
It also Renders Preview images and Thumnails of the Resources and Shots that are hosted on the Animan server.

## Installation

### Prerequisites
Your render machine needs the software listed below installed to support Rendering various file formats.

1. Adobe Animate
2. Toonboom Harmony 17/up

### Install Renderman

Your Customer Support team member will provide you with the latest installer (renderman.exe) for renderman.

1. Copy the renderman.exe to a folder.
   > Everything that Renderman produces will be stored in this folder, so be sure to choose a folder that can hold 2 TB of files.

1. Run the installer.
   > Once the installation is complete, it brings up a console page in the default browser.
   The url is http://localhost:8991 to monitor the status of renderman on this page.

:::info
Renderman will auto-update to the latest version.
:::

## Setup Renderman

If Renderman is not running or the Render PC restarts, simply double-click Renderman.exe to bring it back to running.

<Screenshot image="/screenshot/renderman.png">
</Screenshot>

:::info
You should setup the Render pc to auto-start Renderman when windows starts up.
:::

Once Renderman is running, click the Config button to bring up the configuration dialog.

<Screenshot image="/screenshot/renderman_config.png">
  <ScreenshotMark x="97.5%" y="5%" width="5%" height="9%" textPosition="bottom-left">Config button</ScreenshotMark>
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
There are 4 Config boxes in the Render section.

Renderman wants to Render 4 types on things in order:
1. Thumb: Renders psd thumbnails
2. Preview: Renders preview movies of Shots that is shown in animan site.
3. Offline: Renders Offline movie clips that are stored on the Renderman PC.
4. Online: Renders Online movie clips that are stored on Renderman PC.

The default number of Resources for each target is 10 to spread the workload across all targets.
Admin can set Thumb/Preview/Online to 1, and keep 10 on Offline to speed up Offline Renders.

