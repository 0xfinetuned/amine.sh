---
title: on building systems that don't fall over
date: 2026-03-12
tag: systems
readtime: 6 min read
layout: post.njk
---

there's a particular kind of satisfaction in building something that just works. not "works in demo conditions" or "works if you squint"—genuinely works, at scale, under pressure, when everything around it is on fire.

most systems fail not because of some exotic edge case, but because someone made an assumption that seemed reasonable at the time. the database will always be reachable. the clock on this machine is accurate. this operation will complete in under 100ms. these are the lies we tell ourselves.

## the first rule

everything fails. your job is to decide how. the difference between a system that degrades gracefully and one that collapses spectacularly is usually about 200 lines of error handling that nobody wanted to write.

> "the best systems are boring. they do exactly what you expect, every single time, and nobody talks about them."

## what i've learned

after years of building infrastructure that other people depend on, here's what actually matters:

- timeouts on everything. everything. no exceptions.
- circuit breakers are not optional, they're table stakes.
- if you can't observe it, you can't operate it.
- the simplest architecture that solves the problem wins.

```rust
// the most important code i've ever written
fn handle_error(e: Error) -> Response {
    log::error!("something broke: {e}");
    metrics::increment("errors.total");
    alert_if_threshold_exceeded();
    Response::graceful_degradation()
}
```

that's it. that's the post. build boring things. handle your errors. go home on time.
