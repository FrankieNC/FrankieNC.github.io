---
layout: page
title: projects
permalink: /projects/
description: A collection of projects I have worked on.
nav: true
nav_order: 2
display_categories: [academic]
horizontal: false
---
<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
<!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}

  {% assign subcategory_order = "Research & Contributions,Theses,Notes" | split: "," %}
  {% assign grouped_projects = categorized_projects | where_exp: "p", "p.subcategory" %}
  {% assign other_projects = categorized_projects | where_exp: "p", "p.subcategory == nil" %}

  {% for subcategory in subcategory_order %}
    {% assign sub_projects = grouped_projects | where: "subcategory", subcategory %}
    {% if sub_projects.size > 0 %}
    <h3 class="subcategory">{{ subcategory }}</h3>
    {% assign sorted_projects = sub_projects | sort: "importance" %}
    {% if page.horizontal %}
    <div class="container">
      <div class="row row-cols-1 row-cols-md-2">
      {% for project in sorted_projects %}
        {% include projects_horizontal.liquid %}
      {% endfor %}
      </div>
    </div>
    {% else %}
    <div class="row row-cols-1 row-cols-md-3">
      {% for project in sorted_projects %}
        {% include projects.liquid %}
      {% endfor %}
    </div>
    {% endif %}
    {% endif %}
  {% endfor %}

  {% if other_projects.size > 0 %}
  {% assign sorted_projects = other_projects | sort: "importance" %}
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endif %}
  {% endfor %}
{% else %}
<!-- Display projects without categories -->
{% assign sorted_projects = site.projects | sort: "importance" %}
  <!-- Generate cards for each project -->
{% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>