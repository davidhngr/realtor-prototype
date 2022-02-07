/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateHouse = /* GraphQL */ `
  subscription OnCreateHouse {
    onCreateHouse {
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
export const onUpdateHouse = /* GraphQL */ `
  subscription OnUpdateHouse {
    onUpdateHouse {
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
export const onDeleteHouse = /* GraphQL */ `
  subscription OnDeleteHouse {
    onDeleteHouse {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateFavorite = /* GraphQL */ `
  subscription OnCreateFavorite {
    onCreateFavorite {
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
export const onUpdateFavorite = /* GraphQL */ `
  subscription OnUpdateFavorite {
    onUpdateFavorite {
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
export const onDeleteFavorite = /* GraphQL */ `
  subscription OnDeleteFavorite {
    onDeleteFavorite {
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
export const onCreateConversation = /* GraphQL */ `
  subscription OnCreateConversation {
    onCreateConversation {
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
export const onUpdateConversation = /* GraphQL */ `
  subscription OnUpdateConversation {
    onUpdateConversation {
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
export const onDeleteConversation = /* GraphQL */ `
  subscription OnDeleteConversation {
    onDeleteConversation {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
      id
      conversationID
      senderID
      message
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
      id
      conversationID
      senderID
      message
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
      id
      conversationID
      senderID
      message
      createdAt
      updatedAt
    }
  }
`;
