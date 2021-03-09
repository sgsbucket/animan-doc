---
title: Resource Category
---
import Icon from "@material-ui/core/Icon";
import { Screenshot, ScreenshotMark, ScreenshotComment } from "../../src/components/Screenshot"

:::info
- Location: (page) Show / (tab) Categories
:::

Resource Category is a set of meta data that defines a resource that belongs to the category.

To open a category page, select a show, tab to **Resource Category**, and click one of the categories from the list.

<Screenshot image="/screenshot/resource_category_list.png">
  <ScreenshotMark x="96.3%" y="45%" width="5%" height="8%" textPosition="left">Create asset-type resource</ScreenshotMark>
  <ScreenshotMark x="96.3%" y="82.2%" width="5%" height="8%" textPosition="left">Create funpack-type resource</ScreenshotMark>
</Screenshot>

- File type
- Template file
- Work stages
- Possible reviewer/assigner/workers of each work stage

<Screenshot image="/screenshot/resource_category.png">
  
</Screenshot>

## Category Types

There are three main types of a Resource Category.

### shot

  Only be used for the shot category. The shot category a auto generated category that define the shot work flow.

### asset

  The resource category that should be used directly in the shots, ex. characters, backgrounds, should be set to 
  asset type.

### funpack

  The resources that is used for references, planning, brainstorming should be set to funpack type.


## What is a work stage

In Animan, each resource must go through a linear stages from planning to finish.
A resource category defines the stages in order to efficiently manage the work flow.

A work stage has the following properties:

#### Name
The stage name.

#### Type
The stage type"

- work stage
  
  Means it is a stage for worker to work on its file.

- review stage
  
  Means it is waiting for a review to either move forward to back to a work stage for revisioning.

- admin stage

  Means it is currently waiting for an admin user to move forward.
  Usually an admin stage is used for the first stage for planning and last stage for finish stage.

#### Color
The stage color.

In some overview pages, the stage color can help supervisors quickly understand the progress of
different sections of the shots.

<Screenshot image="/screenshot/episode_work_progress.png">
  <ScreenshotComment><a href="episode_progress">Work progress page of an episode</a></ScreenshotComment>
</Screenshot>

#### Reviewer
Define the users who has the privilege to review the stage.

#### Assigner
Define the users who has the privilege to assign the work stage to a worker.

#### Worker
Define the users who are the candidates for assigner to assign work.


## How the stage work

When a resource is created, it is set to its initial stage that is defined in its resource category.
Users can control the stage movement in the resource page or shot page.

<Screenshot image="/screenshot/resource_stages_box.png">
</Screenshot>

### Admin stage
If it is an admin stage, an admin user can add reference resources, add instructions, upload a template file.
Once it is ready to be work on, admin user can click the "Done <Icon>done_outline</Icon>" button to move to the next stage.

### Work stage
When it is on a work stage, the assigned worker can checkout the file, and work on it.

:::caution Checkout File
If a resource is checked out, no user except the person who checked out can modify file until the resource is checked in.

Always checkout a resource before downloading its file so that you get the latest version to work on.
:::

Once the work is ready to be reviewed, the worker upload the file, checkin the resource, and click the "Done <Icon>done_outline</Icon>" button to move to the next stage.

### Review stage
When it is on a review stage, the assigned reviewers can download the file, review it, and check if the work is good enough to move on to next stage.

If the work needs more tweak, the reviewer can click the <Icon>menu</Icon> button and select "Reject <Icon>replay</Icon>" button to move the resource
back to its previous stage, so the worker of that stage can do a revision.

Once the work looks good, the reviewer can click the <Icon>menu</Icon> button and select "Approve <Icon>done_outline</Icon>" button to move the resource to its next stage.

<Screenshot image="/screenshot/resource_stages_box_actions.png">
</Screenshot>