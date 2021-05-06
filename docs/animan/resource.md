---
title: Resources
menu: Show
---
import Icon from "@material-ui/core/Icon";
import { Screenshot, ScreenshotMark } from "../../src/components/Screenshot"

A Resource is an asset definition that helps Animan manage images, sounds, and animation.

Every Resource belongs to ONE [Resource Category](category.md). A Resource Category sets the default file format(s) for that Resource and what Work Stages the Resource must go through.

## Page Content

A Resource page contains five major sections:
- [Info](#info): Includes thumbnail, preview video, priority, and Category marks.

- [Files](#files): Included files for the user to access.

- [Notes](#notes): Communication between Admins, Supervisors, and Members, as well as system messages and process records.

- [Stages](#stages): The Stage workflow.

- [References](#references): List of References to and from this Resource.

## Info

The Info section contains important information including thumbnail, preview video, priority, and Category marks.

<Screenshot image="/screenshot/resource_info_section.png">
</Screenshot>

### Re-Render request

Place your mouse cursor over the thumbnail to bring up Render-related tools.

<Screenshot image="/screenshot/resource_thumb_mouseover.png">
    <ScreenshotMark x="61%" y="29%" width="8%" height="16%" textPosition="left" borderRadius="50%">
        Open the full-sized thumbnail in a new window.
    </ScreenshotMark>
</Screenshot>

<Screenshot image="/screenshot/resource_thumb_mouseover.png">
    <ScreenshotMark x="61%" y="45%" width="8%" height="16%" textPosition="left" borderRadius="50%">
        Request a re-Render of <br/>preview animaion, thumbnail,<br/> or both
    </ScreenshotMark>
</Screenshot>

### Change Priority

Priority is used in listing assigned work and searching for no-tagged Resources. Higher Priority items will be listed at the beginning of the results.

The Priority of a Resource is determined by an auto-calculation of how many Resources are Referencing it, as well as by a customized Priority value. To change the Customized Priority, click on the Priority Number.

<Screenshot image="/screenshot/resource_set_priority.png">
    <ScreenshotMark x="68.7%" y="15%" width="5.5%" height="11%" textPosition="left" borderRadius="50%"></ScreenshotMark>
</Screenshot>

### Add Instructions

A Supervisor can add instructions and Notes for a Resource by clicking the "Notes / Instructions" button.

<Screenshot image="/screenshot/resource_add_instruction.png">
    <ScreenshotMark x="65.5%" y="13%" width="24%" height="7%" textPosition="bottom" borderRadius="10px">
        Click to bring up instruction dialog.
    </ScreenshotMark>
</Screenshot>

There are two types of Instructions:

- **Episode Notes**

  These Notes apply to all Resources in the Episode.

  These Notes can also be seen and edited in the Episode page's Notes tab.

  <Screenshot image="/screenshot/episode_notes.png"></Screenshot>

- **Show Notes**

  These Notes apply to all Resources in the Show.

  These Notes can also be seen and edited in the Show page's Notes tab.

  <Screenshot image="/screenshot/show_notes.png"></Screenshot>

### Category Marks

Category Marks are an easy way to highlight important or problematic Resources when viewing a list of Resources.

You can set up to 5 marks in a Resource Category. Marks can be toggled on and off on the Resource Page.

<Screenshot image="/screenshot/resource_marks.png">
    <ScreenshotMark x="90.5%" y="25%" width="8%" height="15%" textPosition="left" borderRadius="20px">
        Edit Mark
    </ScreenshotMark>
    <ScreenshotMark x="60.5%" y="39%" width="9%" height="16%" textPosition="left" borderRadius="20px">
        Toggle Mark
    </ScreenshotMark>
    <ScreenshotMark x="75%" y="81%" width="35%" height="16%" textPosition="left" borderRadius="10px">
        Create New Mark
    </ScreenshotMark>
</Screenshot>

Here is an example of how a Category Mark looks when browsing a Resource list:

<Screenshot image="/screenshot/resource_marks_in_list.png">
  <ScreenshotMark x="41%" y="62.1%" width="5%" height="8%" textPosition="top" borderRadius="20px">
    Purple Mark
  </ScreenshotMark>
</Screenshot>

## Files

All files related to this Resource are listed in this section. Users can click the file link to download.
<Screenshot image="/screenshot/resource_file_section.png">
</Screenshot>

Click the little triangle beside the filename to list the older versions of the file and on their filename to download these files.
<Screenshot image="/screenshot/resource_file_versions.png">
  <ScreenshotMark x="79.6%" y="9.6%" width="10%" height="10%" textPosition="top" borderRadius="20px"></ScreenshotMark>
</Screenshot>

### Check Out / Check In, aka Locked / Unlocked

When a user checks out a Resource, it means that the user has the working copy of the Resource file. No other user may upload a file to that Resource while it is checked out. The checked out state is also called Locked.

When a user checks in a Resource, it means that the user has returned the working copy of the Resource file to Animan. Other users may now check out and download the file. The checked in state is also called Unlocked.

### Upload File

To upload a file, the user first must check out the Resource. Once it is checked out, no other user may upload files to this Resource. Once uploading is finished, the Resource must be checked in.

### Add Checklist

Supervisors can create a Checklist that appears to users when any file is uploaded or downloaded, depending on the Checklist. This is useful for any format or content checks and reminders that a Supervisor wants their users to keep in mind.

<Screenshot image="/screenshot/resource_checklist_menu.png">
  <ScreenshotMark x="85%" y="21%" width="11%" height="25%" textPosition="top" borderRadius="20px">
  </ScreenshotMark>
</Screenshot>

There are five Checklists on which Supervisors can add items for Members to keep in mind. These Checklists are named after when they appear to a user:

<Screenshot image="/screenshot/resource_edit_checklist.png">
  <ScreenshotMark x="92.1%" y="32%" width="5%" height="11%" textPosition="left" borderRadius="20px">
    Add item to the list
  </ScreenshotMark>
</Screenshot>

  1. Notes on Uploading files for any Resource in this Category.

    This Checklist appears when a user is about to upload a file in this Category.

  2. Notes on downloading files for any Resource in this Category.

    This Checklist appears when a user is about to download a file in this Category.

  3. Notes before Uploading files to this Resource.

    This Checklist appears when a user is about to upload a file to this Resource.

  4. Notes before downloading files from this Resource.

    The Checklist appears when a user is about to download a file from this Resource.

  5. Notes before checking out this Resource.

    This Checklist appears when a user is about to checkout the Resource.

## Notes

Notes is a tool for Supervisors to communiate with Members.
It also logs system events and messages.

<Screenshot image="/screenshot/resource_note_section.png">
  <ScreenshotMark x="77%" y="8%" width="40%" height="10%" textPosition="left" borderRadius="20px">
    Toggle message filters
  </ScreenshotMark>
  <ScreenshotMark x="93.3%" y="25.3%" width="5.5%" height="10%" textPosition="bottom-left" borderRadius="20px">
    Change the comment type of the message that is about to post
  </ScreenshotMark>
</Screenshot>

## Note Types

  1. Comment

    Notes of a general nature.

  2. Director

    Notes made by the Director of the Show.

  3. Revision

    Notes regarding Resources sent back for Revision.

## Stages

[Stages are the workflow of a Resource. The Resource Category determines the Stages for that Resource and their order](category#how-the-stage-work). 

<Screenshot image="/screenshot/resource_stages_box.png">
</Screenshot>

Members do not need to use this tool. All Member-related actions for Resources can be done in the [Files](#files) section. including:
 1. Check Out / Check In files.
 2. Mark the Stage complete and advance to the next Stage.

 Supervisors and Admins can move the Stage manually with this tool. Supervisors can also assign a Member to each work Stage.

## References

This section is for Supervisors to add Reference resources to this Resource.

If this Resource is Referenced in other Resources, those Resources are also shown here.

<Screenshot image="/screenshot/resource_ref_section.png">
</Screenshot>


### Reference Copier

The Reference Copier is a tool to save work in assigning the same reference to multiple Resources

You can open the Reference Copier from the Reference Resources box by clicking the paper icon:

<Screenshot image="/screenshot/resource_ref_section.png">
  <ScreenshotMark x="17%" y="5%" width="6%" height="8%" textPosition="bottom-right" borderRadius="20px">
    Open Reference Copier
  </ScreenshotMark>
</Screenshot>

In Reference Copier there are two Resource sections, one on the left and one on the right. The left side is pre-selected from the current Resource. Select a Resource for the right side to copy the reference over to that Resource.

<Screenshot image="/screenshot/reference_copier_button.png">
  <ScreenshotMark x="73%" y="34%" width="30%" height="24%" textPosition="bottom-right" borderRadius="20px">
  </ScreenshotMark>
</Screenshot>

Once there are two Resources selected in the dialog box, the Reference resources of each are listed below. Click the arrow button on the top selected Resource to copy all its References to the other Resource, or instead click the arrow button beside a specific Reference to copy one by one.

<Screenshot image="/screenshot/reference_copier.png">
  <ScreenshotMark x="52.5%" y="28.5%" width="4.5%" height="9%" textPosition="top-right" borderRadius="25px">
    Copy all refs to the other
  </ScreenshotMark>
  <ScreenshotMark x="52.5%" y="61.5%" width="4.5%" height="9%" textPosition="right" borderRadius="25px">
    Copy a single ref
  </ScreenshotMark>
</Screenshot>