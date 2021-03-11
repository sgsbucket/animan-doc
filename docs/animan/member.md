---
title: Members
---
import Icon from "@material-ui/core/Icon";
import { Screenshot, ScreenshotMark } from "../../src/components/Screenshot"

Every User is assigned to a role of either Admin, Supervisor, or Member. Each role has a preset of privileges to access the content of Animan.

- Member : artists and animators creating resources and animating shots 
- Supervisor : assigning and reviewing the work of Members 
- Admin : controls the Animan backend and the privilidges of Members, Supervisors, and Clients
- Client : 

## Add Member

:::info
- Privilege: Admin
- Location: (page) Profile / (tab) Members
:::

Let you add a Member from the existing User who has registered on Animan.

#### Steps

1. On the profile page and go to “Users” tab panel.
1. Click on “+ User” button to bring up a search User dialog.
1. Enter the email or name of the user and click “Search”
1. Mouse over the desired user and click “Select >” button

<Screenshot image="/screenshot/profile_members.png">
  <ScreenshotMark x="10%" y="34%" width="14%" height="12%" textPosition="right" borderRadius="10px"></ScreenshotMark>
</Screenshot>

## Invite User
:::info
- Privilege: Admin
- Location: (page) Profile / (tab) Users
:::

Lets you invite a User to join your studio. For security reasons, the User must have a Google, Apple, Facebook, or Twitter account to register with.

#### Steps

1. On the profile page and go to “Users” tab panel.
1. Click on “+ Invite User” button to bring up a inviting dialog.
1. Enter the Email address associated with the user's Google, Apple, Facebook, or Twitter account then click the “Send Invitation” button.
1. The invitation email is sent and contains a link for the User to accept the invitation.  The User may have to check their spam folder.

<Screenshot image="/screenshot/profile_members.png">
  <ScreenshotMark x="13.5%" y="85%" width="21%" height="13%" textPosition="right" borderRadius="10px"></ScreenshotMark>
</Screenshot>

## Member Role and Privileges
:::info
- Privilege: Admin
- Location: (page) Profile / (tab) Members
:::

You can change the role of a User to give the User a set of default privileges.
Under Users tab in Profile page, each User has a dropbox to assign roles.

<Screenshot image="/screenshot/profile_members.png">
  <ScreenshotMark x="83.5%" y="49.2%" width="17%" height="11%" textPosition="right" borderRadius="10px"></ScreenshotMark>
</Screenshot>

- Member:
  1. check out/check in files to edit
  1. promote completed work to the next stage for review
- Supervisor:
  1. all member privileges
  1. add/edit/remove resurce categories
  1. add/edit/remove resurces
  1. add/edit/remove notes
- Admin:
  1. all supervisor privileges
  1. member management
  1. create new shows

Admin can also modify privileges for individual Users.
Under users tab in profile page, there is a privileges edit button at the end of each User’s row.

<Screenshot image="/screenshot/profile_members.png">
  <ScreenshotMark x="93.6%" y="49.5%" width="5%" height="10%" textPosition="right" borderRadius="20px"></ScreenshotMark>
</Screenshot>

- Read: whether the show appears in the User's page.
- Edit Category: whether the User is able to edit categories of the show
- Edit Resource: whether the User is able to edit resources of the show
- Edit Episode: whether the User is able to edit episodes of the show

<Screenshot image="/screenshot/profile_members_privilege.png">
</Screenshot>