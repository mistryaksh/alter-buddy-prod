import { IChatProps } from "interface/chat.interface";
import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema<IChatProps>(
     {
          users: {
               user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
               mentor: { type: mongoose.Schema.Types.ObjectId, ref: "Mentor" },
          },
          sessionDetails: {
               roomId: { type: mongoose.Schema.Types.String, required: true },
               roomToken: { type: mongoose.Schema.Types.String, required: true },
          },
          message: [
               {
                    messageId: { type: mongoose.Schema.Types.String },
                    message: { type: mongoose.Schema.Types.String },
                    senderId: { type: mongoose.Schema.Types.String },
                    senderName: { type: mongoose.Schema.Types.String },
                    timestamp: { type: mongoose.Schema.Types.String },
                    topic: { type: mongoose.Schema.Types.String },
               },
          ],
          status: { type: mongoose.Schema.Types.String, default: "PENDING", required: true },
     },
     {
          timestamps: true,
     }
);

export const Chat = mongoose.model<IChatProps>("Chat", ChatSchema);
