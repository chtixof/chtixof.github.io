---
layout: post
title: Tell, an universal HTML page!
---
*Updated on 2026-08-19*

I have just been writing "Tell", an HTML page whose content is coded in the URL. So you even do not need a server to have your HTML page :).

Here it is: [http://chtixof.github.io/tell/](http://chtixof.github.io/tell/)

And here are the [sources](https://github.com/chtixof/chtixof.github.io/tree/master/tell)

It relies on:

- [lz-string](https://github.com/pieroxy/lz-string) to short-URI-code the content 
- [marked](https://github.com/jorilallo/marked) to encode HTML from markdown code

### History

#### Before 2015-04-29

Tell used [markdown-js](https://github.com/evilstreak/markdown-js), but this markdown compiler does not allow HTML and does not autolink URLs. I also tested [showdown](https://github.com/showdownjs/showdown), but this one generates annoying id's in the tags of the headers. And it does not autolink.

#### 2026-08-19

- removed shortcuts management with goo.gl
- updated text
- improved display on mobile devices