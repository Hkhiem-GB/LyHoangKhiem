// @ts-ignore
import mongoose, { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    name: String,
    email: String,
});

export const User = models.User || model("User", userSchema);
