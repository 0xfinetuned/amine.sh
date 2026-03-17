---
title: notes on distributed consensus
date: 2026-02-14
tag: crypto
readtime: 8 min read
layout: post.njk
---

consensus is hard. not "hard like a coding interview" hard—hard like "there's a mathematical proof that this is impossible under certain conditions and those conditions are basically the internet."

and yet we keep building systems that achieve it, more or less, most of the time. here are some things i've been thinking about.

## the fundamental tension

every consensus mechanism is a tradeoff between three things you want and can only have two of: safety (nothing bad happens), liveness (something good eventually happens), and partition tolerance (the network can be split and we keep going).

this isn't new—it's CAP theorem wearing a different hat. but in the context of decentralized networks, the stakes feel different. we're not just coordinating database replicas. we're coordinating economic actors with misaligned incentives.

## where we are now

the design space has expanded significantly. we've moved past the "just add more proof-of-work" era into something more nuanced. threshold signatures, DAG-based protocols, optimistic rollups—each one making a different bet on what the network looks like.

```rust
// simplified threshold signature check
fn verify_threshold(
    signatures: &[Signature],
    threshold: usize,
    message: &[u8],
) -> bool {
    let valid = signatures.iter()
        .filter(|s| s.verify(message).is_ok())
        .count();
    valid >= threshold
}
```

more notes to come as i dig deeper into the FROST implementation.
