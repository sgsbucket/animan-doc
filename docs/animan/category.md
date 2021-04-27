---
title: Resource Category
---
import Icon from "@material-ui/core/Icon";
import { Screenshot, ScreenshotMark, ScreenshotComment } from "../../src/components/Screenshot"

:::info
Location: 
- Page: Show
- Tab: Categories
:::


Resource Categories are a set of metadata that differentiates groups of resources. Common Resource Categories include Background, Character, and Prop.

## Category Types
There are three main types of a Resource Category.

## Open Category Page
To open a Category page, select a Show, click the Categories tab, and click one of the Categories from the list.

<Screenshot image="/screenshot/resource_category_list.png">
  <ScreenshotMark x="96.3%" y="45%" width="5%" height="8%" textPosition="left">Create asset-type Resource</ScreenshotMark>
  <ScreenshotMark x="96.3%" y="82.2%" width="5%" height="8%" textPosition="left">Create funpack-type Resource</ScreenshotMark>
</Screenshot>

## Create a Resource Category
In the Categories tab of a Show page, you can click the "+" to add a new Resource Category. You will be asked to supply the following required assets:
- Type: Asset or Funpack
- Name: Label for the Category
- Template: The type of file (e.g. concept, design, PSD, etc.)
- File Type: This is based on the template chosen


<Screenshot image="/screenshot/resource_category.png">
  
</Screenshot>

There are three main types of a Resource Category:

### Shot

  The Shot Category is an auto-generated Category that follows the expected Shot Workflow.

### Asset

  The most general Resource Category and is used in the Shots. Characters, backgrounds, etc. should be set to Asset type.

### Funpack

  Resources used for reference, inspiration, planning, and brainstorming should be set to the Funpack Category type.


## What is a Work Stage?

In Animan, each Resource must go through linear Stages from planning to completion. A Resource Category will define the Stages to enable efficient management of workflow.

There are three types of Stage:

#### Name
The Stage name.

#### Type
The stage type

- Work Stage
  
  Resource requires work from a Member to be completed.

- Review Stage
  
  The resource ready for Review by a Supervisor. After review, the Stage will advance if approved or otherwise move back to a Work Stage for Revision.

- Admin Stage

  The resource is waiting for an Admin User to move forward.
  Admin stages are comonly used for the first Planing Stage and last Finished Stage.

#### Colour
The Stage colour.

In some overview pages, the Stage colour can help Supervisors quickly understand the progress of Resources and Shots.

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

When a Resource is created, it is set to the initial Stage that is defined by its Resource Category. Members, Supervisors, and Admins can control the Stage movement in the Resource page or Shot page.

<Screenshot image="/screenshot/resource_stages_box.png">
</Screenshot>

### Admin Stage
At an Admin stage, Admin Users can add reference Resources, instructions, and upload a template file.
Once the Resource is ready for work, Admin Users can click the "Done <Icon>done_outline</Icon>" button to move to the next Stage.

### Work Stage
When a Resource is on a Work Stage, the assigned Member can Checkout the file to work on it.

:::caution Checkout File
If a Resource is checked out, no user except the one who checked it out can modify the file until the Resource is checked-in.

Always checkout a Resource before downloading its file so that you have the latest version to work on.
:::

Once the work is ready to be reviewed, the Member should upload the file, check-in the Resource, and click the "Done [check icon]" button to advance to the next Stage.

### Review Stage
When a Resource is on a Review Stage, the assigned Reviewers can download the file, Review it, and decide if the Resource can move to the next Stage.

If the Resource needs Revision, the Reviewer can click the <Icon>menu</Icon> button and select "Reject <Icon>replay</Icon>" button to move the Resource
back to the previous Stage and make an optional Comment.

Once the work is approved, the Supervisor can click the <Icon>menu</Icon> button and select "Approve <Icon>done_outline</Icon>" option from the drop-down menu to advance the Resource to the next Stage.

<Screenshot image="/screenshot/resource_stages_box_actions.png">
</Screenshot>