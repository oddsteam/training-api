export const getCourse = async (req, res) => {
  const courseId = req.params.courseId;
  const data = {
    courseName: "Test Course",
    duration: "1",
    outline: "Fundamental: Why What and How of Design Thinking\n Workshop: How to facilitates and tools recommend\n Incremental: Do design thininkg by team",
    images: ["a", "b"],
    trainers: [{
      name: "I AM",
      image: "c",
      experience: "trainer experience"
    }]
  };
  res.send(data);
}