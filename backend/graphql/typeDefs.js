import { gql } from "apollo-server-express";

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        email: String!
        role: String!
    }

    type Event {
        id: ID!
        title: String!
        description: String
        date: String!
    }

    type ChatMessage {
        id: ID!
        user_id: ID!
        message: String!
        createdAt: String!
    }

    type Query {
        events: [Event!]!
        chatMessages: [ChatMessage!]!
        me: User
    }

    type Mutation {
        createEvent(title: String!, description: String, date: String!): Event!
        sendMessage(text: String!): ChatMessage!
        register(name: String!, email: String!, password: String!): User!
        login(email: String!, password: String!): String! # returns JWT
    }
`;

export default typeDefs;