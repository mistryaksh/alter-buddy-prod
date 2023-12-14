import jwt from "jsonwebtoken";
import { Request } from "express";

export const getTokenFromHeader = (req: Request) => {
     return req.headers.authorization;
};
export const verifyToken = (token: string) => {
     return jwt.verify(token, process.env.JWT_SECRET) as any;
};
