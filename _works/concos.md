---
title: ConCoS
date: 2026-08-01
featured: true
summary: "A loss term for encoder-decoder models that separates latent vectors by direction and magnitude: direction encodes class, while magnitude stays free to encode variation within a class."
media:
  type: image
  src: /assets/works/concos/scaling-grid.png
  alt: "decoded digits for increasing ConCoS loss weight λ (rows) and radial scaling γ (columns)"
  fit: contain
links:
  - label: Paper
    url: https://zenodo.org/records/24282231
  - label: Code
    url: https://github.com/nickvankemenade-ai/concos
bibtex: |
  @misc{vankemenade2026concos,
    title     = {Learning Interpretable Generative Manifolds through Contrastive Cosine Similarity},
    author    = {van Kemenade, Nick},
    year      = {2026},
    publisher = {Zenodo},
    doi       = {10.5281/zenodo.24282231},
    url       = {https://zenodo.org/records/24282231}
  }
---

This page summarises the paper [*Learning Interpretable Generative Manifolds through Contrastive Cosine Similarity*](https://zenodo.org/records/24282231) (2026). The paper has the full method, experiments and results.

## Approach

Contrastive Cosine Similarity (ConCoS) trains latent vectors directly: vectors from the same class are pulled together in angle, and vectors from different classes are pushed apart. This gives the latent space a directional and a radial separation. Direction encodes class identity, and magnitude is left free to encode variation within a class.

## Results

Across twelve models trained on MNIST, Fashion-MNIST and EMNIST Letters, ConCoS models show much larger cosine gaps between classes. They also keep their classification accuracy better when latent vectors are scaled radially, and show more structural variation under that scaling.

The figure shows decoded samples for increasing ConCoS loss weight λ (rows, where λ = 0 is the baseline without ConCoS) and increasing radial scaling γ of the latent vector (columns). See the paper for the full analysis.

## Next steps

The paper proposes replacing discrete class labels with a frozen pairwise similarity critic, such as one taken from a pretrained encoder.
