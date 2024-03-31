const CourseModel = require("../models/course");

export const getCourse = async (req, res) => {
  const courseId = req.params.courseId;
  const data = await CourseModel.findById(courseId);
  res.send(data);
}