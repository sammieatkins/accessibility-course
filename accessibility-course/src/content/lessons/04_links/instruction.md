---
title: "Link Text Instruction"
description: "Learn how to write clear, accessible link text, when to use links vs. buttons, and why skip links matter for navigation."
type: instruction
order: 1
---

# Links

<h2 class="subheading">“Click here” is so last decade</h2>

Once upon a time, someone decided that every link should just say “Click here.”

**That someone was wrong. And now we have to fix it.**

That kind of text might seem harmless, but it’s actually one of the most common accessibility mistakes on the web. Assistive tech users—like those using screen readers or voice navigation—often navigate from link to link. When every link says “Click here,” things get confusing real fast.

## What Makes Link Text "Good"?

Okay, so if “Click here” is out… what’s in?

Here's the general principle: good link text is **specific** and **self-explanatory**.

Many assistive tech users navigate by jumping from link to link, meaning they might only hear the link text, not the stuff around it. So the link text has to do all the heavy lifting.

## Consistency

If you have two links that lead to different places, the link text needs to be different.

If two links lead to the same place, they should say the same thing.

Enough said, really.

## Links vs. Buttons

Links are for **navigation**—connecting one page, section, or resource to another. Buttons are for **actions**, like submitting a form, opening a modal, or toggling a menu. If it moves the user somewhere new, use a link. If it makes something happen on the same page, use a button.

<div class="important-callout">
  <img src="/images/icon_eyes_right.png" alt="" class="icon-eyes" />
  <div>
    <h2 class="important-heading">Important</h2>
    <div class="important-content">
      <p>
        Always use the native HTML elements unless you have a very good reason not to. They come with built-in accessibility and behaviors that custom components often forget to replicate.
      </p>
    </div>
  </div>
</div>

## Skip Links: The Unsung Heroes of Navigation

Skip links are a special kind of link that help users skip repeated blocks of content (like headers or navigation) and jump straight to the main part of the page.

### Why They Matter

Screen reader and keyboard-only users often have to move through content one element at a time. If your page has the same nav and header on every page, that’s a lot of unnecessary repetition just to get to the part that changes.

They make your site way more usable—and they’re required by WCAG Level A.

### How to Build One

In HTML you can link an `href` attribute to an `id`. Some sites use this to let users jump directly to specific sections—like linking to a heading further down the page.

This functionality is what makes skip links work. A skip link is typically the first interactive thing on the page. In the code, a skip link appears before the site’s main navigation—usually at the very top of the `<header>`. It’s hidden until focused (usually by pressing Tab), then becomes visible and lets users jump to the `<main>` content.

In this example, the skip link uses `href="#main-content"` to jump to the `id="main-content"` on the `<main>` element. That’s it. Old school, but it works like magic.

```html
<a href="#main-content" class="skip-link">Skip to main content</a>

<!-- Later on your page... -->
<main id="main-content">
  <!-- Your main content here -->
</main>
```

This little bit of CSS hides the skip link offscreen until someone tabs to it. Then it pops into view at the top left. You can style it however you want—just keep in mind our sensory characteristics.

```css
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  /* Add background, text color, padding, etc. as needed */
}

.skip-link:focus {
  /* When focused, it appears on screen at the top left */
  top: 0;
}
```
