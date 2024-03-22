<style>
    textarea{
        width:100%;
    }
</style>

---
title: "Pebble Templates"
---


# Time

> Return the current date and time in UTC
>
> <textarea readonly>\{\{now()\}\}</textarea><br>
>

> Return the current date and time in a different time zone
>
> <textarea readonly>\{\{now() | date("HHmm", existingFormat="yyyy-MM-dd'T'HH:mm:ss", timeZone="America/New_York")\}\}</textarea><br>

<!-- > <textarea readonly>\{\{split("\\|")\}\}</textarea> -->
>







<script> (function() {Array.from(document.querySelectorAll("textarea")).forEach((element) => {element.value = element.value.replaceAll("\\{","{").replaceAll("\\}","}").replaceAll("\\\\","\\"); console.log(element.value)})})()</script>
