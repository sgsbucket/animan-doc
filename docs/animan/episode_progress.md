---
title: Episode Progress
---
import Icon from "@material-ui/core/Icon";
import { Screenshot, ScreenshotMark } from "../../src/components/Screenshot"

:::info
- Location: (page) episode / (tab) progress
:::

This page shows a view of Episode progress that is split to a left section for shots, and right section for Stages.

<Screenshot image="/screenshot/episode_progress.png">
</Screenshot>

## Shots Section

The left section contains small boxes, each box representing a Shot.
The Shots are organized by Act and Scene in the Episode.

The color of the box represents the current Stage of the Shot.
Supervisors can change the Stage color in the Stages sections on the right.

The number on each box shows additional info from the Shot. Users choose which info to show from the tabs above:

- Shot#

  Shows the Shot number in the Scene

- In Progress Refs

  Shows the number of in-progress Resources that a shot References.

- Finished Refs

  Shows the number of finished Resources that a shot References.

## Stage Section

The right section list the stages of the Shot Category. Each row represents a Stage.

A stage row is composed of 3 parts:

- Left side: progress info

  This part can be toggled between two displays:

  1. Animation

    Shows how many seconds of animation are currently at this Stage.
    For work Stages, the data is split into **NEW** (first time at this Atage),
    and **REV** (the work was rejected and back for Revision)

  2. Unassigned

    Shows number of Shots in this Stage that are not currently assigned to a Member.

- Middle: Stage Colour

  Users can click the colour box to change the colour.

- Right: Stage Name