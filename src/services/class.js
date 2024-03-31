const classDeatilsModel = require("../models/classDetails");
export const getClass = async (id) => {
  try {
    const data = await classDeatilsModel.find({
      _id: id,
    });
    return data[0];
  } catch (error) {
    console.log(error);
  }
};
