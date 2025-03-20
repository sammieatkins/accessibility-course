---
title: "Alt Text: Intro"
author: Samantha Atkins
description: "How to write useful alt text"
---

# Alt Text
<h2 class="subheading">It's more than just 'dog.jpg'</h2>

Alt text is a short text alternative to the image. In general, alt text is limited to approximately 250 characters or less.

Alt text is **not**:
  
* repetitive  
* additional  
* source or filename  


Alt text goes in the alt attribute of an image tag.

```html
<img src="" alt="" />
```

Now, let's talk about decorative images. These are the ones that don't really convey important information. For these, you can use empty alt text `alt=""`. This tells assistive technology to skip these images.

There are images that serve a specific function, like buttons or icons. For these, the alt text should describe that function. For example, a logo that takes you to the home page should have alt text that says "Home". It shouldn't describe the logo. Alt text for images that are links should follow the same rules for accessible link text.

<!-- make a link here to the link text lesson -->

Pay attention to the purpose and context of the image. These may change the way a description is written and where the description is provided. The same image can have different alt text depending on its context. For example, a picture of a dog on a pet site might just be there for visual appeal. In this case, it would be decorative. However, that same picture of a dog on a quiz about identifying dog breeds would need to describe the dog in the alt text.
