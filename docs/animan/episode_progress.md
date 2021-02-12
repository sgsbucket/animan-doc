---
title: Episode Progress
---
import Icon from "@material-ui/core/Icon";
import { Screenshot, ScreenshotMark } from "../../src/components/Screenshot"

:::info
- Location: (page) episode / (tab) progress
:::

This page shows a view of episode progress that is split to the left section of shots, and right section of stages.

## Shots section

The left section contains many small boxes, each box represents a shot.
The shots are organized by Act/Scene in the episode.

The color of the box represents the current stage of the shot.
Supervisors can change the stage color in the stages sections on the right.

The number on each box shows an addition info of each shot. You can choose which number to show from the options button:

- Shot#

  Shows the shot number in the scene

- In Progress Refs

  Shows the number of in-progress resources that a shot references.

- Finished Refs

  Shows the number of finished resources that a shot references.

## Stage section

The right section list the stages of the shot category. Each row represents a stage.

A stage row is composed with 3 parts

- Left part: progress info

  This part can be toggled between two information

  1. Animation

    Shows how many seconds of animation are currently in this stage.
    For work stage, the data is split into **NEW** (first time entered this stage),
    and **REV** (the work was rejected and back to revision)

  2. Unassigned

    Shows number of shots in this stage that is currently no worker assigned to.

- Middle: stage color

  You can click the color box to change the color.

- Right: stage name