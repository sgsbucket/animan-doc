---
title: This is Document Number 3
---

Renderman is a companion app to animan. It runs on a local ‘render’ pc controlled by your studio.
It produces production video as instructed by animan.
It also renders preview images and thumnails of the resources and shots that are hosted on the animan server.

## Installation

Your customer support team member will provide you with the latest installer for renderman.

1. Copy the renderman installer to a folder.
   > Everything that renderman produces will be stored in this folder, so be sure to choose a folder that can hold 2 TB of files.

1. Run the installer.
   > Once the installation complete, it brings up a console page on the default browser.
   The url is http://localhost:8991 You can check the status of renderman on this page.

## Upload Cutup of a episode
1. On renderman page, click “Cutup” to open the cutup page.
1. Choose the xml and mp4/mov of the cutup.
1. Click “Upload” to start
1. Once the process completes, the system will send you an email.

There are options that you can specify before uploading the cutup

- Split Videos Only
  > Check this option will make the process only prepare all the resources of the cutup, including thumbnails, animatic.mp4, audio.wav and json files of all the shots, but it will not be uploaded to server.

- Allow Custom FPS
  > If unchecked, the cutup process will not proceed if the FPS detected is neither 23.97 nor 29.97.

## Customized Rendering
You can make a render of a series of shots into one movie.

1. On renderman page, click “Custom Render” to open the rendering page.
1. Choose a show from the dropdown menu.
1. Select an episode
1. You can optionally pick an Act/Scene/Shot
1. Click “Start Render”

Options are:

- Codec
  > Choose a codec to render
  :::info
  This option shows when the target movie contains only one shot.
  :::

# Export Show
You can export a backup of a show to a folder on the renderman pc. The backup includes resource / shot files and a json of all resources info.

Options are:

- Include old versions of files
  > By default, the function exports only the latest file of each resource. Check this options to include all versions of the resources.

