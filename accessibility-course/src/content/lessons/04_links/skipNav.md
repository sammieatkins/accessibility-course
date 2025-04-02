---
title: "Skip Link Practice"
description: "Practice adding a skip link to improve keyboard navigation and support screen reader users."
type: activity
order: 3
activity: "SkipNavPractice"
---

# Add a Skip Link

Screen reader and keyboard users shouldn’t have to tab through every link in the header just to get to the main content. That’s where skip links come in. They’re hidden links that become visible on focus and let users jump straight to the main part of the page.

**Your goal:** Add a skip link to this page so users can bypass the navigation and go directly to the main content.

You’ll need to do two things:

1. Add a link before the `<nav>` that points to the main content area
2. Give your `<main>` element the matching `id="preview-main"` so the link has somewhere to go (if you use `id="main-content"`, then it will skip to *this* site's main-content)

To test your skip link:

1. Press `Tab` to focus it
2. Press `Enter` to activate it

If it works, focus should jump straight to the link in the preview's main content.

(We’ll cover more keyboard testing tips in the [Assistive Technology lesson](/lessons/08_assistive-technology/instruction), but for now, just try it out.)
