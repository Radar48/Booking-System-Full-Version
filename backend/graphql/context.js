import jwt from "jsonwebtoken";

export const context = ({ req }) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return {};
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return { user: { id: decoded.userId, role: decoded.role } };
    } catch {
        return {};
    }
};