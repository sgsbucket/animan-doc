---
title: Quota
---
import Icon from "@material-ui/core/Icon";
import { Screenshot, ScreenshotMark } from "../../src/components/Screenshot"

Quota is a progress monitor that is member oriented.
Admin users can overview how many seconds of animation worked by each member,
and can view the detail of how each member works on each file.

## Overview
:::info
- Location: (page) Profile / (tab) Quota
:::

This page list members with how many seconds of animation were done within the selected time range.

Table columns:

- **User**: the member
- **Show**: selected show
- **Animation**: seconds of animation that the member worked on
- **Tasks**: number of tasks (animation excluded) were done by the member
- **Time**: a proxy time the member worked on this task

<Screenshot image="/screenshot/profile_quota.png">
</Screenshot>

Click on a row of this table will expand the detail table of a member.
The detailed tables lists all resources that the member worked within the selected time range.

Detail table columns:
- **Show**: the show of the resource
- **Resource**: the resource
- **Detail**: the stage of the resource that the member worked on
- **Quota**: either task counts or seconds of animation
- **Time**: a proxy time the member worked on this task
- **Date**: the time when the member submitted the work

<Screenshot image="/screenshot/profile_quota_detail.png">
    <ScreenshotMark x="94.1%" y="11.4%" width="6%" height="19%" textPosition="right" borderRadius="20px"></ScreenshotMark>
</Screenshot>

Each row of the detailed table can be click to expand another table that list the work time.
The work time table lists all checkout checkin activities during the work.

<Screenshot image="/screenshot/profile_quota_subdetail.png">
    <ScreenshotMark x="90%" y="35%" width="6%" height="14%" textPosition="right" borderRadius="20px"></ScreenshotMark>
</Screenshot>

## Member Quota

On the quota page described above, the username of a row in the table links to a member page
that shows the quota of that specific member.

There are three main tabs on this page.
- [User Quota](#user-quota): (see below)
- [Assigned Work](#assigned-work): show resources that are assigned to the member
- [Submitted Work](#submitted-work): show resources that contains work of the member

<Screenshot image="/screenshot/user_quota.png">
</Screenshot>

## User Quota
This tab is located on the Member Quota page, and contains two sub tabs in the panel.

### My Quota
This tab shows the same table as the detailed table on overview quota page, which shows
all resources that the member worked on within the selected time range.
Click on each row to view the history of checkout/checkin time when working on a resource.

### My Work
This tab shows the file checkout/checkin history of the member.

## Assigned Work

This tab shows the work that are assigned to this member.

<Screenshot image="/screenshot/user_quota_assigned-work.png">
</Screenshot>

## Submitted Work

This tab shows the work that this member had worked on and had submitted for review.

<Screenshot image="/screenshot/user_quota_submitted-work.png">
</Screenshot>