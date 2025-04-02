---
title: "ARIA Instruction"
---

# ARIA

<h2 class="subheading">The first rule of ARIA is: don’t use ARIA</h2>

Real quick—throwing it back to _wih-cahg_—ARIA is pronounced **ah-ree-uh**. It stands for **Accessible Rich Internet Applications**, and it’s all about making complex web components accessible to users with assistive tech.

But here’s the deal: the **first rule of ARIA is don’t use ARIA.**

Sounds dramatic, right? But it’s true—and it's not just me saying it. Straight from the source:

> “If you can use a native HTML element or attribute with the semantics and behavior you require already built in, _instead of re-purposing an element and adding an ARIA role, state or property to make it accessible_, then do so.”  
> — [W3 First Rule of ARIA Use](https://www.w3.org/TR/using-aria/#rule1)

<!-- actually this one: http://w3.org/TR/using-aria/#rule1 -->

So, why does ARIA exist if we’re not supposed to use it?

Glad you asked.

## When HTML Can’t Do the Job

In the [Semantic HTML lesson](/lessons/06_semantic-HTML), we talked about how HTML gives you a whole toolkit of meaningful elements—`<button>`, `<nav>`, `<header>`, etc.—that already work well with screen readers and other assistive technologies.

But sometimes, we create something that HTML doesn’t have a native tag for. Let’s say:

- You’re building a custom tab panel
- You need a live alert to announce error messages
- You’re styling a listbox from scratch
- You’ve got a visual toggle that acts like a switch

HTML doesn’t offer a built-in way to describe these patterns. That’s where ARIA comes in. It fills the gaps—but only **after** you’ve tried using semantic HTML first.

Now here’s where things get tricky:

You _can_ fake a button by styling a `<div>` and giving it a role—like this:

```html
<div role="button">Submit</div>
```

**Don’t use this knowledge for evil.** (With great power comes great responsibility.)

Just because you can doesn’t mean you should. If a semantic element like `<button>` exists, use it. It’s already accessible, keyboard-friendly, and built to work with assistive tech. That’s the whole point.

ARIA is here to support you when HTML falls short—not to replace it.

## When ARIA _Is_ the Right Tool

Okay, we’ve been hard on ARIA. But when used correctly, it’s powerful—and sometimes the only option.

Here are some situations where ARIA is not just allowed, but encouraged:

### Live Regions

Need to announce changes on the page without a full reload? That’s where ARIA live regions come in.

#### Examples:

- Form errors that appear after a user submits
- Cart updates in an ecommerce site
- Status messages like “Copied to clipboard” or “Message sent”

The magic attribute here is aria-live, which can be set to "polite" (wait for a pause) or "assertive" (interrupt everything). You can also use aria-atomic="true" to make screen readers announce the whole container, not just the changed part.

**Note:** Use "assertive" only when the message is urgent and requires immediate attention. It interrupts the screen reader’s current output, which can be disorienting or frustrating if overused. For most updates, "polite" is the better choice.

```html
<p aria-live="polite" aria-atomic="true">
  Your password must include at least one special character.
</p>
```

This lets users know something changed—even if they’re not looking right at it.

### Multipart Labels

Sometimes a label is made up of multiple pieces. For example, a form might have helper text that expands on a short visible label. ARIA lets you tie these together using aria-labelledby.

```html
<label id="name-label">Name</label>
<span id="name-helper">As shown on your ID</span>
<input aria-labelledby="name-label name-helper" />
```

This way, assistive tech reads both parts as the label.

### Descriptive Labels and Names

When visible labels aren't enough—or don’t exist—you can give screen readers more context using:

- `aria-label` – for adding an invisible label
- `aria-labelledby` – for referencing visible content
- `aria-describedby` – for adding helpful extra context (e.g., “Passwords must be at least 8 characters”)

These are great for inputs, buttons, icons, and anything else where clarity matters.

### Custom Widgets (When You Really Need Them)

If you're building custom components like tab panels, or dropdown menus, semantic HTML probably won’t cut it. These are valid times to use ARIA roles like:

- `role="tablist"`, `role="tab"`, `role="tabpanel"` – for tab interfaces
- `role="alert"` – for urgent messages
- `role="switch"` – for toggles

<span class="uppercase">but</span>: You also need to replicate the expected keyboard behavior. ARIA doesn’t give you functionality—it just helps announce things properly. You still need to write the scripts that make them act like real elements.

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
<span aria-hidden="true">❤️</span>
```

Want to group form controls? There are ARIA roles for that—but in most cases, the native `<fieldset>` and `<legend>` do a better job. Save the fancy ARIA stuff for situations where no semantic tag exists.

## Coming Up

Now that you know what ARIA is—and when not to use it—you’re ready to dig into some real-world examples.

In the next part of this lesson, we’ll go over:

- A quick ARIA cheat sheet (what the attributes do)
- When to use roles vs. labels
- How to test your ARIA with a screen reader

Because adding ARIA is one thing—but making sure it works is where the real skill comes in.
