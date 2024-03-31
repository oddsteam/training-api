const CourseModel = require("../models/course");
export const getCourses = async (req, res) => {
  const data = await CourseModel.find();
  res.json({ data });
};
