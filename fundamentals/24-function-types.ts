interface Course {
  title: string;
  subtitle: string;
  lessonsCount: number;
}

type CreateCourse = (title: string, subtitle: string, lessonsCount: number, callback: OnCourseCreated) => Course;
type OnCourseCreated = (course: Course) => void;

const createCourse: CreateCourse = (
    title: string,
    subtitle: string,
    lessonsCount: number,
    callback: OnCourseCreated) => {
  console.log(`Creating course with Title: ${title}, Subtitle: ${subtitle}; lessons count: ${lessonsCount}`);
  
    //const course: Course = {title, subtitle, lessonsCount}
    const course = {title, subtitle, lessonsCount};
    callback(course);
    return course;
}
  

  
  