---
title: Quota
---
import Icon from "@material-ui/core/Icon";
import { Screenshot, ScreenshotMark } from "../../src/components/Screenshot"

Quota is a progress monitor for Users.
Admins and Supervisors can view and sort seconds of animation assigned to and completed by each User.

## Overview
:::info
- Location: (page) Profile / (tab) Quota
:::

This page lists by User, the seconds of animation completed within the selected time range.  Detail of each User's work by assigned shots is available via drop down.

Table columns:

- **User**: the User
- **Show**: selected Show
- **Animation**: seconds of animation that the User worked on
- **Tasks**: number of tasks (animation excluded) were done by the User
- **Time**: approximate time the User worked on this task based on the duration of time the resource was checked out

<Screenshot image="/screenshot/profile_quota.png">
</Screenshot>

Clicking on a row of this table will expand the detail table of a User.
The detail table lists all Resources that the User worked within the selected time range.

Detail table columns:
- **Show**: the Show of the Resource
- **Resource**: the Resource
- **Detail**: the Stage of the Resource that the User worked on
- **Quota**: either task totals or seconds of animation
- **Time**: approximate time the User worked on this task
- **Date**: the time when the User submitted the work 

<Screenshot image="/screenshot/profile_quota_detail.png">
    <ScreenshotMark x="94.1%" y="11.4%" width="6%" height="19%" textPosition="right" borderRadius="20px"></ScreenshotMark>
</Screenshot>

Each row of the detailed table can be clicked to expand another table that list the work time and all checkout and checkin activities during the work.

<Screenshot image="/screenshot/profile_quota_subdetail.png">
    <ScreenshotMark x="90%" y="35%" width="6%" height="14%" textPosition="right" borderRadius="20px"></ScreenshotMark>
</Screenshot>

## User Quota
:::info
- Location: (page) User
:::

The User's name on the Quota page above links to the User's Quota page.

There are three main tabs on this page.
- [User Quota](#user-quota): (see below)
- [Assigned Work](#assigned-work): show resources that are assigned to the User
- [Submitted Work](#submitted-work): show resources that contains work of the User

<Screenshot image="/screenshot/user_quota.png">
</Screenshot>

## User Quota
:::info
- Location: (page) User / (tab) User Quota
:::
User Quota page contains two sub tabs.
- My Quota
- My Work

### My Quota
This tab shows the same table as the detailed table on the Quota Overview page. It shows
all Resources that the User worked on within the selected time range.
Clicking a row to views the history of checkout / checkin history of the resource.

<Screenshot image="/screenshot/user_quota.png">
</Screenshot>

### My Work
This tab shows the file checkout/checkin history of the User.


<Screenshot image="/screenshot/user_quota_mywork.png">
</Screenshot>

## Assigned Work
:::info
- Location: (page) User / (tab) Assigned Work
:::

This tab shows the work that are assigned to this User.

<Screenshot image="/screenshot/user_quota_assigned-work.png">
</Screenshot>

## Submitted Work
:::info
- Location: (page) User / (tab) Submitted Work
:::

This tab shows the work that this User had worked on and had submitted for review.

<Screenshot image="/screenshot/user_quota_submitted-work.png">
</Screenshot>