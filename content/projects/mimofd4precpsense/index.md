---
title: 'MIMOFD4precpSense: Full-Duplex MIMO for Precipitation Sensing'
summary: Beamformer design and simulation tooling for "Near-ground Precipitation Sensing Using Full-duplex MIMO Base Stations." Python package + Jupyter notebooks, with measurement data from the LensFD dataset.
date: 2026-05-06

# Tag with student(s) and faculty using the slug names from data/authors/.
# Add or remove authors as needed.
authors: []

tags:
  - Full-Duplex
  - Massive MIMO
  - Sensing
  - Precipitation
  - Python

# Project links — type can be: site (project page), code, paper, dataset, video, etc.
links:
  - type: code
    url: https://github.com/Rice-Wireless/MIMOFD4precpSense
  - type: dataset
    url: https://renew.rice.edu/dataset-lens.html

# featured: true       # uncomment to highlight on homepage
---

This project provides the beamformer design and measurement-based
simulation tooling supporting the paper *"Near-ground Precipitation
Sensing Using Full-duplex MIMO Base Stations"* (IEEE).

The repository includes:

- **`MIMORad.py`** — a Python package for beamformer design.
- **`simulation.ipynb`** — Jupyter notebook reproducing simulation
  verification against measured channels.
- Post-processed channel measurement data from the **LensFD** dataset.

> [!NOTE]
> **Authors / contributors** — replace the empty `authors:` list above
> with the slugs of the contributing student(s) and faculty (e.g.,
> `- knightly`, `- doost`, plus a student slug). Slugs match the
> filenames under `data/authors/`. This both displays attribution on
> the project page and lets visitors filter the projects collection by
> contributor.
