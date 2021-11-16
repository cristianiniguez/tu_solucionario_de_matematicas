import CourseService from '../../../services/course.service';

const courseApiHandler = async (req, res) => {
  const service = new CourseService();
  try {
    const courses = await service.getLastCourses();
    res.status(200).json({ message: 'Courses listed', courses });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default courseApiHandler;
