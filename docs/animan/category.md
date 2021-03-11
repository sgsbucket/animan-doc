---
title: Resource Category
---
import Icon from "@material-ui/core/Icon";
import { Screenshot, ScreenshotMark, ScreenshotComment } from "../../src/components/Screenshot"

:::info
- Location: (page) Show / (tab) Categories
:::

Resource Category is a set of meta data that differentiates groups of Resources.  Common Resource Categories include  Background, Character, and Prop.

To open a Category page, select a Show, tab to **Resource Category**, and click one of the Categories from the list.

<Screenshot image="/screenshot/resource_category_list.png">
  <ScreenshotMark x="96.3%" y="45%" width="5%" height="8%" textPosition="left">Create asset-type Resource</ScreenshotMark>
  <ScreenshotMark x="96.3%" y="82.2%" width="5%" height="8%" textPosition="left">Create funpack-type Resource</ScreenshotMark>
</Screenshot>

- File type
- Template file
- Work Stages
- Possible Supervisor / Admin / Member of each work Stage

<Screenshot image="/screenshot/resource_category.png">
  
</Screenshot>

## Category Types

There are three main types of a Resource Category.

### Shot

  Only be used for the Shot Category. The Shot Category is an auto generated Category that defines the expected Shot Workflow.

### Asset

  The most general Resource Category used in the Shots. Suitable for Characters, , ex. characters, backgrounds, should be set to 
  asset type.

### Funpack

  Resources used for reference, inspriation, planning, and brainstorming should be set to the Funpack Category type.


## What is a Work Stage?

In Animan, each Resource must go through linear Stages from planning to finish.
A Resource Category defines the Stages to enable efficient management of workflow.

A Work Stage has the following properties:

#### Name
The Stage name.

#### Type
The stage type"

- Work Stage
  
  Resource requires work from a Member to be completed.

- Review Stage
  
  The Resource is waiting for Review by a Supervisor.  Review results will move the Stage forward or back to a Work Stage for Revision.

- Admin Stage

  The resource is waiting for an Admin User to move forward.
  Admin stages are comonly used for the first Planing Stage and last Finished Stage.

#### Color
The Stage color.

In some overview pages, the Stage color can help Supervisors quickly understand the progress of Resources and Shots.

<Screenshot image="/screenshot/episode_work_progress.png">
  <ScreenshotComment><a href="episode_progress">Work progress page of an Episode</a></ScreenshotComment>
</Screenshot>

#### Reviewer
Defines the Users who have the privilege to Review the Stage.

#### Assigner
Defines the Users who have the privilege to Assign the Work Stage to a Member.

#### Member
Defines the Members who can be Assigned Work by the Assigner.


## How the Stages work

When a Resource is created, it is set to the initial Stage that is defined in its Resource Category.
Members, Supervisors, and Admins can control the Stage movement in the Resource Page or Shot Page.

<Screenshot image="/screenshot/resource_stages_box.png">
</Screenshot>

### Admin Stage
At an Admin stage, Admin Users can add reference Resources, instructions, and upload a template file.
Once the Resource is ready for work, Admin Users can click the "Done <Icon>done_outline</Icon>" button to move to the next Stage.

### Work Stage
When a Resource is on a Work Stage, the assigned Member can Checkout the file to work on it.

:::caution Checkout File
If a Resource is Checked out, no User except the one who Checked it out can modify the file until the Resource is Checked in.

Always Checkout a Resource before downloading its file so that you get the latest version to work on.
:::

Once the work is ready to be reviewed, the Member should upload the file, Check in the Resource, and click the "Done <Icon>done_outline</Icon>" button to promote to the next Stage.

### Review Stage
When a Resource is on a Review Stage, the assigned Reviewers can download the file, Review it, and decide if the Resource can move to the next Stage.

If the Resource needs Revision, the Reviewer can click the <Icon>menu</Icon> button and select "Reject <Icon>replay</Icon>" button to move the Resource
back to the previous Stage and make an optional Comment.

Once the work is approve, the Reviewer can click the <Icon>menu</Icon> button and select "Approve <Icon>done_outline</Icon>" button to promote the Resource to the next Stage.

<Screenshot image="/screenshot/resource_stages_box_actions.png">
</Screenshot>