---
title: why i stopped optimizing for the wrong thing
date: 2026-02-28
tag: reflection
readtime: 4 min read
layout: post.njk
---

for a long time i measured my output in commits, PRs merged, features shipped. the more the better. velocity was the metric and i was going to win at it.

turns out velocity without direction is just vibration.

## the realization

it hit me during a production incident at 3am. we'd shipped twelve features that month. we'd also shipped twelve new ways for the system to break. every feature was a surface area expansion, and we were expanding into the void without a map.

the most productive thing i did that quarter was delete 4,000 lines of code and replace them with 300 lines that actually solved the problem. the system got faster. the on-call got quieter. the team got happier.

## what i optimize for now

- clarity over cleverness
- deletion over addition
- understanding over velocity
- sleep over heroics

none of this is revolutionary. but knowing it and doing it are different things.
