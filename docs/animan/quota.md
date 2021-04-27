---
title: Quota
---
import Icon from "@material-ui/core/Icon";
import { Screenshot, ScreenshotMark } from "../../src/components/Screenshot"

Quota is a progress monitor that shows the tasks and/or seconds of animation completed by each user and the time taken to complete these actions. Admins and Supervisors can view and sort this information for each user.

## Quota Overview for Supervisors/Admins
:::info
Location: 
- Page: Profile
- Tab: Quota
:::

This page lists each user's seconds of animation completed within the selected date range for the selected Show. The details of each user's work is organized by shot and is accessible by clicking the highlighted row or the arrow to the far right of the row.

The quota table's columns:

- **User**: The name of the user
- **Show**: Lists the show(s) each user is working on. You can filter by show using the "Shows" drop-down above this table.
- **Animation**: The seconds of animation that the user worked on
- **Tasks**: The number of tasks (animation excluded) that have been completed by the user
- **Time**: The approximate time the user has checked out resources related to animation or other tasks

<Screenshot image="/screenshot/profile_quota.png">
</Screenshot>

Clicking on a row of this table will expand to show the detail table for that user. The detail table lists all resources that the user worked within the selected time range.

Detail table columns
- **Show**: The Show that contains this resource
- **Resource**: The resource ID
- **Detail**: The stage of the resource that the user worked on
- **Quota**: Either the task totals or seconds of animation related to this resource
- **Time**: The approximate amount of time the user worked on this task
- **Date**: The date when the user submitted the work

<Screenshot image="/screenshot/profile_quota_detail.png">
    <ScreenshotMark x="94.1%" y="11.4%" width="6%" height="19%" textPosition="right" borderRadius="20px"></ScreenshotMark>
</Screenshot>

Each row of the detailed table can be clicked on to show another table that lists the time of work and all checkout and check-in activities during this work period.

<Screenshot image="/screenshot/profile_quota_subdetail.png">
    <ScreenshotMark x="90%" y="35%" width="6%" height="14%" textPosition="right" borderRadius="20px"></ScreenshotMark>
</Screenshot>

## User Quota
:::info
Location: 
- Page: User
:::

The User's name on the Quota page above links to the user's individual quota page.

There are three main tabs on this page:
- [User Quota](#user-quota):
- [Assigned Work](#assigned-work):
- [Submitted Work](#submitted-work):

<Screenshot image="/screenshot/user_quota.png">
</Screenshot>

## User Quota
:::info
Location: 
- Page: User
- Tab: User Quota
:::
A user's quota page contains two sub-tabs.
- My Quota
- My Work

### My Quota
This tab shows the same table as the detailed table on the Quota Overview page. It shows all resources that the user has worked on within the selected time range. Clicking on a row to shows the checkout/check-in history for that resource in that time period.

<Screenshot image="/screenshot/user_quota.png">
</Screenshot>

### My Work
This tab shows the checkout/check-in history of the user.


<Screenshot image="/screenshot/user_quota_mywork.png">
</Screenshot>

## Assigned Work
:::info
Location: 
- Page: User
- Tab: Assigned Work
:::

This tab shows the work that is assigned to this user.

<Screenshot image="/screenshot/user_quota_assigned-work.png">
</Screenshot>

## Submitted Work
:::info
Location: 
- Page: User
- Tab: Submitted Work
:::

This tab shows the work that this user has worked on and submitted for review.

<Screenshot image="/screenshot/user_quota_submitted-work.png">
</Screenshot>