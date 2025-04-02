---
title: ""
---
<!-- make sure AI bit is added -->

<!-- this site: http://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA is an incredible article about aria, and i want to amke sure i hit pretty much the same info, but with my own voice and structure. -->

# ARIA

<h2 class="subheading">The first rule of ARIA is to not use ARIA</h2>

<!-- how will a screen reader pronounce the phonetic spellings here? -->

Real quick, throwing it back to wih-cahg, ARIA is pronouced ah-ree-uh. Anyway, it stands for Accessible Rich Internet Applications. Like I mentioned in the subheading, the first rule of ARIA is to not use ARIA. Why, might you ask? Well, I would argue I just told you in the [Semantic HTML Lesson](/lessons/06_semantic-HTML), but just in case you're skipping around I'll spell it out for you. Basically, ARIA is meant to _supplement_ the semantic HTML tags that already exist. Sometimes, we're creating a component that is so complex it doesn't have an existing HTML tag. _That's_ when using ARIA is entirely justified.

The trick with ARIA is that it's totally possible to make a fake `<button>` tag by giving a `<div>` the role of `button` (`<div aria-role="button">`). Now, don't use this knowledge for evil (with great power comes great responsibility or whatever). Keep in mind that if it's possible to use a semantic html element, you should.

<!-- pretty sure i'm paraphrasing something here: Keep in mind that if it's possible to use a semantic html element, you should. i think it's a quote linked in that article i've got at the beginning of this file. get the actual quote and quote it here with the link for reference. -->
<!-- refine the spiderman quote joke -->
<!-- check my div aria role button syntax -->
<!-- list other examples after Sometimes, we're creating a component that is so complex it doesn't have an existing HTML tag.  -->
<!-- double check what ARIA stands for -->

## When _Can_ I Use ARIA?

<!-- mention this use case: Heads up: Just because something looks like a sidebar doesn’t mean it should be wrapped in <aside>. If it’s your main way of getting around, like a lesson menu (wink wink), use <nav> instead—and toss in an aria-label if you’ve got more than one. -->
<!-- wink wink joke because this site has a lesson menu. does that come across? -->

# ARIA

<h2 class="subheading">The first rule of ARIA is: don’t use ARIA</h2>

Real quick—throwing it back to _wih-cahg_—ARIA is pronounced **ah-ree-uh**. It stands for **Accessible Rich Internet Applications**, and it’s all about making complex web components accessible to users with assistive tech.

But here’s the deal: the **first rule of ARIA is don’t use ARIA.**

Sounds dramatic, right? But it’s true—and it's not just me saying it. Straight from the source:

> “If you can use a native HTML element or attribute with the semantics and behavior you require already built in, _instead of re-purposing an element and adding an ARIA role, state or property to make it accessible_, then do so.”  
> — [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)
<!-- actually this one: http://w3.org/TR/using-aria/#rule1 -->

So, why does ARIA exist if we’re not supposed to use it?

Glad you asked.

## When HTML Can’t Do the Job

In the [Semantic HTML lesson](/lessons/06_semantic-HTML/instruction), we talked about how HTML gives you a whole toolkit of meaningful elements—`<button>`, `<nav>`, `<header>`, etc.—that already work well with screen readers and other assistive technologies.

But sometimes, we create something that HTML doesn’t have a native tag for. Let’s say:

- You’re building a custom tab panel
- You need a live alert to announce error messages
- You’re making a dialog/modal with custom behavior
- You’re styling a listbox from scratch
- You’ve got a visual toggle that acts like a switch

HTML doesn’t offer a built-in way to describe these patterns. That’s where ARIA comes in. It fills the gaps—but only **after** you’ve tried using semantic HTML first.

## How ARIA Works

ARIA lets you describe elements to assistive tech using attributes like:

- role – identifies what kind of widget or region something is (like role="alert" or role="navigation")
- aria-label – gives an accessible name when there’s no visible one
- aria-labelledby – lets one element label another
- aria-hidden – hides elements from screen readers
- aria-live – announces dynamic changes

Here are a few quick examples.

Announcing error messages:

```html
<p aria-live="assertive">Please enter your email address.</p>
```

Labeling an input without a visible label:

```html
<input type="search" aria-label="Search site" />
```

Marking something as decorative (and skipping it in screen readers):

```html
<span aria-hidden="true">★</span>
```

Want to group form controls? There are ARIA roles for that—but in most cases, the native `<fieldset>` and `<legend>` do a better job. Save the fancy ARIA stuff for situations where no semantic tag exists.

## Coming Up

Now that you know what ARIA is—and when not to use it—you’re ready to dig into some real-world examples.

In the next part of this lesson, we’ll go over:

- A quick ARIA cheat sheet (what the attributes do)
- When to use roles vs. labels
- How to test your ARIA with a screen reader

Because adding ARIA is one thing—but making sure it works is where the real skill comes in.
