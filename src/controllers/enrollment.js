const EnrollmentModel = require("../models/enrollment");
export const enrollment = async (req, res) => {
  try {
    await EnrollmentModel.create(req.body);
    res.send("success");
  } catch (error) {
    console.log(error);
  }
};
