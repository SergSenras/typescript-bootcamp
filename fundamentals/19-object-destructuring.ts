interface Course {
  title: string;
  subtitle: string;
  lessonsCount: number;
}
  
let course: Course = {
  title: 'Typescript Bootcamp',
  subtitle: 'Learn the language fundamentals, build practical projects',
  lessonsCount: 10
}

function printCourse(course: Course) {
    const {title, ...rest} = course;
    console.log(`Title: ${title} and Subtitle: ${rest.subtitle}, lessons count: ${rest.lessonsCount}`);
}

printCourse(course);
