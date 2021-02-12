---
title: Resources
menu: show
---
import Icon from "@material-ui/core/Icon";
import { Screenshot, ScreenshotMark } from "../../src/components/Screenshot"

Resource is a work unit that help the studio manage images, sounds, and animation etc.

Every resource belongs to ONE “[Resource Category](category.md)”. A Resource Category tells what file format are used and what stages the resource production must go through.

## Page Content

A resource page contains five major sections:
- [Info section](#info-section)

  Includes thumb, preview, priority, category marks

  <Screenshot image="/screenshot/resource_info_section.png">
  </Screenshot>

- Files section

  Includes files for user to access

  <Screenshot image="/screenshot/resource_file_section.png">
  </Screenshot>

- Notes

  Help supervisors and works communicate and shows system messages about this resource.

  <Screenshot image="/screenshot/resource_note_section.png">
  </Screenshot>

- Stages

  Controls stage flow.

  <Screenshot image="/screenshot/resource_stages_box.png">
  </Screenshot>

- Resources

  List resource references.

  <Screenshot image="/screenshot/resource_ref_section.png">
  </Screenshot>

## Info section

### Re-render request

Mouse over on the thumb to bring up the render related buttons.

<Screenshot image="/screenshot/resource_thumb_mouseover.png">
    <ScreenshotMark x="61%" y="29%" width="8%" height="16%" textPosition="left" borderRadius="50%">
        Open the full-sized thumb<br/> on a new window
    </ScreenshotMark>
</Screenshot>

<Screenshot image="/screenshot/resource_thumb_mouseover.png">
    <ScreenshotMark x="61%" y="45%" width="8%" height="16%" textPosition="left" borderRadius="50%">
        Request a re-render of <br/>preview animaion, thumbnail,<br/> or both
    </ScreenshotMark>
</Screenshot>

### Change Priority

The priority is used when listing assigned work and searching for no-tag resources.
The higher priority will be listed in the front.

The priority of a resource is auto-calculated by how many resources are referencing it plus a customized priority.
To change the customized priority, click on the button-like priority number.

<Screenshot image="/screenshot/resource_set_priority.png">
    <ScreenshotMark x="68.7%" y="15%" width="5.5%" height="11%" textPosition="left" borderRadius="50%"></ScreenshotMark>
</Screenshot>

### Add Instructions

A supervisor can add instructions and notes for a resource here.

<Screenshot image="/screenshot/resource_add_instruction.png">
    <ScreenshotMark x="65.5%" y="13%" width="24%" height="7%" textPosition="bottom" borderRadius="10px">
        Click to bring up instruction dialog.
    </ScreenshotMark>
</Screenshot>

There are two list of instructions

- Episode Notes:

  The notes apply to all resources in the episode.

  The notes can also be seen and edited in the episode page / notes tab.

  <Screenshot image="/screenshot/episode_notes.png"></Screenshot>

- Show Notes:

  The notes apply to all resources in the show.

  The notes can also be seen and edited in the show page / notes tab.

  <Screenshot image="/screenshot/show_notes.png"></Screenshot>