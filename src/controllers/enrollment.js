const EnrollmentService = require("../services/enrollment");
const ClassService = require("../services/class");

export const enrollment = async (req, res) => {
  try {
    const { classId } = req.body;
    const result = await EnrollmentService.create(req.body);
    const classDetail = await ClassService.getClass(classId);
    console.log(classDetail);
    console.log(result);
    res.send("success");
  } catch (error) {
    console.log(error);
  }
};
