---
Title: "Getting Started"
---

# Introduction
In this group of labs we will be exploring how to use Graph QL to get data from the Webex Contact Center's search API.

## Pre-requisites
- You will need to have an administrator or supervisor account on the tenant from which you will accessing data. (**You cannot use and external or partner account for these labs**)
- You will need the ORG ID of the tenant from which you will accessing data.
- You watched the introduction video so that you understand how to navigate the tools in the lab.
- You have created a new profile in your browser to access the labs
    >  [For Firefox](https://support.mozilla.org/en-US/kb/profile-manager-create-remove-switch-firefox-profiles){:target="_blank"}
    >
    >  [For Chrome](https://support.google.com/chrome/answer/2364824){:target="_blank"}

## Lab Objective
- Get your Bearer token set as a global environment variable in Altair.
- Retrieve introspection information from the Search API
- Execute your first query


## Get Authorization
1. Hover over the tools menu and click Authorization
2. You will see a screen popup and ask you for your credentials
3. After providing your credentials you should see a modal popup with your Bearer token formatted as a header.
4. Copy the full text, including the curly braces.
5. Toggle the Guide tab closed by clicking on Guide in the top ribbon.
6. Click No environment
7. Click Environments...
8. In the modal, click Global environment in the left pane
9. Replace all of the text in the right pane with the copied text from the authorization modal
10. Click Save

## Retrieve introspection information
1. Copy the URL into Altair, replacing `<orgID>` with your Org ID
   > <textarea style="width: 75%">https://api.wxcc-us1.cisco.com/search?orgId=\<orgID\></textarea>
2. Click the Docs button (might need to toggle the guide tab)
3. You should see the word Query in the third pane, click it.
4. Click task and observe the available arguments and fields.

## Your first query
1. Using the time tool, select from "1 week ago" to "Now"

<textarea cols="70" rows="25" >\{
  task(
    from: "_____"
    to: "_____"
    timeComparator: createdTime
    aggregations: [\{ field: "id", type: count, name: "calls" \}]
    aggregationInterval: \{ interval: DAILY \}
  ) \{
    tasks \{
      intervalStartTime(sort: asc)
      aggregation \{
        name
        value
      \}
    \}
    pageInfo \{
      endCursor
      hasNextPage
    \}
    intervalInfo \{
      interval
      timezone
    \}
  \}
\}</textarea>






