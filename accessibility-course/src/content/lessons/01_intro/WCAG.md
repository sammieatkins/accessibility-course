---
title: What is WCAG?
description: "Meet the Web Content Accessibility Guidelines (WCAG)—the foundation of digital accessibility standards. This lesson breaks down the structure of WCAG, what POUR stands for, and why compliance matters for inclusive web design (and avoiding lawsuits)."
type: instruction
order: 2
---

# WCAG

<h2 class="subheading">The acronym nobody can pronounce (but everyone needs)</h2>

First things first, let's pronounce it "wih-cahg". I’ve heard “wee-cag” before and... look, I can’t stop you, but I will judge you.

Let's circle back to what [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) even is. It stands for the Web Content Accessibility Guidelines (you see why we're talking about this first, right?), and it was made by the [World Wide Web Consortium (aka W3C)](https://www.w3.org/). WCAG is what we mean when we say a website _"meets accessibility standards"_, and W3C is the group that decided on those standards. It's not technically legally binding on its own, but most accessibility laws reference it (like ADA or Section 508).

## WCAG Structure

If you've ever updated your phone's OS or had an app stop working until you update it, I'm sure the WCAG structure will look familiar. WCAG has versions: 2.0, 2.1, 2.2, etc. Each version has more success criteria added and evolves based on current tech and needs. Each version is what we call "backwards compatible". Meaning, if your site passes WCAG 2.2 standards, you're also 2.1 and 2.0 compliant.

There are also three levels of conformance (for now):

- Level A
- Level AA
- Level AAA

## <span class="uppercase">pour</span>

<span class="uppercase">POUR</span> is an acronym for **Perceivable, Operable, Understandable, Robust**.

This concept is straight from W3C. It’s the foundation WCAG is built on—every single guideline ties back to one or more of these four principles.

### Perceivable

Can users actually sense the content? Perceivable means making sure there’s a way for everyone to access and understand what’s on the page—no matter how they’re experiencing it. If someone can’t see the screen, there should be alt text or screen reader support that communicates what’s going on. If there’s audio, there should be captions. If it can’t be perceived, it can’t be used. Simple as that.

### Operable

Can users actually use the thing? Operable means all interactive parts of the site— links, buttons, forms—need to be functional for everyone, whether they’re using a mouse, keyboard, or assistive tech. That includes making sure there’s enough time to complete actions, avoiding flashy content that could trigger seizures, and making controls easy to reach and activate.

### Understandable

Understandable means things should be clear, consistent, and easy to follow. That includes using plain language, giving clear instructions, and avoiding confusing layouts or unpredictable interactions. It also means supporting users who might have memory, attention, or processing challenges. When things are easy to understand, people can focus on what they came to do—not how to do it.

### Robust

Can the site handle different tech and tools? Robust means your site should work across a wide range of browsers, screen readers, and assistive technologies—both now and as those tools evolve. That’s where clean, semantic HTML really matters. If your code is solid, assistive tech can do its job. If it’s a mess of div soup, it might work for you, but assistive tech will have no idea what to do with it. More on that in the [Semantic HTML](/lessons/06_semantic-html/instruction) lesson.

## Click Around and Find Out

Now that you know what WCAG is all about, it’s worth seeing how it’s actually structured in practice.

<!-- LINK -->

The [WCAG Quick Reference Guide](https://www.w3.org/WAI/WCAG22/quickref/) is an interactive resource that lets you explore every guideline, success criterion, and technique in one place. You can filter by level (A, AA, AAA), by topic (like text, media, structure), or by technology.

Take a few minutes to click around. Explore the different principles (POUR), and get a feel for how the success criteria are organized. It’s a great way to see how the guidelines translate into real decisions you’ll make while designing or coding a site.

While you're there, check out the links next to each success criterion—the [Understanding](https://www.w3.org/WAI/WCAG22/Understanding/) pages explain the purpose and give real-world examples, while the [How to Meet](https://www.w3.org/WAI/WCAG22/quickref/#how-to-meet) sections offer practical guidance and techniques for implementation. You don’t need to memorize it all—just knowing where to look is half the battle.

## Final Thoughts

<!-- little house? -->

So... WCAG. Hard to say, harder to ignore. If the internet is a house, WCAG is the building code. You can technically _not_ follow it, but someone’s gonna trip over your uneven stairs, sue you, and you’ll deserve it. Alright, enough about lawsuits. Let’s get to work.
