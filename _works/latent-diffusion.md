---
title: Conditional and unconditional latent diffusion
date: 2025-10-01
featured: true
summary: "A latent diffusion model trained on CIFAR-10, used to compare how conditional and unconditional diffusion steps move through latent space."
media:
  type: image
  src: /assets/works/latent-diffusion/trajectory-pca.svg
  alt: "diffusion trajectories in latent space projected onto two principal components, coloured by CIFAR-10 class"
  fit: contain
  dim: true
---

## Overview

A latent diffusion model generates images by denoising in the latent space of an autoencoder rather than in pixel space. This project trains one on CIFAR-10 and compares the steps it takes with and without a class condition.

## Latent flow

The figure projects sampling trajectories onto their first two principal components, coloured by the ten CIFAR-10 classes. It shows how class conditioning shapes the path each sample takes through latent space.

There is no publication or code for this project.
