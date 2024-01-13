import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
      },
      last_name: {
        type: String,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      courses: {
        type: [
            {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "Courses",
            },
        ],
        default: [],
      },
      role: {
        type: String,
        enum: ["student", "teacher"],
        default: "student"
      }
});

export const usersModel = mongoose.model("users", usersSchema);