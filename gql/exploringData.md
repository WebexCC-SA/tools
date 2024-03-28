---
title: "Exploring the Data"
---

<style>button{border-radius:30px;}button:hover{background: #2196F3;color:white;}</style>

# Introduction
In this lab we will be exploring the data available our query from the previous lab.

## Pre-requisites
- Complete the Getting Started lesson 

## Lab Objective
- Use the Add Query feature of Docs to produce a value of report
- Filter for a single interaction
- Observer the data values available along with their definitions 
  
## Add Query from Docs
<button onclick="vidPop('d2c7b761-9291-40ec-b76f-3cb25c657c83')">Launch Video</button> 

1.  <details><summary>Click + Add new in the top bar of Altair </summary>
         <img src="https://webexcc-sa.github.io/tools/gql/images/addNew.png"/>
         </details> 
2.  Open the Docs panel
3.  Click Query
4.  <details><summary>Next to task, click ADD QUERY</summary>
    <img style="width:75%" src="https://webexcc-sa.github.io/tools/gql/images/addTaskQuery.gif"/></details>
5. In the query window use the keyboard shortcut ctrl+/ to comment out the following fields in the arguments section:
   - filter
   - aggregation   
   - aggregations   
   - aggregationInterval   
   - pagination
6. You can delete all of the lines in the has section (line 84-150) as they are not needed
7. Comment out or delete the following fields from the fields section:
    - integerGlobalVariables
    - stringGlobalVariables   
    - longGlobalVariables   
    - doubleGlobalVariables   
    - booleanGlobalVariables    
    - intervalStartTime   
    - aggregation

8. Hover your mouse over the fields which have lines underneath them
   - If the field is deprecated, delete it or comment it out 
   - If the field is not deprecated, place your cursor after the field lane and use teh keyboard shortcut ctrl + shift + enter  
9. While in the query pane and use the keyboard shortcut ctrl+F to bring up the find and replace dialog box
10. In the find box paste `(sort: asc)`, put nothing in the replace box, and click replace all.
11. Using the time tool, set the from and to fields for 1 day (this query will be bringing back a lot of data)
12. 





<!-- ---

### testing section

<button onclick="vidPop('d2c7b761-9291-40ec-b76f-3cb25c657c83')">Launch Video</button>

<button onclick="vidPop('483abf7f-d623-49fe-a1f6-ea2fcb082763')">Launch Video 2</button> -->