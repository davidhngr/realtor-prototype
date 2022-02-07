/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getHouse = /* GraphQL */ `
  query GetHouse($id: ID!) {
    getHouse(id: $id) {
      id
      address
      description
      area
      beds
      baths
      city
      latitude
      longitude
      price
      state
      photo
      keyDetails
      ownerID
      owner {
        id
        name
        email
        photo
        createdAt
        updatedAt
      }
      favoritedBy {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listHouses = /* GraphQL */ `
  query ListHouses(
    $filter: ModelHouseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHouses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        address
        description
        area
        beds
        baths
        city
        latitude
        longitude
        price
        state
        photo
        keyDetails
        ownerID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      email
      photo
      favorite {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        photo
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFavorite = /* GraphQL */ `
  query GetFavorite($id: ID!) {
    getFavorite(id: $id) {
      id
      houseID
      userID
      house {
        id
        address
        description
        area
        beds
        baths
        city
        latitude
        longitude
        price
        state
        photo
        keyDetails
        ownerID
        createdAt
        updatedAt
      }
      user {
        id
        name
        email
        photo
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listFavorites = /* GraphQL */ `
  query ListFavorites(
    $filter: ModelFavoriteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFavorites(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        houseID
        userID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getConversation = /* GraphQL */ `
  query GetConversation($id: ID!) {
    getConversation(id: $id) {
      id
      senderID
      sender {
        id
        name
        email
        photo
        createdAt
        updatedAt
      }
      receiverID
      receiver {
        id
        name
        email
        photo
        createdAt
        updatedAt
      }
      lastMessageID
      lastMessage {
        id
        conversationID
        senderID
        message
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listConversations = /* GraphQL */ `
  query ListConversations(
    $filter: ModelConversationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConversations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        senderID
        receiverID
        lastMessageID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      conversationID
      senderID
      message
      createdAt
      updatedAt
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        conversationID
        senderID
        message
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const messagesByDate = /* GraphQL */ `
  query MessagesByDate(
    $conversationID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByDate(
      conversationID: $conversationID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        conversationID
        senderID
        message
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const searchHouses = /* GraphQL */ `
  query SearchHouses(
    $filter: SearchableHouseFilterInput
    $sort: SearchableHouseSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchHouses(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        address
        description
        area
        beds
        baths
        city
        latitude
        longitude
        price
        state
        photo
        keyDetails
        ownerID
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
