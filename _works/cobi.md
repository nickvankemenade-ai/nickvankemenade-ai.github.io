---
title: COBI
date: 2024-01-01
featured: true
summary: "An object detector built to run on a Google Edge TPU, developed for the FIRST Robotics Competition (FRC). Ongoing work, including research into what the network represents internally."
media:
  type: image
  src: /assets/works/cobi/feature-maps.webp
  alt: "activations through COBI for one camera frame, from the first layers to the final detections"
  fit: contain
---

## Overview

COBI detects game pieces in real time from a robot's camera. It runs on an Edge TPU, a small accelerator that only executes fully quantised 8-bit models, so the network is designed and trained with that constraint in mind.

## Internal representations

The figure follows a single camera frame through the network. The top panels show feature maps from the stem and the backbone stages (F2 to F4), followed by the feature pyramid levels (P2 to P4). The class heatmaps at three resolutions (CLS 4, 8 and 16) show where the detector places objects, and the last panel shows the resulting detections with their confidence scores.

COBI is closed-source, so there is no paper or code to link.
