---
layout: post
title: Tell, an universal HTML page!
---
*Updated on April 29, 2015*

I have just been writing "Tell", an HTML page whose content is coded in the URL. So you even do not need a server to have your HTML page :).

Here it is: [http://chtixof.github.io/tell/](http://chtixof.github.io/tell/)

And here are the [sources](https://github.com/chtixof/chtixof.github.io/tree/master/tell)

It relies on:

- [lz-string](https://github.com/pieroxy/lz-string) to short-URI-code the content 
- [marked](https://github.com/jorilallo/marked) to encode HTML from markdown code
- [goo.gl](http://goo.gl/) to optionaly shorten the URI

####History:

**Before April 29, 2015**
Tell used [markdown-js](https://github.com/evilstreak/markdown-js), but this markdown compiler does not allow HTML and does not autolink URLs. I also tested [showdown](https://github.com/showdownjs/showdown), but this one generates annoying id's in the tags of the headers. And it does not autolink.
