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
- [Info](#info): Includes thumb, preview, priority, category marks

- [Files](#files): Includes files for user to access

- [Notes](#notes): Help supervisors and works communicate and shows system messages about this resource.

- [Stages](#stages): Controls stage flow.

- [References](#references): List resource references.

## Info

Info section includes info of thumbnail, preview, priority, category marks.

<Screenshot image="/screenshot/resource_info_section.png">
</Screenshot>

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

### Marks

The marks is an easy way to see problematic resources when viewing a list of resources.

You can setup up to 5 marks of a resource category, and the marks can be toggled on and off on resource page.

<Screenshot image="/screenshot/resource_marks.png">
    <ScreenshotMark x="90.5%" y="25%" width="8%" height="15%" textPosition="left" borderRadius="20px">
        Edit mark
    </ScreenshotMark>
    <ScreenshotMark x="60.5%" y="39%" width="9%" height="16%" textPosition="left" borderRadius="20px">
        Toggle mark of resource
    </ScreenshotMark>
    <ScreenshotMark x="75%" y="81%" width="35%" height="16%" textPosition="left" borderRadius="10px">
        Edit new mark
    </ScreenshotMark>
</Screenshot>

Here is an example of how marks looks when browsing a resource list, 

<Screenshot image="/screenshot/resource_marks_in_list.png">
  <ScreenshotMark x="41%" y="62.1%" width="5%" height="8%" textPosition="top" borderRadius="20px">
    Purple mark
  </ScreenshotMark>
</Screenshot>

## Files

All files related to this resource is listing in this section. You can simply click a file link to download.
<Screenshot image="/screenshot/resource_file_section.png">
</Screenshot>

Click the little triangle beside the filename to list older versions of the file.
<Screenshot image="/screenshot/resource_file_versions.png">
  <ScreenshotMark x="79.6%" y="9.6%" width="10%" height="10%" textPosition="top" borderRadius="20px"></ScreenshotMark>
</Screenshot>

### Upload file

To upload a file, first you need to checkout the resource. Once the resource is checkedout, no other user can upload files to this resource. Once you finish the file uploading, remember to checkin the resource.

### Add Check List

The main file of the resource has a check list that a supervisor can edit its content.
A dialog of the check list will be shown to members who is about to download or upload a file.

<Screenshot image="/screenshot/resource_checklist_menu.png">
  <ScreenshotMark x="76%" y="21%" width="10%" height="22%" textPosition="top" borderRadius="20px">
  </ScreenshotMark>
</Screenshot>

There are 5 lists that a supervisor can edit. Each list is shown to members at different situation.

<Screenshot image="/screenshot/resource_edit_checklist.png">
  <ScreenshotMark x="92.1%" y="32%" width="5%" height="11%" textPosition="left" borderRadius="20px">
    Add item to the list
  </ScreenshotMark>
</Screenshot>

  1. Notes on uploading files of the category of this resource

    The list shows when a user is about to upload a file for the template of the category of this resource (on category page)

  2. Notes on download files of the category of this resource

    The list shows when a user is about to download the template file of the category of this resource (on category or resource page)

  3. Notes before uploading files of this resource

    The list shows when a user is about to upload a file to this resource (on resource page)

  4. Notes before download files of this resource

    The list shows when a user is about to download a file of this resource (on resource page)

  5. Notes before locking this resource

    The list shows when a user is about to checkout(lock) the resource.

## Notes

Notes is a tool for supervisors to communiate with work members.
It also shows system messages.

<Screenshot image="/screenshot/resource_note_section.png">
  <ScreenshotMark x="77%" y="8%" width="40%" height="10%" textPosition="left" borderRadius="20px">
    Toggle message filters
  </ScreenshotMark>
  <ScreenshotMark x="93.3%" y="25.3%" width="5.5%" height="10%" textPosition="bottom-left" borderRadius="20px">
    Change the comment type of the message that is about to post
  </ScreenshotMark>
</Screenshot>

## Stages

[The stages are the workflow of a resource](category#how-the-stage-work). 

<Screenshot image="/screenshot/resource_stages_box.png">
</Screenshot>

Workers does not need to operate on this list. All worker related actions can be done in [files](#files) section that includes
 1. Checkout/checkin files
 2. Mark the stage done and move to the next stage.

 Supervisors and administrators can move the stage manually in the section. Supervisors can also assign a worker of each work stage.

## References

This sections is for supervisors to add reference resources of this resource.

If this resource is referenced in other resources, the resources that are referencing this resource are also shown here.

<Screenshot image="/screenshot/resource_ref_section.png">
</Screenshot>


### Reference Copier

For similar resources, they usually needs same set of reference resources, and "Reference Copier" can come in handy.

Open "Reference Copier" from the Reference Resources box

<Screenshot image="/screenshot/resource_ref_section.png">
  <ScreenshotMark x="17%" y="5%" width="6%" height="8%" textPosition="bottom-right" borderRadius="20px">
    Open Reference Copier
  </ScreenshotMark>
</Screenshot>

In "Reference Copier" there are two resource sections, one on left, and one on right.
Left side is pre-selected from the resource of the current page.
Select a resource for the right side to proceed.

<Screenshot image="/screenshot/reference_copier_button.png">
  <ScreenshotMark x="73%" y="34%" width="30%" height="24%" textPosition="bottom-right" borderRadius="20px">
  </ScreenshotMark>
</Screenshot>

Once you have two resources selected in the dialog, the reference resources of each are listed below the resource.
You can click the arrow button beside the reference to copy one by one, or click the arrow button on the top selected resource to copy all its references to the other.

<Screenshot image="/screenshot/reference_copier.png">
  <ScreenshotMark x="52.5%" y="28.5%" width="4.5%" height="9%" textPosition="top-right" borderRadius="25px">
    Copy all refs to the other
  </ScreenshotMark>
  <ScreenshotMark x="52.5%" y="61.5%" width="4.5%" height="9%" textPosition="right" borderRadius="25px">
    Copy a single ref
  </ScreenshotMark>
</Screenshot>