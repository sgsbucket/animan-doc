---
id: intro
title: Introduction
slug: /
---

Animan is a web app that helps studios manage the production of broadcast animation.

Animan works with its companion software [Renderman](/renderman/intro) to control and measure production from storyboard to 4k render.

## Features

1. [Online and Offline Rendering](/animan/shot#rendering)
1. [Work Statistics](/animan/episode_progress) and [Quota System](/animan/quota)
1. [Workflow Management](/animan/resource#stages)
1. [Team Management](/animan/member), [Messaging](/animan/resource#notes), and [Logging](/animan/resource#notes)
1. [Revisions](/animan/category#what-is-a-work-stage)
1. [Workfile Version Control](/animan/resource#files) and Backup


### If you are a Member, you can

* View resources that are assigned to you, and [check out the file](/animan/resource#files) to work on.
* View and download the [reference resources](/animan/resource#references) of the resource that you are working on.
* Check in your revisied file for its preview to be rendered by Renderman.
* Promote the resource to its [next stage](/animan/resource#stages) for review by your Supervisor.

### If you are a Supervisor, you can

* [Manage resource categories](/animan/category)
* [Add](/animan/episode#insert-shot), [edit](/animan/episode#edit-shot), and [remove](/animan/shot#info) resources and shots.
* [Add reference](/animan/resource#references) to resources and shots.
* [Assign work](/animan/category#what-is-a-work-stage) to Members.
* Review work and promote a resource to its [next stage](/animan/category#how-the-stage-work) or push it back to previous stage for revision.
* [Give instructions](/animan/resource#add-check-list) when assigning work and pushing back for revision.

### If you are an Admin, you can

* [Add Members](/animan/member#add-member) to your studio, and [manage](/animan/member#member-role-and-privileges) users' privileges.
* [Create a show](/animan/show#add-new-show).
* [Upload a cut-up](/renderman/upload_cutup) animatic to create an episode and its shots.
* Ask Renderman to [render Online and Offline](/animan/show#rendering) quality shots.
* Track work progress by [Member](/animan/quota), [category](/animan/show#show-stats), or [episode](/animan/episode_progress).

### If you are a Client, you can

* View Shots and Resources
* NOT view progress (Episode progress / Show statistics)
* NOT view Show Notes
* NOT view Quota

## General Workflow

1. Admin creates a show, uploads an animatic, and assignes Users to roles and shows.
1. Supervisors create and assign resources to Members.
1. Each resource has a series of stages to reach completion.
1. Members complete stages and assign the resource back to the Supervisor for review.
1. Supervisors approve the work and advance the stage or make notes and assign the resource back to the member for revision.
1. Resources are finished when they reach their final stage.
1. Throughout this process Animan sends new versions of resources to Renderman for updates to video and image output.