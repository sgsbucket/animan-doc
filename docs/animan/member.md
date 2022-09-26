---
title: Members
---
import Icon from "@material-ui/core/Icon";
import { Screenshot, ScreenshotMark } from "../../src/components/Screenshot"

Each user is assigned the role of either Admin, Supervisor, or Member. Each role has set privileges for access to the content of Animan.

- Member: Artists and animators creating Resources and animating Shots.
- Supervisor: Users who assign work to and review the work of Members.
- Admin: Users who control the Animan backend and the privileges of Members, Supervisors, and Clients.
- Client: Users from outside the Studio who can view Shots and Resources for applicable Shows.

## Add Member

:::info
Role: Admin

Location:

- Page: Profile
- Tab: Members
:::

This function allows Admin users to assign the role of Member to an existing user registered on Animan.

#### Steps

1. On the Profile page, select the Members tab.
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

This function allows an Admin user to invite a new user to join your Studio. For security reasons, the user must have a Google, Apple, Facebook, Slack, or Twitter account in order to register.

#### Steps

1. On the Profile page, select the Members tab.
1. Click on the "+ Invite User" button.
1. Enter the email address associated with the user's Google, Apple, Facebook, or Twitter account and then click the "Send Invitation" button.
1. The user will then receive the invitation email, which contains a link to accept the Animan invitation. The user may have to check their Spam folder.

<Screenshot image="/screenshot/profile_members.png">
  <ScreenshotMark x="13.5%" y="87%" width="21%" height="13%" textPosition="right" borderRadius="10px"></ScreenshotMark>
</Screenshot>

## Member Role and Privileges

:::info
Role: Admin

Location:

- Page: Profile
- Tab: Users
:::

Once a user has a role assigned to them, you can still change their role to give that user a different set of default privileges.

1. On the Profile page, select the Members tab.
1. Each user has a drop-down menu that allows you to switch their role.

<Screenshot image="/screenshot/profile_members.png">
  <ScreenshotMark x="83%" y="50%" width="17%" height="11%" textPosition="right" borderRadius="10px"></ScreenshotMark>
</Screenshot>

Each role has different default privileges:

- Member:
  1. Check out and work on Resources.
  1. Check in Resources and advance their stage for Supervisor review.
- Supervisor:
  1. All of the privileges of a Member, plus:
  1. Add/edit/remove Resource Categories.
  1. Add/edit/remove Resources.
  1. Add/edit/remove Notes.
- Admin:
  1. All of the privileges of a Supervisor, plus:
  1. Manage Members.
  1. Create Shows.

An Admin can also modify privileges for individual users:

  1. On the Profile page, select the Members tab.
  1. There is a button at the end of each user's row to edit privileges.
  1. Each Show has a checkbox for each privilege:

<Screenshot image="/screenshot/profile_members.png">
  <ScreenshotMark x="93.1%" y="50.4%" width="5%" height="10%" textPosition="right" borderRadius="20px"></ScreenshotMark>
</Screenshot>

- Read: Toggles whether the Show appears to a user.
- Edit Category: Toggles whether the user is able to edit the Categories of the Show (its stages, the users assigned to it, references, special notes, file types, boilerplate template files, etc.).
- Edit Resource: Toggles whether the user is able to edit Resources of the Show (its title, tags, and the ability to delete the Resource).
- Edit Episode: Toggles whether the user is able to edit Episodes of the Show (their titles and code labels).

Click the floppy disk icon to save any changes or click outside the dialog box to exit without saving.

<Screenshot image="/screenshot/profile_members_privilege.png">
</Screenshot>

## Edit Member

:::info
Role: Member

Location:

- Page: Profile
:::

Members may edit their Display Name.  Edit by clicking the pencil icon to the right of the Display Name in the Account Info section of the Profile page.

<Screenshot image="/screenshot/profile_member_rename.png"></Screenshot>