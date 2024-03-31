const EnrollmentService = require("../services/enrollment");

export const enrollment = async (req, res) => {
  try {
    await EnrollmentService.create(req.body);
    res.send("success");
  } catch (error) {
    console.log(error);
  }
};
