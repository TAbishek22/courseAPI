import mongoose from "mongoose";

const CourseRecord = new mongoose.Schema({
    courseId: String,
    taskName: String,
    dueDate: String,
    details: String,
});

const courseAPI = new mongoose.model("Student_tasks", CourseRecord);
export default courseAPI;
