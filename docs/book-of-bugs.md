---
layout: default
title: Book of Bugs
---

# The Book of Bugs

Not software bugs. Human bugs. Recurring failures and how we handle them.

Each bug is a learnable failure pattern.

---

## Bug #1: Optimism Bias

**Symptom:** "This will only take five minutes."

**Root Cause:** Hubris combined with underestimation.

**Severity:** Medium (if solo). Critical (if team).

**How it appears:**
- Feature takes eight hours instead of five minutes.
- Entire sprint derailed.
- St. Good Idea Fairy takes credit.

**Prevention:**
- Estimate in units of 3x your guess.
- Write it down before you commit to it.
- If someone says "only," double your estimate.

**First Known Occurrence:** Antiquity

**Status:** Active. No cure expected.

---

## Bug #2: Premature Implementation

**Symptom:** "Let me just code this real quick."

**Root Cause:** Mistaking "having an idea" for "understanding the requirement."

**Severity:** High (technical debt accrues).

**How it appears:**
- Code works for one case.
- Breaks for five others.
- Architecture was never considered.
- Rewrite required.

**Prevention:**
- Diagram first.
- Explain it to someone else first.
- Write down assumptions before coding.

**Canonical Cure:**
"Draw the box before writing the function."

**First Known Occurrence:** The moment software was invented

**Status:** Active. Eternal.

---

## Bug #3: Diagram Worship

**Symptom:** "The diagram is complete, therefore the system is understood."

**Root Cause:** Confusing representation with reality.

**Severity:** High (breeds false confidence).

**How it appears:**
- Beautiful diagram drawn.
- Shared with enthusiasm.
- Implementation begins.
- Reality disagrees.
- Diagram was wrong all along.

**Prevention:**
- Test the diagram.
- Have someone else read it back to you.
- Assume the diagram is optimistic until Reality votes.

**Canonical Warning:**
"Thou shalt not mistake a coherent diagram for reality."

**First Known Occurrence:** PowerPoint was invented

**Status:** Chronic. Requires vigilance.

---

## Bug #4: Explanation Evasion

**Symptom:** "I don't have time to explain this."

**Root Cause:** Pressure, fatigue, or lack of clarity.

**Severity:** Medium (prevents learning).

**How it appears:**
- Knowledge stays in one person's head.
- That person leaves.
- Knowledge disappears.
- Someone rebuilds it from scratch.

**Prevention:**
- Explain it now, it takes five minutes.
- Explain it later, it takes five hours.
- Write it down regardless.

**Canonical Cure:**
"Explain it to yourself, out loud, alone in a room. If it's confusing to you, it'll be confusing to them."

**First Known Occurrence:** Day 1 of any project

**Status:** Active. Endemic.

---

## Bug #5: Context Loss

**Symptom:** "Why is this even here?"

**Root Cause:** Decision made. Decision forgotten. Code remains.

**Severity:** Medium (causes future rework).

**How it appears:**
- Code exists.
- Comment is missing.
- ADR is missing.
- Reasoning is lost.
- Decision is reinvestigated.
- Same conclusion reached.
- Time and energy wasted.

**Prevention:**
- Record decisions when made, not later.
- Link decision to code.
- Review old decisions quarterly.

**Canonical Cure:**
"An ADR is cheaper than the argument it prevents."

**First Known Occurrence:** First time someone asked "why is this?" and nobody knew

**Status:** Preventable. Rarely prevented.

---

## Bug #6: Certainty Illusion

**Symptom:** "I'm sure about this."

**Root Cause:** Lack of evidence paired with confidence.

**Severity:** High (causes wrong decisions).

**How it appears:**
- Strong opinion stated.
- No evidence provided.
- Decision made anyway.
- Later: "We should have tested that first."

**Prevention:**
- Never "sure" before test.
- Always curious before confident.
- Separate "I believe this" from "I've tested this."

**Canonical Principle:**
"Curiosity is cheaper than certainty."

**First Known Occurrence:** Humans realized they could have opinions

**Status:** Chronic. Manageable through discipline.

---

## Bug #7: The Meeting Multiplier

**Symptom:** Meeting about meeting is scheduled.

**Root Cause:** Communication failure.

**Severity:** Varies (usually medium).

**How it appears:**
- Email is unclear.
- Meeting called to clarify email.
- Nothing is decided in meeting.
- Follow-up email required.
- New meeting scheduled.

**Prevention:**
- Write first. Meet only if necessary.
- State decision/question in first line.
- If it can be async, be async.

**Canonical Cure:**
"Write it. Let people read it. Meet only if someone has a genuinely different interpretation."

**First Known Occurrence:** Zoom was invented

**Status:** Rampant.

---

## How to Handle a Bug

When you discover you've hit a bug:

1. **Name it** — What's the pattern?
2. **Document it** — When did it happen? What was the cost?
3. **Extract the lesson** — What prevents this next time?
4. **Share it** — Don't suffer alone
5. **Move on** — Don't shame yourself. Just learn.

---

## Contributing a Bug

Found a new bug? Open an issue or PR with:

- **Symptom:** What it looks like
- **Root Cause:** Why it happens
- **Severity:** How much it hurts
- **Prevention:** How to avoid it
- **Status:** Is it still active?

---

*The Book of Bugs is proof that we're learning. Every bug recorded is a bug prevented next time.* 🐛
