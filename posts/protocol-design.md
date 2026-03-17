---
title: a minimal approach to protocol design
date: 2026-01-30
tag: engineering
readtime: 5 min read
layout: post.njk
---

the best protocols i've worked with share a common trait: you can explain them in a paragraph. the worst ones come with a 40-page specification and a reference implementation that nobody agrees is correct.

simplicity isn't the absence of features. it's the presence of a clear idea, carried through without compromise.

## principles

- one message type per concern. if your message does two things, you have two messages.
- idempotency is not optional. the network will deliver your message twice. or never. deal with it.
- version from day one. you will change this. make that cheap.
- if a human can't trace a message flow on a whiteboard, the protocol is too complex.

i keep coming back to these when things get complicated. they haven't let me down yet.
