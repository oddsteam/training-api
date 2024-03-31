const classDeatilsModel = require("../models/classDetails");
export const getClass = async (id) => {
  try {
    const data = await classDeatilsModel.findOne({
      _id: id,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
