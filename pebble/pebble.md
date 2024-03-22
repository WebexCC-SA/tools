---
title: "Pebble Templates"
---

<style>
    textarea{
        width:75%;
    }
</style>



# Time

> Return the current date and time in UTC (yyyy-MM-dd'T'HH:mm:ss.SSS'Z)
>
> <textarea readonly>\{\{now()\}\}</textarea><br>
>

> Return the current date and time in a different time zone
>
> <textarea readonly>\{\{now() | date("HHmm", existingFormat="yyyy-MM-dd'T'HH:mm:ss", timeZone="America/New_York")\}\}</textarea><br>
>

> Return the day of the week from the current time
>
> <textarea readonly>\{\{now() | date("EEEE", existingFormat="yyyy-MM-dd'T'HH:mm:ss.SSS'Z'") \}\}</textarea><br>

> Return the current time as Epoch in seconds
>
> <textarea readonly>\{\{now() | epoch\}\}</textarea><br>

> Return the current time as Epoch in milliseconds
>
> <textarea readonly>\{\{now() | epoch(inMillis=true)\}\}</textarea><br>

<!-- > <textarea readonly>\{\{split("\\|")\}\}</textarea> -->
>







<script> (function() {Array.from(document.querySelectorAll("textarea")).forEach((element) => {element.value = element.value.replaceAll("\\{","{").replaceAll("\\}","}").replaceAll("\\\\","\\"); console.log(element.value)})})()</script>
