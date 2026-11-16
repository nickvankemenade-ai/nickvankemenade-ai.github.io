---
title: COBI
date: 2024-09-01
featured: true
summary: "An object detector optimised for the Coral Edge TPU, developed for the FIRST Robotics Competition (FRC). Ongoing work, including research into what the network represents internally."
media:
  type: image
  src: /assets/works/cobi/feature-maps.webp
  alt: "internal activations of COBI for one camera frame, ending in the final detections"
  fit: contain
---

COBI detects game pieces in real time from a robot's camera. It is optimised to run on the Coral Edge TPU, a small, low-power accelerator suited to on-robot use.

The current version is specialised for REBUILT, the 2026 FRC game. FRC team 4481 will use COBI in the 2027 season.

The figure is from an old demo from 2025. It shows how the network responds to a single camera frame, ending in the final detections with their confidence scores.

COBI is closed-source for now, so there is no paper or code to link. Whether it will be open-sourced has not been decided.
