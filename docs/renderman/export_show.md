---
title: Export Show
---
import Icon from "@material-ui/core/Icon";
import { Screenshot, ScreenshotMark } from "../../src/components/Screenshot"

You can export a backup of a show to a folder on the renderman pc. The backup includes resource / shot files and a json of all resources info.

## Start an export

On renderman page, click “Export” to open the rendering page.

<Screenshot image="/screenshot/renderman.png">
  <ScreenshotMark x="90.2%" y="18.8%" width="12%" height="9%" textPosition="bottom-left" focusDim="true"></ScreenshotMark>
</Screenshot>

On export show page:

1. Choose a show from the dropdown menu.
1. Click “Export”

<Screenshot image="/screenshot/renderman_export_show.png">
</Screenshot>

## Export Options

#### Include old versions of files

By default, the function exports only the latest file of each resource. Check this options to include all versions of the resources.

## Export Result

The exporting progress is shown on renderman panel.

<Screenshot image="/screenshot/renderman_export_show_result.png">
</Screenshot>

When the exporting is done, you can access the files in "show_export/_the_show_code_" folder inside renderman workspace.

<Screenshot image="/screenshot/renderman_export_show_files.png">
</Screenshot>