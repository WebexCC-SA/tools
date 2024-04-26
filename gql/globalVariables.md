---
title: "Adding Global Variables Into Your Query"
---

<!-- <style>.btn{border-radius:30px;padding:5px 10px; border:1px #2196F3}.btn:hover{background: #2196F3;color:white;}table td,table th{border:1px solid #404040;}table{border-collapse: collapse;}</style> -->

# Introduction



## Pre-requisites
- Complete Getting Started
- Complete Exploring the Query
- The tenant you are querying must have Reportable Global Variables 
- The Reportable Global Variables must be in a flow in order to return values
- You must know the name and type of Reportable Global Variables you are adding to your queries

## Lab Objective
- Understand the types of Global Variables
- Understand how Global Variables types map between the Search API and Webex Contact Center 
- Add Reportable Global Variables to a query
- Add more than one of the same type of Global Variable

## Variable type mapping

| GraphQL Global Variable Type | Webex Contact Center Global Variable Type | 
|:-:|:-:|
| integerGlobalVariables | Integer |
| stringGlobalVariables | String |
| longGlobalVariables | DateTime |
| doubleGlobalVariables | Decimal |
| booleanGlobalVariables | Boolean |

## Returning a Global Variable
   <textarea spellcheck="false" cols="70" rows="4">stringGlobalVariables(name:"nameOfVariable"){
    name
    value
}</textarea>

## Returning more than one of the same type of variable
  
<textarea spellcheck="false" cols="70" rows="4">nameOfVariable: stringGlobalVariables(name:"nameOfVariable"){
    name
    value
}</textarea>
  <details><summary>Note you can comment out name or omit name in the return field list as the variable type will be replaced with the alias provided</summary><textarea spellcheck="false" cols="70" rows="4">nameOfVariable: stringGlobalVariables(name:"nameOfVariable"){
    # name
    value
}</textarea></details>