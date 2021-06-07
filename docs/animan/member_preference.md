---
title: Preferences
---
import Icon from "@material-ui/core/Icon";
import { Screenshot, ScreenshotMark } from "../../src/components/Screenshot"

The Preferences page is where users control all of their account information and preferences. It is accessible as soon as the user logs in or else by clicking the user ID menu in the top right and selecting "Profile".

## Notification Preferences

:::info
Role: Member, Supervisor, Admin

Location: Profile
:::

Notification preferences can be set by clicking the "Notification Preferences" button in the "Account Info" box.

<Screenshot image="/screenshot/profile_preferences.png">
    <ScreenshotMark x="14.5%" y="10.5%" width="26%" height="7%" textPosition="right" borderRadius="10px">
    Click to open the dialog
    </ScreenshotMark>
</Screenshot>

There are two notification options for each Show that can be enabled/disabled:

- Renderman Notifications

  Notifications are sent when:

  1. A Cut-Up's upload is complete (sent to Admin users).
  1. A preview has been rendered (sent to the Member/Supervisor of that Resource/Shot).

- Stage Notification

A notification is sent when a Resource is moved to a different Stage.


## Request Account Change

:::info
Role: All

Location: Profile
:::

A user can change the email address associated with their account. However, users can still only login with Google, Apple, Facebook, or Twitter accounts, so the new email must be associated with one of those accounts.

<Screenshot image="/screenshot/profile_user.png">
    <ScreenshotMark x="80.5%" y="29%" width="21.5%" height="10%" textPosition="bottom" borderRadius="10px">
    Click to start the process
    </ScreenshotMark>
</Screenshot>

#### Steps:

1. Once logged in and on the Profile page, click the "Request Account Change" button.
1. Type in the new email address and click the "Confirm" button.
1. Log out of the current account, and log in with the Google, Apple, Facebook, or Twitter account associated with the new email.
1. When logged in to Animan, a dialog pops up to confirm the email change.
1. After confirmed, the change record will be moved to the bottom of the member list found in the User tab on the Profile page.
1. Request an Admin user to view the user's page and confirm the request.