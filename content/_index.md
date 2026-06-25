---
title: ""
summary: ""
date: "2026-05-05"
type: "landing"
design:
  spacing: "6rem"
sections:
  - block: "hero"
    design:
      no_padding: false
      css_class: "hero-gradient-overlay dark"
    content:
      eyebrow: "The open-source page builder"
      announcement:
        text: "We are looking for PhD Students"
        link:
          text: "Apply"
      title: "Wireless at Rice"
      text: "The Wireless at Rice Center’s singular focus is advancing mobile communications—faster and better from both network and device points-of-view."
    ce: "section-intro"
    id: "intro"
    As: "section-0267ac1b"
  - block: "research-areas"
    content:
      title: "Research Focus Areas"
      subtitle: "From Information Theory to Open Wireless Platforms"
      text: "Our work spans theoretical foundations, system architectures, and deployed experimentation across the wireless stack."
      items:
        - name: "Wireless Networks & Protocols"
          
          description: "New protocols and system architectures for next-generation wireless networks — full-duplex communications, mmWave, machine-to-machine networking, and information freshness."
          icon: "hero/signal"
          image: "icons/network_protocols/mmwave.png"
        - name: "Massive MIMO & Open Wireless Platforms"
          
          description: "Scalable many-antenna architectures, software-defined baseband, and open-access experimental platforms (WARP, RENEW) for community-driven wireless research."
          icon: "hero/cpu-chip"
          image: "icons/massive_mimo_oss/lab_preview.png"
        - name: "Information Theory & ML for Wireless"
          
          description: "Network information theory, distributed capacity analysis, and machine-learning-driven detection, scheduling, and resource allocation for wireless systems."
          icon: "hero/light-bulb"
          image: "icons/network_protocols/ml_theory.png"
    design:
      layout: "cards"
      spacing:
        padding:
          - "4rem"
          - 0
          - "4rem"
          - 0
    ce: "section-research"
    id: "research"
    As: "section-c6b9157e"
  - block: "collection"
    content:
      title: "News & Updates"
      subtitle: ""
      text: ""
      page_type: "news"
      count: 3
      filters:
        author: ""
        category: ""
        tag: ""
        exclude_featured: false
        exclude_future: false
        exclude_past: false
        publication_type: ""
      offset: 0
      order: "desc"
    design:
      view: "article-grid"
      columns: 3
      css_class: "bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
      spacing:
        padding:
          - "4rem"
          - 0
          - "4rem"
          - 0
    ce: "section-news"
    id: "news"
    As: "section-fa483fb4"
  - block: "collection"
    content:
      title: "Events"
      subtitle: ""
      text: ""
      filters:
        folders:
          - "events"
      count: 0
    design:
      view: "date-title-summary"
      css_class: "bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
      spacing:
        padding:
          - "4rem"
          - 0
          - "4rem"
          - 0
    ce: "section-events-list"
    id: "events"
    As: "section-bfe2cac0"
  - block: "team-showcase"
    content:
      title: "Faculty"
      subtitle: "Multi-disciplinary research, one center"
      text: "Rice Wireless brings together faculty from Electrical & Computer Engineering and Computer Science, working across information theory, signal processing, networking, hardware, and machine learning."
      user_groups:
        - "Principal Investigators"
        - "Postdoctoral Researchers"
        - "PhD Students"
      sort_by: "Params.last_name"
      sort_ascending: true
    design:
      show_role: true
      max_columns: 1
      columns: 1
      spacing:
        padding:
          - "3rem"
          - 0
          - "3rem"
          - 0
    ce: "section-team"
    id: "faculty"
    As: "section-ad6ccaf4"
  - block: "collection"
    content:
      title: "Research Projects"
      subtitle: ""
      text: ""
      filters:
        folders:
          - "projects"
      count: 0
      sort_by: "Weight"
      sort_ascending: true
    design:
      view: "article-grid"
      columns: 2
      show_read_more: false
      show_read_time: false
    ce: "section-projects"
    id: "projects"
    As: "section-37732691"
---