import Event from "../models/eventModel.js";
import ChatMessage from "../models/ChatMessageModel.js";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const resolvers = {
    Query: {
        events: async () => await Event.findAll(),
        chatMessages: async () => await ChatMessage.findAll({ order: [["createdAt", "ASC"]] }),
        me: async (_, __, { user }) => user, // user comes from context
    },

    Mutation: {
        createEvent: async (_, { title, description, date }, { user }) => {
            if (!user) throw new Error("Not authenticated");
            return await Event.create({ title, description, date });
        },

        sendMessage: async (_, { text }, { user }) => {
            if (!user) throw new Error("Not authenticated");
            return await ChatMessage.create({ user_id: user.id, message: text });
        },

        register: async (_, { name, email, password }) => {
            const hashed = await bcrypt.hash(password, 10);
            return await User.create({ name, email, password: hashed, role: "user" });
        },

        login: async (_, { email, password }) => {
            const user = await User.findOne({ where: { email } });
            if (!user) throw new Error("User not found");

            const valid = await bcrypt.compare(password, user.password);
            if (!valid) throw new Error("Invalid credentials");

            return jwt.sign({ userId: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });
        },
    },
};

export default resolvers;