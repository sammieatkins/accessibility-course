---
title: "Assistive Technology"
description: "Get to know the major types of assistive technology—from screen readers to cognitive tools—and why understanding them is essential for building and testing accessible websites."
type: instruction
order: 1
---

# Assistive Technology

<h2 class="subheading">Your Site Works Great—On Your Machine</h2>

Ah yes, the classic defense: “It works on my machine.” We’ve all said it. Usually when a bug shows up for someone else and we’re staring at our screen like, “Looks fine to me?” But when it comes to accessibility, this mindset causes real harm—because _your machine_ probably isn’t running a screen reader. Or a voice command tool. Or a switch device. Or zoomed to 300%.

In this lesson, we’re taking off the dev goggles and looking at how people actually use the web. You’ll meet the major types of assistive technology, learn how they work, and figure out what you need to keep in mind while building and testing. Because if your site only works _on your machine_, it doesn’t really work.

## Why Learn About Assistive Tech?

You can’t build for what you don’t understand. Assistive technology (AT) isn’t just something you test with at the very end of a project—it’s something that should influence the way you code from the start. Knowing what tools people actually use changes how you think about structure, labels, and interaction.

It also keeps you from playing accessibility whack-a-mole later. Debugging alt text and tab order after launch is way harder (and more frustrating) than doing it right the first time. By learning how these tools work, you’ll be able to test as you go—and make smarter decisions all around.

For a peek into how people actually use assistive tech, check out [WebAIM’s annual screen reader survey](https://webaim.org/projects/screenreadersurvey10/). If you're curious about the full dataset and setup, feel free to dive in—but if you want to skip to the good part, head straight to the [Landmarks and Regions section](https://webaim.org/projects/screenreadersurvey10/#landmarks) and read on from there. It’s light reading, promise.

## What is Assistive Technology?

Assistive technology refers to any device, software, or tool that helps someone interact with digital content in a way that works for _them_. It’s not just “extra features” or special accommodations—it’s how millions of people experience the web every day.

AT can:

- Output information in different formats (like speech or braille),
- Transform how someone navigates (like using voice instead of a mouse), or
- Help with memory, focus, and comprehension.

It might be something you’ve heard of—like a screen reader—or something you’ve never used, like a sip-and-puff switch. Let’s break down the major types.

## Screen Readers

Screen readers convert digital content into speech or braille. They’re used by blind users, some low-vision users, and sometimes people who benefit from listening rather than reading.

They read out loud everything from headings and links to button labels and image descriptions. Users control them entirely with a keyboard or touchscreen gestures.

Examples:

- NVDA (Windows, free)
- JAWS (Windows, paid)
- VoiceOver (built into macOS and iOS)
- Narrator (built into Windows)

## Voice Control Tools

Voice users navigate entirely through spoken commands. They might say things like “Click Home,” “Scroll down,” or “Show Numbers” to interact with web pages.

Voice control software scans what's on the screen and lets users activate elements by name, number, or even inferred function. Some tools also handle dictation.

Examples:

- Dragon NaturallySpeaking (Windows, paid)
- Voice Access (built into Android and Windows)

## Screen Magnifiers & Zoom

Not everyone needs a screen reader—sometimes they just need things _bigger_. Magnification tools let users zoom in on the screen or increase the size of everything globally.

This can mean zooming into a small section of the screen (like using a digital magnifying glass) or scaling up the entire interface. It helps people with low vision read and interact more comfortably.

That said, not everyone wants things bigger. Some users with tunnel vision (a reduced visual field, like looking through a straw) may actually prefer smaller text, so they can fit more content into the small part of the screen they can see clearly. The takeaway? Preferences vary—and your layout should be flexible enough to support both.

Examples:

- ZoomText (Windows)
- Built-in zoom in most operating systems and browsers (like `Ctrl +` or `Cmd +`)

## Switch Devices & Keyboard Navigation

Users with motor impairments may navigate with just one or two switches—or with a keyboard alone. Switch systems move through items one at a time, and the user activates the one they want using a simple input.

For example, a sip-and-puff switch works by detecting air pressure—users "sip" (inhale) or "puff" (exhale) into a tube to make selections. Others use head movement, blinking, or eye-tracking to navigate and click.

Examples:

- Sip-and-puff switches
- Eye-tracking setups
- Basic keyboard navigation using Tab, Shift+Tab, Enter, and Space

## Cognitive and Learning Aids

Assistive tech also supports users who need help with focus, memory, and understanding. These tools can simplify content, reduce distractions, or convert text to speech.

Some highlight words as they’re read aloud. Others block pop-ups or reformat web pages into clean, focused layouts. These tools support users with ADHD, dyslexia, autism, and more.

Examples:

- Text-to-speech software
- Simplified or distraction-free interfaces
- Focus and time management tools

## Assistive Tech ≠ One Size Fits All

Not everyone with the same disability uses the same tools. And lots of users combine them—screen reader + zoom + keyboard nav is a pretty common mix. Some people switch tools based on the task, the device, or how they’re feeling that day.

That’s why accessibility isn’t about coding for “the blind user” or “the voice control user.” It’s about flexibility. Real-world usage means combinations, edge cases, and user choice.

## Assistive Tech: Not Just for the Web

While this course focuses on web-based tools, it’s worth noting that assistive technology isn’t limited to screen readers or switch devices. Broadly speaking, assistive tech is anything that helps someone with a disability navigate the world more effectively—and that includes tools far outside the browser.

Examples:

- A calendar app that helps someone with ADHD stay organized
- Dictation software that lets someone write using their voice
- Custom key mapping for users with limited mobility
- Color overlays or screen filters for users with dyslexia or visual stress

## Final Thoughts

Assistive technology isn’t fringe or niche—it’s _how people use the web_. If your code only works on your device, with your setup, and your habits, it’s not truly working.

You don’t need to be an expert in every tool. But knowing what’s out there—and how your code interacts with it—is what separates good developers from great ones.
