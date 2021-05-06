---
title: Installation
---
import Icon from "@material-ui/core/Icon";
import { Screenshot, ScreenshotMark } from "../../src/components/Screenshot"

## What is Renderman
Renderman is a companion app to Animan. It runs on one or several local "Render PC(s)" controlled by your Studio to export production video, preview images, and thumbnails of Resources and Shots as instructed by Animan.

## Installation

### Prerequisites
Your render machine needs the following software installed to support rendering various file formats:

1. Adobe Animate
2. Toonboom Harmony 17/up

### Install Renderman

Your Customer Support team member will provide you with the latest installer for Renderman (renderman.exe).

1. Copy renderman.exe to a folder of your choice. Everything that Renderman produces will be stored in this folder, so be sure to choose a folder that can hold 2 TB of files.

1. Run the installer. Once the installation is complete, a console page will load in your default browser where you can monitor the status of Renderman. The URL of this page is http://localhost:8991

:::info
Renderman will auto-update to the latest version.
:::

## Setup Renderman

If Renderman is not running or the render PC(s) restart, simply double-click renderman.exe to resume the program.

<Screenshot image="/screenshot/renderman.png">
</Screenshot>

:::info
You should set-up the Render PC(s) to auto-start Renderman when Windows loads. Select the Start button, then select Settings > Apps > Startup. Here you can set Renderman to On for auto-run. If you don't see the Startup option in Settings, right-click the Start button, select Task Manager, then select the Startup tab. If you don't see the Startup tab, select More details.
:::

Once Renderman is running, click the gear button in the top-right corner to bring up the configuration dialog.

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
This format determines the name of the output .mov files. You can use alphabet characters, underline, {id}, {act}, {scene}, {shot} in the format.

Examples for the Shot ID=1502, in Act:1, Scene:3, Shot:12
```sh
// produce s_1502.mov
s_{id}
```
```sh
// produce 1_3_12.mov
{act}_{scene}_{shot}
```

#### Render
There are four input boxes in the Render section. Renderman will render these four formats in the following order:

Renderman wants to Render 4 types on things in order:
1. Thumb: Rendering .PSD thumbnails.
1. Preview: Rendering preview video of Shots, which are shown in Animan.
1. Offline: Rendering Offline video clips that are stored on the Renderman PC(s).
1. Rendering Online video clips that are stored on the Renderman PC(s).

The input box for these types refers to the number of resources for each format and can allow Admin users to spread the workload (the default is 10). For example, an Admin user can set each of Thumb/Preview/Online to 1 and keep 10 on Offline in order to speed up Offline renders.