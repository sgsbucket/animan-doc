---
title: What happens to audio in a Shot? Is it included in the render or is it ignored?
---
import Icon from "@material-ui/core/Icon";
import { Screenshot, ScreenshotMark } from "../../src/components/Screenshot"

Renderman always renders a Shot into png sequences, therefore the audio in a shot will always be ignored.

Once Renderman renders a Shot from an .fla/.xstage into a png sequence, it then takes the audio from the Cut-Up to export the final video complete with audio.
