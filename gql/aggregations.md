---
title: "Aggregations"
---


# Introduction



## Pre-requisites
- Complete Getting Started
- Complete Exploring the Query
- 


## Lab Objective



<!-- ## Aggregation Types
- count
- sum
- average
- max
- min
- cardinality  -->

## Exploring Aggregation Options
1. <details><summary>Click + Add new in the top bar of Altair </summary>
         <img src="https://webexcc-sa.github.io/tools/gql/images/addNew.png"/>
         </details>
2. Open the Docs tab and navigate to Query > task > aggregations 
   - (Note that if you click into "aggregation" instead of "aggregations" it shows as deprecating soon, so we will not be using it.)
3. Note the list of fields that you have available to construct your aggregation
   - The required fields are:
     -  field - The field on which the aggregation operation is to be done
     -  type - The type of aggregation operation
     -  name - The name field of the output aggregation
  
   - {% raw %}If you wanted to return a count of tasks and name it "All Tasks"
  
        <textarea spellcheck="false" cols="70" rows="2">aggregations: [{ field: "id", type: count, name: "All Tasks" }]</textarea>

   - If you wanted to return a count of tasks which were calls and name it "Calls"
  
        <textarea spellcheck="false" cols="70" rows="8">aggregations: [
  { field: "id", type: count, name: "All Tasks" }
  {
  field: "id"
  type: count 
  name: "Calls" 
  filter:{channelType:{equals:telephony}}
  }
  ]</textarea>
{% endraw %}


<!-- <textarea spellcheck="false" cols="70" rows="4"></textarea> -->