---
title: lm-FineWeb
date: 2026-11-01
featured: false
summary: "A GPT-style language model trained on FineWeb, with RMSNorm, SwiGLU, rotary position embeddings (RoPE) and a custom BPE tokenizer."
thumb: /assets/works/lm-fineweb/thumb.webp
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

<figure>
  <img class="diagram" src="/assets/works/lm-fineweb/architecture.webp" alt="diagram of the model: token embedding, 16 transformer blocks with RMSNorm, attention with RoPE and SwiGLU on a residual stream, a final RMSNorm and the output layer" loading="lazy">
</figure>

## Results

In November 2026, a 257M-parameter model trained on 1.9B tokens reached a validation loss of 3.20.

## Attention

<figure>
  <div class="pair" style="grid-template-columns: 1083fr 655fr;">
    <img src="/assets/works/lm-fineweb/attention-lines.webp" alt="attention on the sentence 'The cat sat on the mat because it was warm.', drawn as lines from each word to the words it looks at" loading="lazy">
    <img src="/assets/works/lm-fineweb/attention-arcs.webp" alt="the same attention pattern drawn as arcs between the words of the sentence" loading="lazy">
  </div>
  <figcaption>Attention on an example sentence, drawn two ways: as lines from each word to the words it looks at (left), and as arcs between the words (right). Brighter and thicker means more attention.</figcaption>
</figure>
