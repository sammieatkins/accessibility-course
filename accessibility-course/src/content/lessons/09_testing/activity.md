---
title: "Testing Practice"
description: "Walk through a full accessibility test of your own site using keyboard navigation, screen readers, zoom, and more—while checking your work against real WCAG success criteria."
type: activity
order: 2
activity: TestingPractice
---

# Testing Practice

You’ve learned the tools. You’ve seen the tech. Now it’s time to break your own site—on purpose.

This activity will guide you through a complete accessibility test using the techniques and assistive tech we’ve covered. It’s meant to give you hands-on experience catching real issues that automated tools miss. If your site’s still a work in progress, that’s fine. The point is to **get curious, get uncomfortable, and see where things fall apart.** That’s where the learning happens.

You can test your own site, your course project, or this course site—whatever’s easiest to access.

As you go, you’ll also see callouts for specific WCAG 2.2 success criteria you’re testing—so you can start making those standards second nature.

## Step 1: Keyboard-Only Navigation

Put the mouse down. Seriously—don’t touch it.

### Try this:

- Press `Tab` to move forward
- Press `Shift + Tab` to move backward
- Use `Enter` or `Space` to activate elements
- Use arrow keys inside menus, radio buttons, sliders, and dropdowns

### Look for:

- Is every interactive element reachable?
- Can you **see** which element is focused?
- Do any components trap your focus (modals, menus, carousels)?
- Are custom widgets (like dropdowns or sliders) operable with just a keyboard?

> **WCAG Checkpoints:**
>
> - **2.1.1 Keyboard** (everything works without a mouse)
> - **2.4.7 Focus Visible** (you can always tell where you are)
> - **2.1.2 No Keyboard Trap** (you never get stuck)

> **Note:** If this test already feels frustrating, imagine using the web this way all the time. Your goal is to reduce that friction.

## Step 2: Screen Reader

Time to listen. Screen readers offer a totally different perspective—and sometimes, a totally different experience.

### Turn one on:

- **Mac:** `Command + F5` (VoiceOver)
- **Windows:** `Control + Windows + Enter` (Narrator)
- **iPhone/iPad:** Triple-click side or home button
- **Android:** Enable TalkBack in Accessibility settings

### Try this:

- Use arrow keys (or swipe on mobile) to move through content
- Use Tab to reach links and buttons
- Navigate by heading, region, or landmark

### Ask yourself:

- Does the page **make sense out loud**?
- Are headings clear and properly nested?
- Do links and buttons have meaningful names?
- Are images described appropriately (or skipped if decorative)?
- Is anything repeated, skipped, or jarring?

> **WCAG Checkpoints:**
>
> - **1.1.1 Non-text Content** (alt text for images)
> - **2.4.1 Bypass Blocks** (landmarks for skip links)
> - **2.4.6 Headings and Labels** (clear, descriptive headings)
> - **4.1.2 Name, Role, Value** (elements are announced accurately)

> **Pro tip:** Try closing your eyes and navigating just by audio.

## Step 3: Voice Control

Speak your site into action.

### Set it up:

- **Windows:** Voice Access (`Windows + Control + N`)
- **Android:** Install and enable Voice Access app
- **macOS:** Voice Control via Accessibility settings

### Try saying:

- “Click [button or link text]”
- “Scroll down”
- “Show numbers”
- “Click [number]” (if numbers appear)

### Look for:

- Can you activate all major controls with just your voice?
- Are interactive elements clearly labeled?
- Does anything require guessing, hunting, or weird phrasing?

> **WCAG Checkpoints:**
>
> - **2.5.3 Label in Name** (visible labels match what assistive tech announces)
> - **4.1.2 Name, Role, Value** (again—because it's that important)

## Step 4: Zoom & Magnification

Time to get up close and personal.

### Zoom in:

- Use your browser zoom (`Ctrl` or `Cmd` + `+`)
- Try 200%, then 400%

### Watch for:

- Does content **resize** or just spill off the page?
- Can you still read everything without side-scrolling?
- Are controls still usable and visible?
- Do sticky headers or modals break at high zoom?

> **WCAG Checkpoints:**
>
> - **1.4.4 Resize Text** (text can scale up without loss of content)
> - **1.4.10 Reflow** (you don’t have to scroll in two directions)

## Step 5: High Contrast Mode

Let’s mess with your colors.

### Turn on high contrast:

- **Windows:** Settings > Accessibility > Contrast Themes
- **macOS:** Settings > Accessibility > Display > Increase contrast
- **Browser extensions:** You can also try plugins that simulate high contrast

### Check:

- Are links and buttons still readable?
- Does your site rely on color alone to convey meaning?
- Are icons or indicators still visible?

> **WCAG Checkpoints:**
>
> - **1.4.1 Use of Color** (don’t rely on color alone)
> - **1.4.3 Contrast (Minimum)**
> - **1.4.11 Non-text Contrast** (icons, focus rings, etc.)

## Step 6: Automated Tools (Bonus Round)

Time for the bots.

### Try one or more:

- **WAVE**: Highlights issues in-page
- **Lighthouse**: Chrome DevTools > Lighthouse > Accessibility
- **Accessibility Insights**: Guided walkthrough
- **ANDI**: Advanced info for government-style testing

### Use these tools to:

- Catch missing labels, low contrast, or ARIA misuse
- Scan regions and heading structure
- Double-check your earlier tests

> **Reminder:** Most of these tools flag about 20–30% of actual issues. They’re a great start—but **you** are the best tester here.

## Final Reflection

Take a second and think about what you just experienced.

- What worked well?
- What totally broke?
- What was surprising, confusing, or frustrating?
- What would someone else experience differently?

You don’t have to write a full report. But before you move on, **jot down at least 3 things you’d fix or improve** based on what you noticed today.

## Wrap-Up

Accessibility testing isn’t a box to check. It’s a habit.

The more you do it, the easier it gets—and the better your sites become. So keep breaking things. Keep testing. And keep remembering: **accessibility is part of quality.**

You’re not just coding. You’re building a web that works for real people—and now you have the tools (and WCAG receipts) to back it up.
