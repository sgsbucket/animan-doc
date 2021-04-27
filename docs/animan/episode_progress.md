---
title: Episode Progress
---
import Icon from "@material-ui/core/Icon";
import { Screenshot, ScreenshotMark } from "../../src/components/Screenshot"

:::info
Location: 
- Page: Episode
- Tab: Progress
:::

This page shows an Episode's progress. It is split into a left section for Shots and right section for Stages.

<Screenshot image="/screenshot/episode_progress.png">
</Screenshot>

## Shots Section

The left section contains small boxes that represent Shots. The Shots are organized by Act and Scene in the Episode.

The colour of the box represents the current Stage of the Shot. Supervisors can change the Stage colour in the Stages sections on the right.

The number on each box shows there is additional information for the Shot. Users choose what information is shown from the tabs above:

- Shot#

  Shows the Shot number in the Scene

- In Progress Refs

  Shows the number of in-progress Resources that a shot References.

- Finished Refs

  Shows the number of finished Resources that a shot References.

## Stage Section

The right section lists the stages of the Shot Category. Each row represents a Stage.

A stage row is composed of 3 parts:

- Left side: Progress information, which can be displayed in two different ways:

  1. Animation

    Shows how many seconds of animation are currently at this Stage. If it's a Work stage, the data is split into ***NEW*** (first time at this Stage) and ***REV*** (the work was not approved and is back for Revision).

  2. Unassigned

    Shows number of Shots in this Stage that are not currently assigned to a Member.

- Middle: Stage Colour

  Users can click the colour box to change the colour.

- Right: Stage Name