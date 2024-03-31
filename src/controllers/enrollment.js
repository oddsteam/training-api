const EnrollmentService = require("../services/enrollment");
const ClassService = require("../services/classDetails");

export const enrollment = async (req, res) => {
  try {
    await EnrollmentService.create(req.body);
    const classDetail = await ClassService.getClass('660902ba7a3e57bd0a00d416');
    console.log(classDetail);
    res.send("success");
  } catch (error) {
    console.log(error);
  }
};
