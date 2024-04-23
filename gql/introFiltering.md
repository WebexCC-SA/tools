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
4. Enumerations - scalar type represents a predefined list of values. Similar to a string, but does not accept quotes.
   - Comparisons
     - equals - Returns data if the value equals the criteria 
     - notequals - Returns all other data than the values which equal the criteria


## Filter Grouping
While single filters can be useful, it is common to need more that one filter to return the data you are looking for.  The grouping filters are "and", "or", and "not".  They can be used by themselves to group one or more filters or in conjunction with each other to create more complex filters.



<button class="btn" onclick="vidPop('d2c7b761-9291-40ec-b76f-3cb25c657c83')">Launch Video</button>


1. <details><summary>Click + Add new in the top bar of Altair </summary>
         <img src="https://webexcc-sa.github.io/tools/gql/images/addNew.png"/>
         </details>
2. <details><summary>Copy the query from the last lab.</summary>
    <textarea spellcheck="false" cols="70" rows="138">
\{
  task(
    from: "_____"
    to: "_____"
    timeComparator: createdTime
    # filter: 
    # aggregation: 
    # aggregations: [\{ field: "string", type: count, name: "string" \}]
    # aggregationInterval: \{ interval: FIFTEEN_MINUTES \}
    # pagination: 
  ) \{
    tasks \{
      id
      status
      channelType
      createdTime
      endedTime
      origin
      destination
      contactReason
      direction
      owner \{
        id
        name
        signInId
        sessionId
        phoneNumber
        channelId
      \}
      terminationType
      channelSubType
      customer \{
        name
        phoneNumber
        email
      \}
      isActive
      isCallback
      channelMetaData \{
        email \{
          subject
          metaData
        \}
        chat \{
          chatReason
        \}
        inBoundTranscript
        outBoundTranscript
      \}
      callbackData \{
        callbackRequestTime
        callbackConnectTime
        callbackNumber
        callbackStatus
        callbackOrigin
        callbackType
        callbackQueueName
        callbackAgentName
        callbackTeamName
        callbackRetryCount
      \}
      recordingLocation
      lastWrapupCodeName
      lastQueue \{
        id
        name
        duration
      \}
      lastSite \{
        id
        name
      \}
      lastTeam \{
        id
        name
      \}
      lastEntryPoint \{
        id
        name
      \}
      previousQueue \{
        id
        name
      \}
      totalDuration
      csatScore
      blindTransferCount
      conferenceCount
      conferenceDuration
      consultCount
      consultDuration
      holdCount
      holdDuration
      selfserviceCount
      selfserviceDuration
      connectedCount
      connectedDuration
      consultToQueueCount
      consultToQueueDuration
      transferCount
      wrapupDuration
      ringingDuration
      queueDuration
      queueCount
      captureRequested
      isTranscriptionAvailable
      consultToEPCount
      consultToEPDuration
      outdialConsultToEPCount
      outdialConsultToEPDuration
      agentToDnTransferCount
      agentToAgentTransferCount
      callCompletedCount
      sentiment
      autoCsat
      outdialConsultToQueueCount
      outdialConsultCount
      # integerGlobalVariables(name: "string")
      # stringGlobalVariables(name: "string")
      # longGlobalVariables(name: "string")
      # doubleGlobalVariables(name: "string")
      # booleanGlobalVariables(name: "string")
      # intervalStartTime
      # aggregation
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
\}
</textarea>
</details>