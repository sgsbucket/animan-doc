---
title: Export Show
---
import Icon from "@material-ui/core/Icon";
import { Screenshot, ScreenshotMark } from "../../src/components/Screenshot"

You can export a backup of a Show to a folder on the Renderman PC(s). The backup includes all Resource and Shot files, as well as a .json of all Resource metadata.

## Start an Export

On the Renderman Page, click the "Export" button to open the Export Show Page.

<Screenshot image="/screenshot/renderman.png">
  <ScreenshotMark x="90.2%" y="18.8%" width="12%" height="9%" textPosition="bottom-left" focusDim="true"></ScreenshotMark>
</Screenshot>

On the Export Show Page:

1. Choose a Show from the drop-down menu.
1. Click the "Export" button.

<Screenshot image="/screenshot/renderman_export_show.png">
</Screenshot>

## Export Options

#### Include old versions of files

By default, the export function only includes the latest file of each Resource. Checking this option will instead include all versions of the Resources.

## Export Result

The Export progress is displayed on the Renderman panel.

<Screenshot image="/screenshot/renderman_export_show_result.png">
</Screenshot>

When the Export is complete, you can access the files in the "showexport/_the_show_code" folder inside Renderman workspace.

<Screenshot image="/screenshot/renderman_export_show_files.png">
</Screenshot>