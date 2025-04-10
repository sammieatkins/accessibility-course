---
title: "Semantic HTML"
description: "Learn how to write meaningful, accessible HTML using semantic tags that improve structure, usability, and code clarity."
type: instruction
order: 1
---

<!-- !!! personal note: go thorugh the tags list and see if they're stil in use -->

# Semantic HTML

<h2 class="subheading">She's a 10, but she only uses<code>&lt;div&gt;</code></h2>

Look, I’m not saying it’s a dealbreaker—but it’s definitely a red flag.

Using `<div>` for everything might technically work, but it misses the point of HTML entirely. Semantic HTML is about meaning. It's about choosing tags that explain what your content _is_, not just how it should look.

A `<header>` says “intro stuff goes here.” A `<main>` says “this is the core content.” A `<nav>` says “you can get around from here.” Tags like these give your structure purpose—and that purpose matters for screen readers, search engines, and anyone trying to make sense of your code later (yes, including future you).

And hey, we’ve all written a little div soup now and then. But once you know better, you can code better.

## Common Semantic Tags

So, now that we understand the why, let's explore the most commonly used semantic tags that bring this structure to life.

### Structural Tags

You may be asking "So what am I supposed to use if I can't use `<div>`?" Well, there are a ton of HTML tags, and if you've got a bit of time go ahead and look through the [W3Schools HTML Element Reference](https://www.w3schools.com/tags/).

Here are some (somewhat) [commonly used tags](/lessons/06_semantic-html/commonly-used-tags) to help get you started. Some are tags you should be familiar with, and others are a bit more niche, but still useful.

## Lists

There’s more than one kind of list in HTML, and each one has a specific job. Each one comes with built-in semantics that convey the content structure.

- Use [`<ul>`](https://www.w3schools.com/tags/tag_ul.asp) (unordered list) when the order _doesn’t_ matter (e.g., grocery items).
- Use [`<ol>`](https://www.w3schools.com/tags/tag_ol.asp) (ordered list) when the order _does_ matter (e.g., steps in a recipe).
- Use [`<dl>`](https://www.w3schools.com/tags/tag_dl.asp) (description list) when you need to define terms, display paired data, or build FAQs.

## Tables

Tables are great—for displaying data. But they’re not a layout tool.

Here’s how to make your tables meaningful and accessible:

- Use a [`<caption>`](https://www.w3schools.com/tags/tag_caption.asp) to describe what the table is about, especially if the data is complex or multi-dimensional.
- Use [`<th>`](https://www.w3schools.com/tags/tag_th.asp) for header cells, and add `scope="col"` or `scope="row"` to help screen readers understand the relationships between data.
- Don't use tables to control layout. It’s <span id="year"></span>–we have CSS for that.

<!-- Semantic tables convey clear relationships between data points. Assistive tech can read headers aloud, navigate rows and columns, and provide context that would otherwise be lost. But only if your table is coded <em>semantically</em> (AKA correctly). -->

<div class="important-callout">
  <img src="/images/icon_eyes_right.png" alt="" class="icon-eyes" />
  <div>
    <div class="important-content">
      <p>
        <!-- Assistive tech can navigate and interpret tables—but only if they're coded <em>semantically</em>. -->
        Semantic tables convey clear relationships between data points. Assistive tech can read headers aloud, navigate rows and columns, and provide context that would otherwise be lost. But only if your table is coded <em>semantically</em> (AKA correctly).
      </p>
    </div>
  </div>
</div>

<script>
  document.getElementById("year").textContent = new Date().getFullYear();
</script>

## Building a Meaningful `<head>`

The `<head>` tag might not show up on the screen, but it sets the foundation for everything that does. It’s where you define metadata, connect stylesheets, and give browsers and assistive tech important context before the page even renders.

Here’s what you should almost always include:

- `<title>` – Sets the title that appears in the browser tab _and_ gets announced by screen readers when the page loads. **Tip:** Keep it concise and unique—long or repetitive titles are frustrating. I don't even want to read it, let alone listen to a screen reader say it.
- `<meta charset="UTF-8">` – Defines character encoding. This helps prevent weird symbol glitches and ensures your text renders properly.
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">` – Makes your site scale correctly on mobile and zoomed views.
- `<link rel="stylesheet" href="style.css">` – Connects your CSS for styling.
- `<meta name="description" content="Short summary of your page">` – Helps search engines and [assistive technology](/lessons/08_assistive-technology/instruction) understand what the page is about.
- `<!DOCTYPE html>` – Should be the very first line in your file. Tells browsers you’re using HTML5 (required for many semantic tags to behave correctly).
- `<html lang="en">` – Goes outside `<head>`, but still belongs in this conversation. Adding `lang` to your root HTML element ensures screen readers use the right pronunciation rules.

## Use Real Text

If something looks like text, it should _be_ text.

Avoid using images of text—like screenshots of headers, buttons, or infographics—unless absolutely necessary. When text is embedded in an image:

- It can’t be read by screen readers.
- It can’t be resized or styled by the user.
- It can’t be translated.
- It looks worse on high-DPI (Retina) screens because it’s pixelated.

Instead, use semantic HTML and CSS to style real, accessible text. If your image has a lot of text, look into Optical Character Recognition (OCR). Thank me later.

## Leave the Spacing to CSS

This one’s important: don’t use empty HTML tags just to space things out.

If you’re tempted to throw in a stray `<div>` or `<p>` just to create some breathing room, it’s time to bring in CSS. Spacing is a visual concern—and that’s what CSS is for. HTML is about structure and meaning. Every element should represent something real in your content.

Using empty tags for layout muddies the semantic structure and confuses assistive tech. Want a gap between elements? Add a margin or padding rule in your CSS.

## Bonus Semantic Wins

Once you’ve got the main structure down, here are a couple of extra tips that will level up your semantic game:

### Use `lang` on inline text

If you're including a word or phrase in another language, wrap it in a `<span>` and add the correct `lang` attribute. This helps screen readers pronounce it correctly.

```html
<p>This dish is called <span lang="fr">bouillabaisse</span>.</p>
```

### Use MathML for math, not images

If you're showing math content, don’t screenshot an equation. Use [MathML](https://developer.mozilla.org/en-US/docs/Web/MathML) instead. It's designed for accessible, screen-reader-friendly math on the web.

These details might feel small, but they go a long way in making your site more inclusive and robust.

## Now You're Speaking HTML

That was a lot to take in, right? But now that you've got the basics of semantic HTML, you’re in a good place. Learning semantic HTML isn’t just about writing code—it’s about building a solid foundation for everything you’ll do next. When you really understand these tags, you’re not just making things work; you’re making things make sense.

And here’s the best part: it saves you time. Instead of wasting hours reinventing the wheel with JavaScript or custom components for elements like `<dialog>`, `<dl>`, or `<code>`, you can just use the built-in structure. That means faster development, cleaner code, and fewer headaches down the road.
