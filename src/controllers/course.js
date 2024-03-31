export const getCourses = async (req, res) => {
  const data = [
    {
      courseName: "Test Course",
      outline: "course outline",
      agenda: "course agenda",
      afterSaleService: "after sale service",
      images: ["a", "b"],
      trainer: [
        {
          name: "I AM",
          image: "c",
          experience: "trainer experience",
        },
      ],
    },
  ];
  res.json({ data });
};
