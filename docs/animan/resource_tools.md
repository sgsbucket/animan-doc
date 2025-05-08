---
title: Resource Tools
menu: Show
---
import Icon from "@material-ui/core/Icon";
import { Screenshot, ScreenshotMark } from "../../src/components/Screenshot"

The **Resource Browser** helps you sort and find the resources you need.

Use the filter bar to define the resources to find and click **Search** to display them.

<Screenshot image="/screenshot/resource_browser.png">
</Screenshot>

## Filters

A Resource page contains five major sections:

**Show**: Limits results to a specific show.

**Type**: Limits results to a specific resource type.

**Category**: Limits results to a specific resource category.

**Sub-Category**: Limits results to a specific resource sub-category.

**Current Stage**: Limits results to a specific stage the resource is at.

**Tags**: Limits results to those resources with this specific tag.

**Search Term**: Limits results to resources with this text in their name.

## Download All

Clicking **Download All** will prepare to download the selected resources sequentially.

<Screenshot image="/screenshot/resource_download_all.png">
</Screenshot>




### Image to 3D AI Tool

We have connected an image to 3D LLM service to help artists.  It will try to convert an image into a 3d model and then import it back into animan.

The idea here is that this can help character rotation, backgrounds, and scene layout.

To use the tool:

- Go to a **Resource** page.
- Click **Request AI Generated Asset**.
<Screenshot image="/screenshot/image-2-3d-request.png">
</Screenshot>

- A new **Resource Page** will be created.
- Click **Check Out**
- Click to see the latest image guidelines and then click **Confirm** upload your image.
<Screenshot image="/screenshot/image-2-3d-upload.png">
</Screenshot>

- A popup gives some more parameters you may wish to experiment with.  We don't fully understand them but they do change the results so try them if you are ot getting what you wanted.

<Screenshot image="/screenshot/image-2-3d-confirm.png">
</Screenshot>

- After a few minutes the 3D file is returned to animan as a .glb and is viewable.  You will see it is a completely useable 1:1 magical creation.

<Screenshot image="/screenshot/image-2-3d-results.png">
</Screenshot>