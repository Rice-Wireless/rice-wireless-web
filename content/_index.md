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
          topics:
            - "Full-Duplex Wireless"
            - "mmWave Communications"
            - "M2M Networks"
            - "Information Freshness"
        - name: "Massive MIMO & Open Wireless Platforms"
          description: "Scalable many-antenna architectures, software-defined baseband, and open-access experimental platforms (WARP, RENEW) for community-driven wireless research."
          icon: "hero/cpu-chip"
          image: "icons/massive_mimo_oss/lab_preview.png"
          topics:
            - "Massive MIMO"
            - "Software-Defined Radio"
            - "Open Wireless Testbeds"
            - "Real-Time Baseband"
        - name: "Information Theory & ML for Wireless"
          description: "Network information theory, distributed capacity analysis, and machine-learning-driven detection, scheduling, and resource allocation for wireless systems."
          icon: "hero/light-bulb"
          image: "icons/network_protocols/ml_theory.png"
          topics:
            - "Network Information Theory"
            - "ML for Wireless"
            - "Resource Allocation"
            - "Wireless Detection"
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
      page_type: "blog"
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
    id: "events-list"
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
      cta:
        text: "View All Members"
        url: "/authors"
        icon: "user-group"
    design:
      show_role: true
      show_organizations: false
      show_interests: true
      show_social: true
      css_class: "bg-gray-50 dark:bg-gray-900 *:!rounded-none"
      spacing:
        padding:
          - "3rem"
          - 0
          - "3rem"
          - 0
    ce: "section-team"
    id: "team"
    As: "section-ad6ccaf4"
  - block: "collection"
    content:
      title: "Active Research Projects"
      subtitle: ""
      text: ""
      filters:
        folders:
          - "projects"
      count: 0
    design:
      view: "article-grid"
      columns: 2
    ce: "section-projects"
    id: "projects"
    As: "section-37732691"
  - block: "contact-info"
    content:
      title: "Contact"
      subtitle: "Get in touch with Rice Wireless"
      visit_title: "Visit Us"
      connect_title: "Connect"
      address:
        lines:
          - "Department of Electrical and Computer Engineering, MS-380"
          - "Rice University"
          - "6100 Main Street"
          - "Houston, TX 77005-1892"
          - "United States"
      email: "wireless@rice.edu"
      phone: "+1 (713) 348-6232"
      social: []
      prospective:
        title: "Prospective Members"
        text: "Interested in joining? We welcome PhD applicants, postdocs, and visiting researchers. See our Join Us page for details."
        button:
          text: "Join Us"
          url: "/opportunities"
      map_url: "https://maps.google.com/?q=Rice+University+Houston+TX"
      show_form: false
    design:
      css_class: "bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
      spacing:
        padding:
          - "4rem"
          - 0
          - "4rem"
          - 0
    ce: "section-contact"
    id: "contact"
    As: "section-b73e707c"
---
