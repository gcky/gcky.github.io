---
layout: article
title: What's wrong with the watchOS4 page?
permalink: /articles/scrolljack/
article_title: What's wrong with the watchOS4 page?
---

In Apple's WWDC 2017, one of the six announcements was the new version of watchOS. Along with the new version of iOS and macOS (the name *High Sierra* warrants an article on its own), shiny new pages were set up in the Apple website to showcase the new features of each of these OS updates. I have to admit that I am not particularly interested in the Apple Watch (I don't own one), but I figured I would look into the updates they had for (probably) the only smart-watch platform that has the chance of succeeding; I was greeted with this.

On the surface, everything seems fine, good even. After all, Apple is known for its designs. Centered image of the product with big bold typography and smooth animations, it seems to tick all the boxes of a well designed, modern web page. So what's wrong then? 

**Scrolling**.

The scrolling behaviour on this page does not work as you would expect on a static page. After the animation on the heading finishes, you start scrolling down as a normal visitor would. The page would scroll down as you expect, with the watch going up and away from the screen; another watch comes into the screen from below, eventually moving the the center of the page.

Then it just stops.

The watch stops moving and text starts fading in, yet you haven't stopped scrolling. You keep scrolling, animations start playing in the watch and texts continue to fade in and out. Then all of a sudden, the watch flies off the screen again, replaced by yet another watch moving in from below. The same thing happens repeatedly until you reach the end of the page.

This kind of scrolling behaviour frustrates me, and looking at **this** reddit thread, it looks like I'm not the only one.

## The problem with "scroll-jacking"

If you have an interest in web design, then you would probably know this behaviour as *scroll-jacking*, and as with everything to do with design, people have different opinions on this kind of issues. If you can't already tell, I'm against it, and I have two very simple reasons for this.

### Where was I?

The first reason is functional. Simply put, you cannot easily navigate between the different sections of the page. Let's say you return to the page at a later date, looking for a specific section in the page, how would you do this? There are usually two things that help you with navigating to a particular position on a web page, your spatial sense, and the context.

By spatial sense, I mean the ability to locate something in relation to the environment its in. In the case of a web page, the location of an object in relation to the whole page. The context, on the other hand, is the relationship between an object and its neighbours. 

Typically, on a normal web page, you would go to roughly where you think the section you're looking for is, probably using the scroll bar. Then you would look at what is on the screen and adjust your position accordingly. The first part of this operation uses your spatial sense to locate the section by looking at the entire page. Then you use the context to help you narrow down and eventually get to the desired position.

These two things don't work as well if at all on a page that have been scroll-jacked. Using the watchOS page as an example, the content of the page is not laid out as a single stream of vertically positioned objects, but rather as a slide-show of images and texts. Your spatial sense would not help at all in locating a position within the page, because *there is no spatial order to the content*. You can't say a section is before or after another section in the same sense that a car is in front of or behind another car on the road.

In all fairness, there *is* an order to the objects in the page --- time. You may remember **when** an object should appear as opposed to **where** it should appear. However, there are two reasons why I think this is not as useful. First, we don't often think of events happening at a certain *time* unless we took notice of the time when they happened. More often, we remember events in relation to certain other "anchor" events such as meals or holidays. *I went to the post office after I had my lunch*, or *I did my laundry before the bank holiday*. So unless you know with reasonable accuracy when these "anchor" objects occur in a page, I don't think your sense of time would be very helpful. Second, perhaps more importantly, your spatial sense is useful in a web page because the main navigational control in a browser, the scroll bar, is an accurate and to-scale representation of a location on the page in relation to the whole page. However, in most browsers, there is no time-equivalent navigational control to the scroll bar. Therefore in reality, you can only "jump" to *where* you think a section appears, but not *when* you think a section appears.

So on scroll-jacked pages, you're left with the context to navigate the page. Well, sometimes even that's not an easy task, and you will probably agree with me if you have ever tried finding a scene in a movie. The problem here is, at any given moment, you can only see one frame of the movie. So in order to "access" the context of the frame, you would have to play the frames before and/or after the current frame. The same applies to the slide-show like watchOS page, and the only difference is that you "play" the page by scrolling up and down. I think this is a worse experience than one should find with a well designed static web page, as typically, you would be able to see more content at a time. So the context can be derived much more easily without the need to "scroll around", making it a much more pleasant experience.

### What just happened?

This reason has to do with the emotional impact of the page on the reader, and the main problem here is that the page does not behave as you would expect it to. After you have realised that the scrolling behaviour is not what you would expect, as you scroll down the page, you would not know what it's going to do next. I liken this to walking down a empty alley in the middle of the night. You never know whether there would be a step in front of you or a rapist behind you, and every little thing that moves or makes a sound would make you jump.

May be it's just me, but I wasn't expecting surprises when I decided to visit the watchOS page.

I have a firm belief that unless you have very good reasons to do so, you shouldn't try to surprise your audience in unexpected ways. Always make your audience feel they are in control. That way, they can focus on the content of the page, i.e. what you're trying to convey, rather than busy preparing themselves emotionally for what's coming. Similarly, when they finished reading the page, they should be able to recall the content of the page, not what have surprised or annoyed them. (What's new in watchOS4 again?)

## Does it matter?

You're probably thinking that my answer to this would be a solid **YES**, and we should just burn all the scroll-jacked sites. Well you would be partially correct. My actual answer to this is a boring "It depends".

*It depends* because there are people who likes this sort of aesthetic and style. Looking through the comments on the aforementioned reddit thread, it is not hard to find people who like the watchOS page. On top of that, not every page is built for effectively delivering information or expects their readers to revisit the page. In these cases, the occasional surprise element may actually work in the site owner's favour. After all, this is not the first time Apple has done this, a few years back, virtually all flagship Apple product pages were scroll-jacked. (Only the Mac Pro page from that era survives to this day) I vividly remember my friends being extremely impressed with the the visual elements of those pages to the point where they have the desire to purchase the products. Clearly, the scroll-jackings didn't matter.

The moral of the story: Don't scroll-jack, unless you're Apple, in which case you can probably get away with it.
