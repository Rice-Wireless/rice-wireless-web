---
title: ''
date: 2026-05-05
type: landing

design:
  spacing: '6rem'

sections:
  - block: hero
    id: about
    content:
      title: |
        **Wireless at Rice Center**
      text: |
        We are a multi-faculty research center at Rice University advancing mobile communications — faster and better, from both network and device points of view. Our work blends new architectures and protocols with information-theoretic analysis, machine learning, and at-scale wireless experimentation.
      primary_action:
        text: Meet the Team
        url: '#team'
        icon: hero/user-group
      secondary_action:
        text: Our Research
        url: '#research'
        icon: hero/academic-cap
    design:
      css_class: ""
      background:
        gradient_mesh:
          enable: true
          style: "waves"
          animation: "pulse"
          intensity: "medium"
          colors:
            - "primary-500/30"
            - "blue-600/20"
            - "indigo-600/15"

  - block: research-areas
    id: research
    content:
      title: Research Focus Areas
      subtitle: From Information Theory to Open Wireless Platforms
      text: Our work spans theoretical foundations, system architectures, and deployed experimentation across the wireless stack.
      items:
        - name: Wireless Networks & Protocols
          description: New protocols and system architectures for next-generation wireless networks — full-duplex communications, mmWave, machine-to-machine networking, and information freshness.
          icon: hero/signal
          gradient: from-blue-400 to-indigo-600
          status: active
          topics:
            - Full-Duplex Wireless
            - mmWave Communications
            - M2M Networks
            - Information Freshness
        - name: Massive MIMO & Open Wireless Platforms
          description: Scalable many-antenna architectures, software-defined baseband, and open-access experimental platforms (WARP, RENEW) for community-driven wireless research.
          icon: hero/cpu-chip
          gradient: from-purple-400 to-pink-600
          status: active
          topics:
            - Massive MIMO
            - Software-Defined Radio
            - Open Wireless Testbeds
            - Real-Time Baseband
        - name: Information Theory & ML for Wireless
          description: Network information theory, distributed capacity analysis, and machine-learning-driven detection, scheduling, and resource allocation for wireless systems.
          icon: hero/light-bulb
          gradient: from-green-400 to-emerald-600
          status: active
          topics:
            - Network Information Theory
            - ML for Wireless
            - Resource Allocation
            - Wireless Detection
    design:
      layout: cards
      css_class: "bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
      spacing:
        padding: ["5rem", 0, "5rem", 0]

  - block: team-showcase
    id: team
    content:
      title: Faculty
      subtitle: Multi-disciplinary research, one center
      text: Rice Wireless brings together faculty from Electrical & Computer Engineering and Computer Science, working across information theory, signal processing, networking, hardware, and machine learning.
      user_groups:
        - Principal Investigators
        - Postdoctoral Researchers
        - PhD Students
      sort_by: 'Params.last_name'
      sort_ascending: true
      cta:
        text: View All Members
        url: /authors
        icon: user-group
    design:
      show_role: true
      show_organizations: false
      show_interests: true
      show_social: true
      css_class: "bg-gray-50 dark:bg-gray-900"
      spacing:
        padding: ["3rem", 0, "3rem", 0]

  - block: collection
    id: projects
    content:
      title: Active Research Projects
      subtitle: ''
      text: ''
      filters:
        folders:
          - projects
      count: 0
    design:
      view: article-grid
      columns: 2

  - block: collection
    id: publications
    content:
      title: Recent Publications
      text: ''
      filters:
        folders:
          - publications
        exclude_featured: false
      count: 5
    design:
      view: citation

  - block: collection
    id: events
    content:
      title: Events
      subtitle: Talks, Workshops, and Seminars
      text: ''
      filters:
        folders:
          - events
        exclude_past: false
      count: 3
      sort_by: Date
      sort_ascending: false
    design:
      view: card
      show_date: true
      show_read_time: false
      show_read_more: true
      css_class: "bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
      spacing:
        padding: ["4rem", 0, "4rem", 0]

  - block: collection
    id: news
    content:
      title: News & Updates
      subtitle: ''
      text: ''
      page_type: blog
      count: 5
      filters:
        author: ''
        category: ''
        tag: ''
        exclude_featured: false
        exclude_future: false
        exclude_past: false
        publication_type: ''
      offset: 0
      order: desc
    design:
      view: card
      columns: 1

  - block: contact-info
    id: contact
    content:
      title: Contact
      subtitle: Get in touch with Rice Wireless
      visit_title: Visit Us
      connect_title: Connect
      address:
        lines:
          - Department of Electrical and Computer Engineering, MS-380
          - Rice University
          - 6100 Main Street
          - Houston, TX 77005-1892
          - United States
      email: wireless@rice.edu
      phone: "+1 (713) 348-6232"
      social: []
      prospective:
        title: Prospective Members
        text: Interested in joining? We welcome PhD applicants, postdocs, and visiting researchers. See our Join Us page for details.
        button:
          text: Join Us
          url: /opportunities
      map_url: https://maps.google.com/?q=Rice+University+Houston+TX
      show_form: false
    design:
      css_class: "bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
      spacing:
        padding: ["5rem", 0, "5rem", 0]
---
