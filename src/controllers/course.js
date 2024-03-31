export const getCourses = async (req, res) => {
  const data = [
    {
      courseName: "Test Course1",
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
    {
      courseName: "Test Course2",
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
    {
      courseName: "Test Course3",
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
    {
      courseName: "Test Course4",
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
    {
      courseName: "Test Course5",
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
