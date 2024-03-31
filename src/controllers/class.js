const classDeatilsModel = require("../models/classDetails");

export const getClasses = async (req, res) => {
  // const today = new Date()
  const condition = {} //{ startDate: { $gte: today } }
  const data = await classDeatilsModel.find(condition);
  
  res.json({ data });
};
