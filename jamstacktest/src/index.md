---
layout: base
title: Homepage
sections:
    - title: Section 1
      text: some info about section 1
      img: someimage.jpg
    - title: Section 2
      text: some info about section 2
    - title: Section 3
      text: some info about section 3
---

Welcome to the Professional Training Website

{% for section in sections %}

{{ section | makeSection | safe }}
   
{% endfor %}




