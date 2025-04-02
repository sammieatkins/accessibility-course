---
title: ""
---

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
