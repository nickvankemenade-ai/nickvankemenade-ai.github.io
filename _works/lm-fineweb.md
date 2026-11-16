---
title: lm-FineWeb
date: 2026-11-01
featured: false
summary: "A GPT-style language model trained on FineWeb, with RMSNorm, SwiGLU, rotary position embeddings (RoPE) and a custom BPE tokenizer."
links:
  - label: Code
    url: https://github.com/nickvankemenade-ai/lm-FineWeb
---

## Overview

lm-FineWeb trains a decoder-only transformer on FineWeb, a large dataset of filtered web text.

## Architecture

- **RMSNorm** for layer normalisation
- **SwiGLU** activations in the feed-forward layers
- **Rotary position embeddings (RoPE)** to encode token positions
- A **custom byte-pair encoding (BPE) tokenizer**, trained for this project

## Results

In November 2026, a 257M-parameter model trained on 1.9B tokens reached a validation loss of 3.20.
