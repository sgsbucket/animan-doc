---
title: Preferences
---
import Icon from "@material-ui/core/Icon";
import { Screenshot, ScreenshotMark } from "../../src/components/Screenshot"

Control all User preferences and account information here.

## Notification Preferences

:::info
- Location: (page) Profile
:::

<Screenshot image="/screenshot/profile_preferences.png">
    <ScreenshotMark x="14.5%" y="9.8%" width="26%" height="7%" textPosition="right" borderRadius="10px">
    Click to open the dialog
    </ScreenshotMark>
</Screenshot>

There are two options for each Show to toggle:

- Renderman Notifications

  Notifications are sent when:

  1. Cut-up upload finishes

     sent to Admin users

  2. A preview has rendered

     sent to the Member / Supervisor of the Resource / Shot

- Stage Notification

  Notification is sent when a Resource is moved to a different Stage.


## Request Account Change

:::info
- Location: (page) Profile
:::

A User can change the email address associated with their account.  Can only login with Google, Apple, Facebook, or Twitter accounts so the new email must be associated with one of those accounts.

<Screenshot image="/screenshot/profile_user.png">
    <ScreenshotMark x="78.5%" y="20%" width="22%" height="14%" textPosition="bottom" borderRadius="10px">
    Click to start the process
    </ScreenshotMark>
</Screenshot>

#### Steps:

1. The logged-in User opens profile page, and click "Request Account Change" button
2. Type in the new email address and click "Confirm"
3. Logout the current account, and login with the Google, Apple, Facebook, or Twitter account associated with that email.
4. When logged into Animan, a confirm dialog pops up to confirm the change.
5. After confirmed, the change record will be moved to member list (Profile page / User tab).
6. The change request appears on the bottom of the list.
7. Ask an admin user to view the Users page, and confirm the request.
8. Done.