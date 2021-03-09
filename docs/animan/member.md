---
title: Members
---
import Icon from "@material-ui/core/Icon";
import { Screenshot, ScreenshotMark } from "../../src/components/Screenshot"

Every member is assigned to a role of either admin, supervisor, or member. Each role has a preset of privileges to access the content of animan.

- member : artists and animators creating resources and animating shots 
- supervisor : assigning and reviewing the work of members 
- admin : controlling teh animan backend and the privilidges of memebrs and supervisors

## Add member

:::info
- Privilege: admin
- Location: (page) Profile / (tab) Members
:::

Let you add a member from the existing user who has registered on animan.

#### Steps

1. On the profile page and go to “Members” tab panel.
1. Click on “+ Member” button to bring up a search user dialog.
1. Enter the email or name of the user and click “Search”
1. Mouse over the desired user and click “Select >” button

<Screenshot image="/screenshot/profile_members.png">
  <ScreenshotMark x="10%" y="34%" width="14%" height="12%" textPosition="right" borderRadius="10px"></ScreenshotMark>
</Screenshot>

## Invite member
:::info
- Privilege: admin
- Location: (page) Profile / (tab) Members
:::

Let you invite a user to join your studio. The user must have a gmail account.

#### Steps

1. On the profile page and go to “Members” tab panel.
1. Click on “+ Invite Member” button to bring up a inviting dialog.
1. Enter the gemail account of the user then click “Send Invitation” button
1. The invitation sent to the gmail mailbox contains a link for the member to accept the invitation.

<Screenshot image="/screenshot/profile_members.png">
  <ScreenshotMark x="13.5%" y="85%" width="21%" height="13%" textPosition="right" borderRadius="10px"></ScreenshotMark>
</Screenshot>

## Member Role and Privileges
:::info
- Privilege: admin
- Location: (page) Profile / (tab) Members
:::

You can change the role of a member to give the member a set of default privileges.
Under members tab in profile page, each member has a dropbox to assign roles.

<Screenshot image="/screenshot/profile_members.png">
  <ScreenshotMark x="83.5%" y="49.2%" width="17%" height="11%" textPosition="right" borderRadius="10px"></ScreenshotMark>
</Screenshot>

- Member:
  1. check out/check in files to edit
- Supervisor:
  1. all member privileges
  1. add/edit/remove resurce categories
  1. add/edit/remove resurces
  1. add/edit/remove notes
- Admin:
  1. all supervisor privileges
  1. member managements
  1. create new shows

Admin can also modify privileges for individual member.
Under members tab in profile page, a privileges edit button at the end of each member’s row.

<Screenshot image="/screenshot/profile_members.png">
  <ScreenshotMark x="93.6%" y="49.5%" width="5%" height="10%" textPosition="right" borderRadius="20px"></ScreenshotMark>
</Screenshot>

- Read: whether the show appears in the members page.
- Edit Category: whether the member is able to edit categories of the show
- Edit Resource: whether the member is able to edit resource of the show
- Edit Episode: whether the member is able to edit episode of the show

<Screenshot image="/screenshot/profile_members_privilege.png">
</Screenshot>