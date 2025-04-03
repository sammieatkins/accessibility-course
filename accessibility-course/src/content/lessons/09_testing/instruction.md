---
title: "Testing Instruction"
description: "Learn how to test your website for accessibility using real tools and assistive tech—and why testing early and often makes all the difference."
type: instruction
order: 1
---

# Testing

<h2 class="subheading">Your Mission: Break Your Own Site (Before Someone Else Does)</h2>

You don’t have to wait until the end to start testing—and honestly, you shouldn’t. Every time you add a new component or tweak a layout, that’s your chance to break it on purpose. Not for fun—well, maybe a little—but because that’s what real accessibility testing is. It’s not about checking a box at the finish line. It’s about thinking like the user who can’t see, can’t click, can’t hear, can’t type. And if something falls apart under pressure? Good. That means you found it before they did.

## Why Testing Matters

You wouldn't call your app functional if a key button didn’t work. Accessibility is no different. If someone can’t _access_ your content or navigate your site, that’s a broken experience. You have to test for that just like you'd test anything else.

Plus, testing early and often makes your job _easier_. The more accessibility practices you build in from the start (like we’ve covered in earlier lessons), the less you’ll need to fix later.

## Manual Testing: The Real MVP

Let’s be blunt: **automated tools are helpful, but they’re not enough**. Most automated tools only catch about 30% of accessibility issues. That means **you** have to catch the other 70% using what you’ve learned.

Here’s what automated tools can’t do:

- They can’t tell if your link text makes sense without context.
- They can’t decide if your alt text communicates the right meaning.
- They can’t judge if your heading levels are logical and helpful.
- They can’t guess what a user experience _feels_ like.

That’s where your manual testing comes in.

## Quick Manual Tests to Try Right Now

You don’t need fancy software. Try these simple tests on your own site:

- **Keyboard-only navigation:** Press Tab to move through your site. Can you reach all interactive elements? Do you always know where you are?
- **Screen reader basics:** Try VoiceOver (Mac), NVDA (Windows), or Chrome’s built-in screen reader. Can you understand the page structure and interact with links and buttons?
- **Voice commands:** Use Windows Voice Access or macOS Voice Control. Can you say “Click [element]” and actually trigger it?
- **Zoom to 200% or 400%:** Does your layout break? Is all content still visible and usable?
- **High contrast mode:** Try your OS’s high contrast setting. Are buttons, links, and headings still easy to read?

None of these take more than a few minutes. And they’ll give you _real feedback_ about your users' experience.

## Use the Tools (Just Don’t Rely on Them)

Automatic testing tools are great for quick checks and catching obvious errors—think of them like spellcheck. They’ll catch missing labels, low color contrast, and some ARIA misuse. But they won’t know if your design actually works for users.

Here are some solid tools to add to your workflow:

- **WAVE**: A browser extension that highlights issues right on your page. Set a keyboard shortcut for faster checks.
- **Accessibility Insights**: Microsoft’s tool that walks you through guided tests. Great for learning.
- **Lighthouse**: Built into Chrome DevTools. Offers a quick audit under the “Accessibility” tab.
- **ANDI**: Especially helpful for government projects. Lots of info, though the interface is a bit dense.

Use them to catch common issues, not as a replacement for human judgment.

**Pro tip:** Tie automated testing to habits you already have. Like, while you're testing something for functionality—just add a quick automatic accessibility check while you’re there.

## When to Test

Short answer: **as often as possible**.

- **While building**: If you're working on a new component or layout, do a quick keyboard test.
- **After major changes**: Run an automated scan and do a quick manual sweep.
- **Before launch**: Go all in—keyboard, screen reader, zoom, high contrast, voice commands. Try to break your site.
