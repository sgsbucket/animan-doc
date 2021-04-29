---
title: Quota
---
import Icon from "@material-ui/core/Icon";
import { Screenshot, ScreenshotMark } from "../../src/components/Screenshot"

Quota is a progress monitor that Shows the tasks and/or seconds of animation completed by each user and the time taken to complete these actions. Admins and Supervisors can view and sort this information for each user.

## Quota Overview for Supervisors/Admins
:::info
Role: Supervisor, Admin

Location: 
- Page: Profile
- Tab: Quota
:::

This page lists each user's seconds of animation completed within the selected date range for the selected Show. The details of each user's work is organized by Shot and is accessible by clicking the highlighted row or the arrow to the far right of the row.

The quota table's columns:

- **User**: The name of the user
- **Show**: Lists the Show(s) each user is working on. You can filter by Show using the "Shows" drop-down above this table.
- **Animation**: The seconds of animation that the user worked on
- **Tasks**: The number of tasks (animation excluded) that have been completed by the user
- **Time**: The approximate time the user has checked out Resources related to animation or other tasks

<Screenshot image="/screenshot/profile_quota.png">
</Screenshot>

Clicking on a row of this table will expand to display the detail table for that user. The detail table lists all Resources that the user worked within the selected time range.

Detail table columns
- **Show**: The Show that contains this Resource
- **Resource**: The Resource ID
- **Detail**: The stage of the Resource that the user worked on
- **Quota**: Either the task totals or seconds of animation related to this Resource
- **Time**: The approximate amount of time the user worked on this task
- **Date**: The date when the user submitted the work

<Screenshot image="/screenshot/profile_quota_detail.png">
    <ScreenshotMark x="94.1%" y="11.4%" width="6%" height="19%" textPosition="right" borderRadius="20px"></ScreenshotMark>
</Screenshot>

Each row of the detailed table can be clicked on to reveal another table that lists the time of work and all checkout and check-in activities during this work period.

<Screenshot image="/screenshot/profile_quota_subdetail.png">
    <ScreenshotMark x="90%" y="35%" width="6%" height="14%" textPosition="right" borderRadius="20px"></ScreenshotMark>
</Screenshot>

## User Quota
:::info
Role: Member, Supervisor, Admin

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
Role: Member, Supervisor, Admin

Location: 
- Page: User
- Tab: User Quota
:::
A user's quota page contains two sub-tabs.
- My Quota
- My Work

### My Quota
This tab shows the same table as the detailed table on the Quota Overview page. It displays all Resources that the user has worked on within the selected time range. Clicking on a row reveals the checkout/check-in history for that Resource in that time period.

<Screenshot image="/screenshot/user_quota.png">
</Screenshot>

### My Work
This tab displays the checkout/check-in history of the user.


<Screenshot image="/screenshot/user_quota_mywork.png">
</Screenshot>

## Assigned Work
:::info
Role: Member, Supervisor, Admin

Location: 
- Page: User
- Tab: Assigned Work
:::

This tab displays the work that is assigned to this user.

<Screenshot image="/screenshot/user_quota_assigned-work.png">
</Screenshot>

## Submitted Work
:::info
Role: Member, Supervisor, Admin

Location: 
- Page: User
- Tab: Submitted Work
:::

This tab displays the work that this user has worked on and submitted for review.

<Screenshot image="/screenshot/user_quota_submitted-work.png">
</Screenshot>