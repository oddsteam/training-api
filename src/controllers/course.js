export const getCourses = async (req, res) => {
  const data = [
    {
      name: "course1",
      tags: ["tag1", "tag2"],
      detail: "description",
    },
  ];
  res.json({ data });
};
