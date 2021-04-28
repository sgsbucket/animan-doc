---
title: Members
---
import Icon from "@material-ui/core/Icon";
import { Screenshot, ScreenshotMark } from "../../src/components/Screenshot"

Each user is assigned the role of either Admin, Supervisor, or Member. Each role has set privileges for access to the content of Animan.

- Member: Artists and animators creating resources and animating shots
- Supervisor: Assigning and reviewing the work of Members
- Admin: Controls the Animan backend and the privilidges of Members, Supervisors, and Clients
- Client: View shots and resources for applicable Shows

## Add Member

:::info
Role: Admin

Location:

- Page: Profile
- Tab: Members
:::

Allows you to assign the role of Member to an existing user registered on Animan.

#### Steps

1. On the "Profile" page, select the "Members" tab.
1. Click on the "+ User" button to search for a User.
1. Enter the email or name of the user and click the "Search" button.
1. Place your mouse cursor over the desired user and click the "Select >" button.

<Screenshot image="/screenshot/profile_members.png">
  <ScreenshotMark x="10%" y="34%" width="14%" height="12%" textPosition="right" borderRadius="10px"></ScreenshotMark>
</Screenshot>

## Invite User

:::info
Role: Admin

Location:

- Page: Profile
- Tab: Users
:::

Allows you to invite a user to join your Studio. For security reasons, the User must have a Google, Apple, Facebook, Slack, or Twitter account to register.

#### Steps

1. On the "Profile" page, select the "Members" tab.
1. Click on the "+ Invite User" button.
1. Enter the email address associated with the user's Google, Apple, Facebook, or Twitter account then click the "Send Invitation" button.
1. The invitation email is then sent to the user containing a link to accept the invitation. The user may have to check their Spam folder.

<Screenshot image="/screenshot/profile_members.png">
  <ScreenshotMark x="13.5%" y="85%" width="21%" height="13%" textPosition="right" borderRadius="10px"></ScreenshotMark>
</Screenshot>

## Member Role and Privileges

:::info
Role: Admin

Location:

- Page: Profile
- Tab: Users
:::

Once assigned, you can change the role of a user to give that user a different set of default privileges.

1. On the Profile page, select the Members tab.
1. Each user has a dropdown that allows you to switch their role"

<Screenshot image="/screenshot/profile_members.png">
  <ScreenshotMark x="83.5%" y="49.2%" width="17%" height="11%" textPosition="right" borderRadius="10px"></ScreenshotMark>
</Screenshot>

Each set role has different privileges, outlined below

- Member:

  1. Check out and work on resources
  1. Check in resources and advance stage for Supervisor review
- Supervisor:
  1. All of the privileges of a Member, plus
  1. Add/edit/remove resource categories
  1. Add/edit/remove resources
  1. Add/edit/remove notes
- Admin:
  1. All of the privileges of a Supervisor, plus
  1. Manage Members
  1. Create new Shows

An Admin can also modify privileges for individual users:

  1. On the Profile page, select the Members tab
  1. There is a button to edit privileges at the end of each user's row.
  1. Each show has a checkbox for each privilege:

<Screenshot image="/screenshot/profile_members.png">
  <ScreenshotMark x="93.6%" y="49.5%" width="5%" height="10%" textPosition="right" borderRadius="20px"></ScreenshotMark>
</Screenshot>

- Read: Toggles whether the Show appears to a user.
- Edit Category: Toggles whether the user is able to edit the Categories of the Show (its stages, the users assigned to it, references, special notes, file types, boilerplate template files, etc.).
- Edit Resource: Toggles whether the user is able to edit resources of the show (its title, tags, and the ability to delete the resource).
- Edit Episode: Toggles whether the user is able to edit episodes of the show (their titles and code labels).

Click the floppy disk icon to save any changes or click outside the dialog box to exit without saving.

<Screenshot image="/screenshot/profile_members_privilege.png">
</Screenshot>
