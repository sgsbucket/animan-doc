---
title: How to ask online-rendering to use embeded audio only in Harmony xstage?
---
import { VideoPlayer } from "../../src/components/VideoPlayer"

The embeded audio will be exported to online-rendering movies along with the cutup audio.wav.

To ignore the cutup audio.wav, the xstage must name an audio track with a string that includes "renderman", and also make sure the audio track is not disabled.

When renderman is about to do an online-rendering of a xstage, it ignores the cutup audio.wav if there is an audio track that includes "renderman" in its ID.

:::note
Watch the video to see how to change ID of an audio track.
<VideoPlayer video="/video/xstage_audio_renderman_id.mp4"></VideoPlayer>
:::