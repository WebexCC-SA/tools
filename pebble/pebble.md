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


# Strings

> Return the last 10 characters of an ANI 
> 
> <textarea readonly>\{\{NewPhoneContact.ANI | slice (NewPhoneContact.ANI.length -10,NewPhoneContact.ANI.length)\}\}</textarea><br>
>
> Return the last 10 characters of an DNIS 
> 
> <textarea readonly>\{\{NewPhoneContact.DNIS | slice (NewPhoneContact.DNIS.length -10,NewPhoneContact.DNIS.length)\}\} </textarea><br>
>
> Return the last 4 characters of an ANI 
> 
> <textarea readonly>\{\{NewPhoneContact.ANI|slice(NewPhoneContact-4,NewPhoneContact.ANI.length)\}\}</textarea><br>
>
> Split a comma delimited string into addressable pieces. (Replace "string" with the name of the string you need to split and "number" will be an Integer variable representing which value you want to return (starting with 1))
>
> <textarea readonly>\{\{string|split(",",string|split(",")|length-(string|split(",")|length-number))|last|split(",")|first\}\}</textarea><br>
>


# Numbers, Logic and Comparison

> Increment a counter 
>
> <textarea readonly>\{\{counter + 1\}\}</textarea><br>
> 
> Test if a number is Even (returns true/false)
>
> <textarea readonly>\{\{counter is even\}\}</textarea><br>
>
> Test if a number is Odd (returns true/false)
>
> <textarea readonly>\{\{counter is odd\}\}</textarea><br>
>
> Test if a variable exists in an array or list.
>
> <textarea readonly>{{["410", "443", "667"] contains Caller_Area}}</textarea><br>
>
> Test if two conditions are true (set int to 1 and string to Bill)
>
> <textarea readonly>\{\{int is odd and string|lower == "bill"\}\}</textarea><br>
>
> Test if one of two or more conditions are true (set int to 1 and string to Steve)
>
> <textarea readonly>\{\{(int is odd) or (string|lower == "bill")\}\}</textarea><br>
>
> Test if an expression is not true
>
> <textarea readonly>\{\{3 is not even\}\}</textarea><br>
>
> 




<!-- > <textarea readonly>\{\{split("\\|")\}\}</textarea> -->
>







<script> (function() {Array.from(document.querySelectorAll("textarea")).forEach((element) => {element.value = element.value.replaceAll("\\{","{").replaceAll("\\}","}").replaceAll("\\\\","\\"); console.log(element.value)})})()</script>
