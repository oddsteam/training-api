const ClassModel = require("../models/course");

export const getClasses = async (req, res) => {
  // const today = new Date()
  const condition = {} //{ startDate: { $gte: today } }
  const data = await ClassModel.find(condition);
  
  res.json({ data });
};
