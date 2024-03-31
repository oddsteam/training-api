const EnrollmentModel = require("../models/enrollment");

export const create = async (body) => {
  try {
    await EnrollmentModel.create(body);
  } catch (error) {
    console.log(error);
  }
};
