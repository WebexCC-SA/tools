---
title: "Introduction to Filtering"
---

<style>.btn{border-radius:30px;}button:hover{background: #2196F3;color:white;}</style>


# Introduction 

In this lab we will be exploring how to add filters to your query.

## Prerequisites  
- Complete Getting Started
- Complete Exploring the Query

## Lab Objective
- Understand the available filter criteria
- Understand criteria grouping
- Ability to identify available filter criteria
- Create a basic filter
- Create a grouped filter

## Available Filters Types
1. Strings - scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
   - Comparisons
     - equals - Returns data if the value equals the criteria 
     - notequals - Returns all other data than the values which equal the criteria
     - contains - Returns data if the value contains a sub-string given for the criteria. (Can use RegEx)
     - match - Returns data if the criteria matches a pattern. (Can use RegEx)
2. Boolean - true/false
3. Integer - scalar type represents non-fractional signed whole numeric values
   - Comparisons
     - equals - Returns data if the value equals the criteria
     - notequals - Returns all other data than the values which equal the criteria
     - gt - greater than
     - gte - greater than or equal to
     - lt - less than
     - lte - less than or equal to
4. Enumerations - scalar type represents a predefined list of values similar to a string which does not accept quotes.
   - Comparisons
     - equals - Returns data if the value equals the criteria 
     - notequals - Returns all other data than the values which equal the criteria


## Filter Grouping
