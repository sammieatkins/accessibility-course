---
title: "Sensory Characteristics Instruction"
description: "Learn how to use color, shape, location, and other sensory cues without excluding users. This lesson shows you how to back up visual and audio indicators with accessible, semantic alternatives."
type: instruction
order: 1
---

# Sensory Characteristics

<h2 class="subheading">Making sense without relying on senses</h2>

## What Are Sensory Characteristics?

Sensory characteristics include things like color, shape, location, size, sound, and orientation. These cues are helpful—unless they’re the only way you’re communicating something important.

<div class="important-callout">
  <img src="/images/icon_eyes_right.png" alt="" class="icon-eyes" />
  <div>
    <div class="important-content">
      <p>
        You should never rely on just one sensory cue to convey meaning. If someone can’t see color, hear a sound, or use a mouse, your design still needs to hold up.
      </p>
    </div>
  </div>
</div>

## Location

“Click the button on the right” sounds innocent—until your layout stacks in mobile view, or someone’s navigating by screen reader with no concept of left or right.

Instead, describe the thing itself. Use labels, icons, or roles. For example: “Click the Download button below the form.”

## Orientation

Orientation refers to whether the screen is in portrait or landscape mode. Some users prefer landscape—it might be easier to hold, read, or interact with that way.

Test both orientations. Use responsive design so your layout works no matter how the screen is turned. This is a great example of how accessible design is also just good design.

## Color

Ah yes, the classic accessibility villain. Red for errors. Green checkmarks. Blue links. The works.

The issue isn’t using color—it’s using only color to communicate meaning. That’s why most browsers underline links by default: to give a second visual cue beyond color alone.

Always pair color with something else: an icon, a text label, a pattern—something that provides a semantic alternative.

But even when color isn’t the only cue, it still needs to be readable. That’s where color contrast comes in. Contrast is about legibility, not just style.

Examples of good use of color:

- “Required fields are marked in red and with an asterisk (\*).”
- A button that uses both a red background and a trash can icon with an accessible name like "Delete".

<!-- add a bit about the activity. can easily be fixed with practice. can make a cute color palette that's still accessible. dive more into contrast. -->

## When Sensory Cues Are Okay

You’re not banned from using color, shape, or position—just make sure they aren’t doing all the work on their own. Back them up with something semantic:

- Labels
- Tooltips
- Icons with accessible names
- Visible text
- ARIA descriptions (when needed)

Not every user experiences content the same way. Color might not register. Orientation might not matter. Layouts might shift. What matters is giving people more than one way to understand what’s going on.
