---
title: "Pebble Templates"
---


# Time

> Return the current date in UTC
>
> <textarea readonly id="1">\{\{now()\}\}</textarea><br>
>
> <textarea readonly id="2">\{\{split("\\|")\}\}</textarea>
>


<script> (function() {Array.from(document.querySelectorAll("textarea")).forEach((element) => {element.value = element.value.replaceAll("\\",""); console.log(element.value)})})()</script>