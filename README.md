# Mojito Cocktails  
### A Motion-First Frontend System built with GSAP + React

This repository contains a **production-grade, animation-driven web experience** that explores how **modern frontend engineering** uses **motion, scroll, and timelines** as core architectural tools.

This is not a UI demo.  
It is a **motion system** implemented on the web.

---

![Website](/images/crystalpourweb.png)

---

## Executive Summary

- Designed and built an **end-to-end motion architecture**
- Implemented **scroll-synchronized video playback**
- Orchestrated complex sequences using **GSAP timelines**
- Integrated **React state** with **imperative animation control**
- Optimized performance for scroll-heavy interactions
- Structured the project like a real production codebase

This project demonstrates **how high-impact product & marketing sites are engineered**, not how they look in screenshots.

---

## Why This Project Exists

Most frontend portfolios show:
- Components
- Layouts
- Static transitions

This project was intentionally built to answer deeper questions:

- How does scroll become a **continuous input signal**?
- How do you coordinate **multiple animations without chaos**?
- How do you sync **video frames with user intent**?
- How do you design motion that **communicates**, not decorates?

These are the problems faced in **real, high-end frontend teams**.

---

## System Design Overview

At a high level, the application is structured as:

User Scroll / Interaction
↓
ScrollTrigger Events
↓
GSAP Timelines (Orchestration Layer)
↓
DOM / Video / Mask / Transform Updates

GSAP timelines act as the **single source of truth** for animation state.

---

## Core Engineering Highlights

### 1. Cinematic Hero Animation (Text as Motion)

- Text split at **character and line level** using GSAP SplitText
- Controlled stagger + easing for readable motion
- One-time execution to avoid reflow and distraction

**Engineering focus:**  
Micro-timing, visual hierarchy, first-paint UX.

---

### 2. Scroll-Synchronized Video Playback

- Video playback time bound directly to scroll position
- Implemented using `ScrollTrigger` + timeline scrubbing
- Video optimized via **FFmpeg** for dense keyframes

**Why this matters:**  
Scroll-driven video is a non-trivial interaction used in premium launches (Apple, gaming, automotive).

This implementation avoids autoplay hacks and respects user intent.

---

### 3. Multi-Layer Parallax System

- Independent parallax layers driven by a shared scroll timeline
- Different velocity curves for depth perception
- Responsive logic for mobile vs desktop

**Engineering focus:**  
Scroll math, compositional depth, performance safety.

---

### 4. Timeline-Orchestrated Sections

- GSAP timelines used as **orchestration primitives**
- Overlapping animations using relative offsets
- Predictable sequencing, easy debugging

**Why timelines:**  
They scale. Ad-hoc animations don’t.

---

### 5. Mask-Based Image Reveal (Pinned Scroll)

- CSS `mask-image` combined with GSAP transforms
- Section pinned to viewport during narrative reveal
- Motion reveals content progressively with scroll

**Engineering focus:**  
Advanced CSS + JS interop, scroll-based storytelling.

---

### 6. Interactive Menu System (State + Motion)

- Stateful slider logic in React
- Direction-aware transitions (prev / next)
- Animations re-triggered cleanly on state change

**Engineering focus:**  
Bridging declarative state with imperative motion.

---

## GSAP Features Used (Non-Trivial)

- `gsap.to`, `gsap.from`, `gsap.fromTo`
- `gsap.timeline`
- `ScrollTrigger` (scrub, pin, start/end)
- `SplitText`
- Staggered motion patterns
- Timeline overlap control
- Scroll-scrubbed video timelines
- Responsive animation branches

---

## Technology Stack

- **React**
- **Vite**
- **GSAP**
- **GSAP ScrollTrigger**
- **GSAP SplitText**
- **Tailwind CSS**
- **react-responsive**
- **FFmpeg** (video processing)

---

## Performance Considerations

- ScrollTriggers initialized only when needed
- No unnecessary React re-renders during animation
- Video optimized for scroll scrubbing
- Timelines reused instead of recreated

---

## What This Project Proves

- I can design **motion systems**, not just animations
- I understand **scroll as an interaction model**
- I can combine **React, GSAP, CSS, and media** coherently
- I think in **systems, not snippets**
- I build frontend experiences with **intent**

---

## Live Demo

🔗 *([LIVE URL](https://negroni-tau.vercel.app/))*

---

## Closing Note

This project reflects **frontend engineering beyond CRUD apps**.

Motion here is:
- Intentional
- Structured
- User-driven

Frontend isn’t being replaced.

**Undifferentiated frontend is.**

This project is built to stand out.