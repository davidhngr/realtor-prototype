/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createHouse = /* GraphQL */ `
  mutation CreateHouse(
    $input: CreateHouseInput!
    $condition: ModelHouseConditionInput
  ) {
    createHouse(input: $input, condition: $condition) {
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
export const updateHouse = /* GraphQL */ `
  mutation UpdateHouse(
    $input: UpdateHouseInput!
    $condition: ModelHouseConditionInput
  ) {
    updateHouse(input: $input, condition: $condition) {
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
export const deleteHouse = /* GraphQL */ `
  mutation DeleteHouse(
    $input: DeleteHouseInput!
    $condition: ModelHouseConditionInput
  ) {
    deleteHouse(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createFavorite = /* GraphQL */ `
  mutation CreateFavorite(
    $input: CreateFavoriteInput!
    $condition: ModelFavoriteConditionInput
  ) {
    createFavorite(input: $input, condition: $condition) {
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
export const updateFavorite = /* GraphQL */ `
  mutation UpdateFavorite(
    $input: UpdateFavoriteInput!
    $condition: ModelFavoriteConditionInput
  ) {
    updateFavorite(input: $input, condition: $condition) {
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
export const deleteFavorite = /* GraphQL */ `
  mutation DeleteFavorite(
    $input: DeleteFavoriteInput!
    $condition: ModelFavoriteConditionInput
  ) {
    deleteFavorite(input: $input, condition: $condition) {
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
export const createConversation = /* GraphQL */ `
  mutation CreateConversation(
    $input: CreateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    createConversation(input: $input, condition: $condition) {
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
export const updateConversation = /* GraphQL */ `
  mutation UpdateConversation(
    $input: UpdateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    updateConversation(input: $input, condition: $condition) {
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
export const deleteConversation = /* GraphQL */ `
  mutation DeleteConversation(
    $input: DeleteConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    deleteConversation(input: $input, condition: $condition) {
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      conversationID
      senderID
      message
      createdAt
      updatedAt
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      conversationID
      senderID
      message
      createdAt
      updatedAt
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      id
      conversationID
      senderID
      message
      createdAt
      updatedAt
    }
  }
`;
