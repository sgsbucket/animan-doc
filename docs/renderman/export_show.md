---
title: Export Show
---
import Icon from "@material-ui/core/Icon";
import { Screenshot, ScreenshotMark } from "../../src/components/Screenshot"

You can export a backup of a Show to a folder on the Renderman pc. The backup includes all Resource and Shot files and a .json of all Resources meta data.

## Start an Export

On Renderman Page, click “Export” to open the Rendering Page.

<Screenshot image="/screenshot/renderman.png">
  <ScreenshotMark x="90.2%" y="18.8%" width="12%" height="9%" textPosition="bottom-left" focusDim="true"></ScreenshotMark>
</Screenshot>

On Export Show page:

1. Choose a Show from the dropdown menu.
1. Click “Export”

<Screenshot image="/screenshot/renderman_export_show.png">
</Screenshot>

## Export Options

#### Include old versions of files

By default, the function exports only the latest file of each Resource. Check this options to include all versions of the Resources.

## Export Result

The Exporting progress is shown on the Renderman panel.

<Screenshot image="/screenshot/renderman_export_show_result.png">
</Screenshot>

When the Exporting is done, you can access the files in "show_export/_the_show_code_" folder inside Renderman workspace.

<Screenshot image="/screenshot/renderman_export_show_files.png">
</Screenshot>