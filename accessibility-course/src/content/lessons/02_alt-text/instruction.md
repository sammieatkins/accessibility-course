---
title: "Alt Text: Intro"
author: Samantha Atkins
description: "How to write useful alt text"
---

<!-- ask natalie what format longdescriptions should be in (londesc, aria, linked other page) -->

# Alt Text

<h2 class="subheading">It's more than just 'dog.jpg'</h2>

Alt text is probably something you already think you know about accessibility. Most developers know about alt text because it's one of the default attributes in an `img` tag when you use Emmet shortcuts. There's more to it than just filling it with whatever text, though. Alt text is short for alternative text. It's meant to be an equivalent alternative to a meaningful image. People who can't see the image should still be able to understand what it's supposed to tell them. Alt text has other practical uses too—like boosting SEO and providing a fallback when an image doesn’t load (...not that your images would ever fail to load, obviously).

## How to Write Good Alt Text

Alt text might seem simple at first, but there’s more to it than meets the eye. Mostly because every image—and the reason it’s there—is a little different. Hopefully these guiding principles help you make sense of it.

### Context is Everything

An image can have completely different alt text depending on the context. If it’s used at the top of a blog post about pet ownership, it might just be setting the tone. But if it's part of a quiz asking users to identify dog breeds, suddenly the details of that image are important.

Before you write alt text, ask yourself: Why is this image here? What information would be lost if someone couldn’t see it?
That’s your guiding question. Everything else builds from there.

### Not the Time to Get Wordy

Alt text is meant to be short and sweet, around 125 characters long. If you need more than that, it’s time to switch to a long description. If you're curious about those, check out the [W3C long description tutorial](https://www.w3.org/WAI/tutorials/images/complex/).

### Alt Text Don'ts

Let’s have a quick alt text intervention. We're going to go through a few "don'ts" before we get to the "do's".

First up, alt text shouldn't be **repetitive**. This means alt text shouldn't repeat what's already in the context. Sticking with our dog example, if underneath the image you already talk about the dog breed, don't include the dog breed in the alt text. In this case, the image isn't giving any new information.

We also don’t want alt text to be additional—it’s not the place to break out new ideas. I know, this might sound contradictory. First I said don’t repeat things, now I’m telling you not to add anything new? Well, as Iron Man once said, “There’s a little gray area in there and that’s where you operate.”

For example, think back to that quiz we mentioned earlier about identifying dog breeds. If the image is part of a question asking the user to name the breed, you wouldn’t want to give away the answer in the alt text. That would add new information that isn’t visually conveyed.

Next thing to avoid: don't start with **"image of"**. Assistive technology will already know it's an image because you used an `<img>` tag. In certain circumstances, explaining the type of image is useful (like “Bar graph showing monthly snowfall totals”). But generally, using semantic tags already gives assistive tech a lot of information. Our last major "don't" is making your alt text **just a filename**. Seriously, not helpful. I don't care how descriptive your naming system is.

So, to summarize, **don't**...

- **repeat** what’s already in the surrounding content
- **add** extra information that isn’t visible in the image
- **state the obvious** (like starting with “Image of...”—assistive tech already knows)
- **use filenames** as alt text

### Functional Images

Some images actually have a job to do. Like a logo that links to the homepage, or a magnifying glass that triggers a search. In those cases, don’t describe what the image looks like—describe what it does. So, for that homepage example, the alt text would be `alt="Home"`. Follow the same rules you'd use for writing accessible link text. (More on that in [Lesson 4](/lessons/04_links/instruction).)

## When Not to Use Alt Text

Not every image actually needs alt text. Remember how alt text is meant to provide an equivalent experience? If an image isn’t communicating any meaningful content, it probably doesn’t need to be described. These are called decorative images. Think of things like swirls, dividers, or background shapes—visual flourishes that add style but don’t provide new information.
Hate to break it to you—blind users don't care about aesthetics. Alt text for decorative images is just noise.

## How to Write Alt Text in Your Code

Alright, enough theory, let's get into how to actually code alt text. For our beginner beginners, we'll briefly cover how to write alt text at all. You use the alt attribute inside an `<img>` tag. Like this:

```html
<img src="dog.jpg" alt="Golden retriever lying in grass with tennis ball" />
```

Like we discussed, some images are decorative. If they don’t convey any new information, you don’t need to describe them—but you do need to tell screen readers to skip them. Here's the correct way to do that:

```html
<img src="swirl.svg" alt="" />
```

<div className="mt-0 p-4 flex items-center gap-4 bg-transparent">
  <span
    className="material-symbols--info-outline-rounded text-2xl text-text-color"
    aria-hidden="true"
  ></span>
  <div>
    <h2 className="text-lg font-semibold text-text-color mb-2">Important</h2>
    <p className="text-text-color">
      Leaving out the <code>alt</code> attribute completely is not the same as setting it to empty.
      If you leave it off entirely, some screen readers will try to guess what the image is by
      reading the file name—which is never helpful.
    </p>
  </div>
</div>

<!-- ## Ready to Practice? -->

<!-- Alt text can seem deceptively simple, but as you’ve seen, writing it well takes thought. It’s all about context, clarity, and keeping your user in mind. Now that you’ve got the basics down, let’s put that into action. In the next activity, you’ll look at a few example images and practice writing alt text that’s accurate, concise, and useful. We’ll give you feedback as you go—so don’t worry if you’re still figuring it out. -->

<!--
## Into the Weeds

Now I'm going to get into some more detailed examples. -->

<!-- complex images, groups of images, maps, emotional or tone based stuff. I don't wnat to exactly steal from that lesson with all the examples, though, so wherever you can adjust it to make it our own that would be best. i don't really want it to be recognizabel. -->

<!-- could weave in these into the weeds examples into the activity => give tips as we go. make them do all 5 or something -->
