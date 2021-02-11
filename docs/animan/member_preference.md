---
title: Preferences
---
import Icon from "@material-ui/core/Icon";
import { Screenshot, ScreenshotMark } from "../../src/components/Screenshot"

A member can change some preferences or account information.

## Notification Preferences

:::info
- Location: Profile page
:::

<Screenshot image="/screenshot/profile_preferences.png">
    <ScreenshotMark x="14.5%" y="9.8%" width="26%" height="7%" textPosition="right" borderRadius="10px">
    Click to open the dialog
    </ScreenshotMark>
</Screenshot>

There are two options for each show to toggle:

- Renderman Notifications

  The notification from renderman when

  1. Cutup upload finishes

     send to admin users

  2. A preview rendered

     send to the worker / reviewers of the resource/shot

- Stage Notification

  The notification is sent when a resource is moved to a different stage.


## Request Account Change

A user can change his gmail account that is used on Animan.

<Screenshot image="/screenshot/profile_user.png">
    <ScreenshotMark x="78.5%" y="20%" width="22%" height="14%" textPosition="bottom" borderRadius="10px">
    Click to start the process
    </ScreenshotMark>
</Screenshot>

#### Steps:

1. The logged-in user opens profile page, and click "Request Account Change" button
2. Type in the new gmail account and click "Confirm"
3. Logout the current account, and login with the new gmail account.
4. When login with new gmail account on Animan, a confirm dialog popups to help you confirm the change.
5. After confirmed, the change record will be moved to member list (profile page / members tab).
6. The change request appears on the bottom of the list.
7. Ask an admin user to view the members page, and confirm the request.
8. Done.