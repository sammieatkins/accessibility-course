---
title: "Heading Levels Instruction"
description: "Learn how to use heading levels to create clear structure—not just visual style—and why it matters for accessibility and navigation."
type: instruction
order: 1
---

# Heading Levels

<h2 class="subheading">Looks aren’t everything</h2>

Sure, headings make your content big, bold, and easy to scan—but they’re doing a lot more than that. For people using assistive technology like screen readers, headings aren't just about looks; they define structure.

## Why Headings Matter

When sighted users skim a page, they often scroll quickly and look for bold or large text to find what they’re looking for. Screen reader users do the same—but instead of scrolling, they navigate by heading levels.

Most screen readers have a shortcut key to jump from heading to heading. If your headings aren’t structured clearly—or worse, if you skipped levels entirely—it’s like handing someone a table of contents with random page numbers and missing chapters.

This isn’t just a helpful feature—it’s how the majority of screen reader users navigate the web.

## Use Headings as Logical Categories

Headings should represent the logical outline of your content. Think of them as categories and subcategories.

For example:

```html
<h1>Lesson Title</h1>
<h2>Key Concept One</h2>
<h3>Supporting Detail A</h3>
<h3>Supporting Detail B</h3>
<h2>Key Concept Two</h2>
```

In this structure, each heading level introduces a more specific part of the topic. The `<h1>` introduces the page, `<h2>` breaks the page into major sections, and `<h3>` supports those sections. You can go all the way to `<h6>`, but most sites rarely need that many levels.

## Don’t Skip Levels

It’s important to go in order. Don’t jump from an `<h2>` to an `<h4>` just because you like how it looks—doing that confuses assistive technology.

If you want your heading to look smaller or styled differently, don’t change the tag. Use the correct heading level to define the structure, then style it with CSS.

Structure and style both matter—but in that order.

### Examples

#### Bad:

```html
<h1>Main Page Title</h1>
<h3>Looks smaller, but this skips "<h2>"!</h3>
```

#### Good:

```html
<h1>Main Page Title</h1>
<h2 class="smaller-heading">
  Styled to look like an h3, but still semantically correct
</h2>
```

**Advanced tip:** If you have recurring content that always appears in the same place across multiple pages—like a "Related Links" section at the end—it’s okay to give it a consistent heading level (like an `<h6>`) for predictability, even if it technically skips a level or two. In that case, consistency across your site takes priority over strict hierarchy.

## Keep Visual Hierarchy Consistent

Once your structure is in place, your styles should reflect it. Every heading level should look like a level—and look the same as others at that level. All your `<h2>`s should share a consistent style. Same with your `<h3>`s, and so on. That visual consistency helps users quickly understand how your content is organized.

It’s okay to vary styling a bit to match your brand, but each level should still feel like part of a clear visual system. Random font sizes and colors for headings can make content harder to follow visually.

### Subtitle Exception

One time it’s okay to break that visual pattern is when you have a subtitle right under your `<h1>`.

```html
<h1>Heading Levels</h1>
<h2 class="subheading">It’s not just about size—it’s about structure</h2>
```

You can style that `<h2>`to look like a subtitle/tagline (smaller font, lighter weight, different color—whatever fits your design). In this case, it doesn't have to match the other `<h2>`s on the page.

## Summary

Heading Level Takeaways:

- Use headings to structure your content logically
- Don’t skip levels—go from `<h2>` to `<h3>`, not `<h2>` to `<h4>`
- Use the correct heading tag based on structure, not appearance
- Style headings with CSS to get the look you want
- Keep styling consistent within each heading level to reinforce your content’s structure

Using proper heading structure isn’t just good for accessibility—it also helps search engines understand your content, makes your site easier to maintain, and gives all users a better experience.
