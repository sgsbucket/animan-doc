---
title: What happens with revisions
---
import Icon from "@material-ui/core/Icon";
import { Screenshot, ScreenshotMark } from "../../src/components/Screenshot"

When a member finishes his work on a resource, and advance to the review stage,
a reviewer can download the file and check if the work meets requirements.

If adjustifications are required, the reviewer can reject the work and push the stage back
to the previous work stage, so the assigned member can make revisions.

<Screenshot image="/screenshot/resource_stage_approval.png">
  <ScreenshotMark x="18%" y="70%" width="25%" height="12%" textPosition="right" borderRadius="10px">
  </ScreenshotMark>
</Screenshot>

## Communicate with member

There are two ways to communicate with the member:

### Write notes

The reviewer can write revision notes.

<Screenshot image="/screenshot/resource_note_section.png">
  <ScreenshotMark x="22%" y="20%" width="40%" height="15%" textPosition="right" borderRadius="10px">
    1. Write some notes
  </ScreenshotMark>
  <ScreenshotMark x="93.3%" y="25.3%" width="5%" height="9%" textPosition="bottom-left" borderRadius="20px">
    2. Change to R (Revision)
  </ScreenshotMark>
  <ScreenshotMark x="93.3%" y="17%" width="5%" height="9%" textPosition="top-left" borderRadius="20px">
    3. Send
  </ScreenshotMark>
</Screenshot>

### Check list

The reviewer can create a check list for revision. Once the check list is built, the member will be forced to
view the list before uploading (or downloading) the resource file.

To edit the check list, open the resource page and click on the check-list button in the file box.

<Screenshot image="/screenshot/resource_checklist_menu.png">
  <ScreenshotMark x="76%" y="21%" width="10%" height="22%" textPosition="top" borderRadius="20px">
  </ScreenshotMark>
</Screenshot>

Click the + button of the desired check-list category.

<Screenshot image="/screenshot/resource_edit_checklist.png">
  <ScreenshotMark x="92.1%" y="54%" width="5%" height="11%" textPosition="left" borderRadius="20px">
    Add item to the list
  </ScreenshotMark>
</Screenshot>

The first two check-lists are shown for all the resources of the category that is resource belongs to.
The three check-lists below are shown only for this resource.