const EnrollmentModel = require("../models/enrollment");

export const create = async (body) => {
  try {
    const result = await EnrollmentModel.create(body);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getEnrollmentByClassId = async (classId) => {
  try {
    const data = await EnrollmentModel.findOne({ classId });
    return data;
  } catch (error) {
    console.log(error);
  }
};
