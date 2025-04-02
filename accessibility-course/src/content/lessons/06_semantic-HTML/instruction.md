---
title: "Semantic HTML"
---
<!-- go thorugh the tags list and see if they're stil in use -->

<!-- lists => description, ordered, unordered (when to use each) -->
<!-- tables => table captions (optional, but helpful for complex tables), th tags, NOT for layout, etc. -->
<!-- talk about tags like <aside> and <nav> and others. especially ones that can easily replace <div> for a more semantic alternative. -->
<!-- link to some big list of html tags? maybe w3schools has one -->
<!-- what needs to be in the head tag -->
<!-- real text -  maybe better in alt text lesson? -->

# Semantic HTML

<h2 class="subheading">She's a 10, but she only uses <code>&lt;div&gt;</code></h2>

Look, I’m not saying it’s a dealbreaker—but it’s definitely a red flag.

Using `<div>` for everything might technically work, but it misses the point of HTML entirely. Semantic HTML is about meaning. It's about choosing tags that explain what your content _is_, not just how it should look.

A `<header>` says “intro stuff goes here.” A `<main>` says “this is the core content.” A `<nav>` says “you can get around from here.” Tags like these give your structure purpose—and that purpose matters for screen readers, search engines, and anyone trying to make sense of your code later (yes, including future you).

And hey, we’ve all written a little div soup now and then. But once you know better, you can code better.

## Common Semantic Tags

Let’s go beyond `<div>` and `<span>`.

### Structural Tags
You may be asking "So what am I supposed to use if I can't use `<div>`?" Well, there are a ton of HTML tags, and if you've got a bit of time go ahead and look through the [W3Schools HTML Element Reference](https://www.w3schools.com/tags/). 

I've compiled some semantic tags I didn't know about that are super cool.
<!-- insert the cool ones -->

These are interesting and all, but here are some you should start using on the daily:
<!-- insert more typical ones -->

## Lists

Not all lists are created equal.

- Use `<ul>` (unordered list) when the order _doesn't_ matter (e.g., grocery items).
- Use `<ol>` (ordered list) when the order _does_ matter (e.g., steps in a recipe).
- Use `<dl>` (description list) for pairs of terms and definitions.

Each one comes with built-in semantics that screen readers use to describe the content structure.

## Tables

Tables are great—for data. Not layout.

Here’s how to use them properly:

- Include a `<caption>` to describe what the table is about (especially for complex data).
- Use `<th>` for headers and scope them with `scope="col"` or `scope="row"` to make things clear.
- Never use tables to layout your page. It’s 2025. We have CSS.

## The `<head>` Game

Don’t forget the silent MVP: the `<head>` tag.

Here’s what you should almost always include:

- `<title>` – What shows up in the browser tab
- `<meta charset="UTF-8">` – Character encoding (UTF-8 is standard)
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">` – Essential for responsive design
- `<link rel="stylesheet" href="style.css">` – CSS link
- `<meta name="description" content="Short summary of your page">` – Helps with SEO

Bonus: Semantic HTML inside your head tag = better metadata, better discoverability, and better accessibility.

### Bonus Semantic Wins

Once you’ve got the main structure down, here are a couple of extra moves that level up your semantic game:

- **Use `lang` on inline text**:  
  If you're including a word or phrase in another language, wrap it in a `<span>` and add the correct `lang` attribute. This helps screen readers pronounce it correctly.  

  ```html
  <p>This dish is called <span lang="fr">bouillabaisse</span>.</p>
  ```
- **Use MathML for math, not images**:
If you're showing math content, don’t screenshot an equation. Use [MathML](https://developer.mozilla.org/en-US/docs/Web/MathML) instead. It's designed for accessible, screen-reader-friendly math on the web.

These details might feel small, but they go a long way in making your site more inclusive and robust.