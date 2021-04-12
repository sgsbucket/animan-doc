---
title: What happens to audio in a shot?  Does it render or is it ignored?
---
import Icon from "@material-ui/core/Icon";
import { Screenshot, ScreenshotMark } from "../../src/components/Screenshot"

Renderman always render a shot into png sequences, therefore the audio in a shot
will always be ignored.

Once Renderman renders a shot from a .fla/.xstage into a png sequence, it then
takes the audio from the cutup to export the final movie that has audio.