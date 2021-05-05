---
title: Resource Category
---
import Icon from "@material-ui/core/Icon";
import { Screenshot, ScreenshotMark, ScreenshotComment } from "../../src/components/Screenshot"

:::info
Role: Member, Supervisor, Admin

Location: 
- Page: Show
- Tab: Categories
:::


Resource Categories are a set of metadata that differentiates groups of Resources and how they behave. Some common Resource Categories include Background, Character, and Prop.

There are three main types of a Resource Category:

### Shot

  The Shot Category is an auto-generated Category that follows the expected Shot Workflow.

### Asset

  The most general Resource Category and is used in the Shots. Characters, backgrounds, etc. should be set to Asset type.

### Funpack

  Resources used for reference, inspiration, planning, and brainstorming should be set to the Funpack Category type.



## Open Category Page
To open a Category page, select a Show, click the Categories tab, and click one of the Categories from the list.

<Screenshot image="/screenshot/resource_category_list.png">
  <ScreenshotMark x="96.3%" y="45%" width="5%" height="8%" textPosition="left">Create asset-type Resource</ScreenshotMark>
  <ScreenshotMark x="96.3%" y="82.2%" width="5%" height="8%" textPosition="left">Create funpack-type Resource</ScreenshotMark>
</Screenshot>

## Create a Resource Category
In the Categories tab of a Show page, you can click the "+" to add a new Resource Category. You will be asked to supply the following required assets:
- Type: Asset or Funpack.
- Name: Label for the Category.
- Template: The type of file (e.g. concept, design, PSD, etc.).
- File Type: This is based on the template chosen.


<Screenshot image="/screenshot/resource_category.png">
  
</Screenshot>


## What is a Work Stage?

In Animan, each Resource must go through linear Stages from planning to completion. The Resource Category sets the default Stages to enable efficient management of workflow.

There are three components to a Stage:

#### Name
The Stage name.

#### Type
The stage type

- Work Stage
  
  The Resource requires work from a Member to be completed.

- Review Stage
  
  The Resource is ready for Review by a Supervisor. After Review, the Stage will advance if approved or otherwise move back to a Work Stage for Revision.

- Admin Stage

  The Resource requires an Admin user to move it forward to the next Stage. Admin Stages are commonly used for the Planning Stage and the Finished Stage.

#### Colour
The Stage colour.

In some overview pages, the Stage colour can help Supervisors quickly understand the progress of Resources and Shots.

<Screenshot image="/screenshot/Episode_work_progress.png">
  <ScreenshotComment><a href="episode_progress">Work progress page of an Episode</a></ScreenshotComment>
</Screenshot>

#### Reviewer
These users have the privilege to review the Stage.

#### Assigner
These users have the privilege to assign the Work Stage to a Member.

#### Member
The Members who are eligible to be assigned work by the Assigner.


## How the Stages work

When a Resource is created, it is set to the initial Stage that is defined by its Resource Category. Members, Supervisors, and Admins can control the Stage movement in the Resource page or Shot page.

<Screenshot image="/screenshot/resource_stages_box.png">
</Screenshot>

### Admin Stage
At an Admin stage, Admin users can add reference Resources, instructions, and upload a template file. Once the Resource is ready for work, Admin users can click the "Done <Icon>done_outline</Icon>" button to advance to the next Stage.

### Work Stage
When a Resource is at a Work Stage, the assigned Member can check out the file to work on it.

:::caution CHECK OUT A FILE
If a Resource is checked out, no user except the one who checked it out can modify the file until the Resource is checked in again.

Always check out a Resource before downloading its file so that you have the latest version to work on.
:::

Once the work is ready to be reviewed, the Member should upload the file, check in the Resource, and click the "Done [check icon]" button to advance to the next Stage.

### Review Stage
When a Resource is on a Review Stage, the assigned Reviewers can download the file, Review it, and decide if the Resource can move to the next Stage.

If the Resource needs Revision, the Reviewer can click the <Icon>menu</Icon> button and select the "Reject <Icon>replay</Icon>" button to move the Resource
back to the previous Stage and make an optional Comment.

Once the work is approved, the Supervisor can click the <Icon>menu</Icon> button and select the "Approve <Icon>done_outline</Icon>" option from the drop-down menu to advance the Resource to the next Stage.

<Screenshot image="/screenshot/resource_stages_box_actions.png">
</Screenshot>