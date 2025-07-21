---
title: Use copyleft licensing
date: "2025-07-21"
categories:
  - Technology
tags:
  - tech
  - open-source
  - programming
---

There is no correlation between open-source code and open relationships. But people unwise enough to use a certain kind of license can be metaphorically forced into a variation of the latter. Shocking? Keep reading.

GPLv3 (and its SaaS equivalent, AGPLv3) is a 'copyleft' license. Whenever any entity (individual or corporate) utilizes GPLv3 (or its prior iterations) licensed code in their own software, they are forced to share the codebase of the said piece of software in a similarly 'free' or open-source manner — thereby maintaining 'reciprocity' and ensuring that originally open-source code doesn't get absorbed into some proprietary codebase.

Now, the other major forms of open-source licenses are 'permissive' licenses — licenses like MIT, Apache, BSD, etc. Projects "protected" by such licenses have no guardrails against entities simply copying code and using it for their own proprietary software.

Or, in other words, they are practically useless, since they mess up the fundamental spirit of open-source software in a bizarre manner. In this day and age, open-sourcing a codebase is seen as somewhat of a "sacrifice" — a copyleft license removes any "pain" associated with such a "sacrifice" by forcing everyone that uses such a codebase to partake in a similar "sacrifice." Under permissive licensing, however, anyone — a big corporation, for example — can rub dirt over the developers of an open-source project by close-sourcing their derived work.

The following is a classic case of permissive licensing: Andrew Tanenbaum once wrote a piece of software called MINIX and licensed it under BSD. Years later, MINIX is used everywhere but is also an integral part of the 'Intel Management Engine,' which, if you are unaware, is a backdoor planted on all Intel CPUs. tl;dr: Man does not get money or credit for creating an extremely important piece of software and is forced to recoil in horror as it (frankly) gets abused.

Permissive licensing is similar to happily agreeing to be taken advantage of: Hence my opening statement. People using such licenses get no credit for their work, no money (barring donations), and unwillingly (or so I hope) contribute to the technological doomsday clock by helping make garbage, spyware-infested proprietary code. Yay.

![reaction](/assets/grugprogrammer.jpg)

<p class="caption">
Protect your code the way he protects his keyboard.
</p>

The moral of the story is thus: If you are interested in open-sourcing your code - please use a copyleft license.
