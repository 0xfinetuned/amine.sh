---
title: the slot machine in your editor
date: 2026-03-17
tag: software
readtime: "5 min read"
layout: post.njk
---

there's an idea that intelligence is equivalent to compression. finding patterns, reducing information into compact representations. LLMs are extraordinary compressors. they've ingested the entire public record of human technical knowledge and distilled it into a next-token prediction function. the output often looks intelligent. but these are statistical word calculators. they don't understand your codebase, they don't know why your system makes the tradeoffs it makes, they can't hold a mental model of state across a distributed system. what they can do is pattern match against everything ever written and produce a statistically plausible response. they're a better google. a better stack overflow.

does the distinction matter? if the output compiles and passes tests do we care whether the machine understood anything? for a lot of tasks no. that's what makes them powerful and dangerous at the same time.

## the variable ratio

using LLMs to write code feels like gambling. you type a prompt and you don't know what you're going to get. sometimes the model oneshots your problem. you won the bet. other times it produces slop. code that looks right but is wrong in ways that take longer to debug than writing it yourself. this is a *variable ratio reinforcement schedule*. same mechanism as slot machines. the unpredictability of the reward is what hooks you. you keep pulling the lever because this time it might work.

you can see the signs in your own behavior.

- you pause mid keystroke waiting for autocomplete.
- you reach for the chat window instead of reading the stack trace.
- you get irritated when the model doesn't solve it first try, not because you lost time but because you lost the dopamine hit.

this is operant conditioning and we are the subjects.

## atrophy

addiction and atrophy are two sides of the same coin. rely on LLMs for debugging too much and debugging on your own becomes insufferable. not because it got harder but because your tolerance for slow methodical thinking got eroded by instant answers. worse you lose your mental model of the system. when the model writes a module for you, you know what it does but not why. you can't trace the architectural decisions because you weren't the one making them. you were reviewing. *review is not authorship.*

## the fork

every software engineer is at a fork right now.

one camp says writing code by hand is over. LLMs do it cheaper and faster so optimize for taste, product intuition, business judgment instead. code is commodity. i call them the taste guys. they're not worried about atrophy because they've redefined skill. they traded the joy of programming for the leverage of directing a machine that programs for them.

the other camp says deep understanding of code is a structural requirement. someone needs to know how the system works, why architecture decisions were made, and be able to fix things when the model can't. you can't review what you can't write. you can't debug what you don't understand.

both are partially right. both are partially deluded about the risks.

## what i actually think

AI is one of the most transformative technologies we've ever experienced. refusing to engage is a mistake. imagine being on the wrong side of the printing press, wrong side of computers, wrong side of the internet. but the embrace everything camp assumes that because the cost of writing code is going to zero the value of understanding code is also going to zero. that doesn't follow.

the framework i keep coming back to:

> separate the software you care about from the software you don't care about.

mission critical code should still be written by hand. you need to understand it, know why it's correct, reason about failure conditions no LLM has seen in training data. this is where atrophy is lethal.

but there's software you never would have written at all. one off scripts, quick prototypes exploring different paths before committing, quality of life automations you'd sketch in your head but never bother implementing. LLMs bring this software into existence. before LLMs there was a set of software worth writing by hand and an invisible set that would have been useful but wasn't worth the effort. that second set now exists. that's not displacement. that's creation.

the printing press didn't eliminate the need for clear thinking. it made it more valuable because the leverage on good thinking was enormous. LLMs are doing the same to engineering. translating intent into syntax is getting cheaper by the month. knowing what to build, why, and how to structure it so it survives reality is not.

**the cost of writing code is going to zero. the cost of knowing what to write is not.**

the slot machine will keep offering pulls. know when to step away.
