interface Course {
  title: string;
  subtitle: string;
  lessonsCount: number;
}

function createCourse(title: string, subtitle: string, lessonsCount: number): Course {
  console.log(`Creating course with Title: ${title}, Subtitle: ${subtitle}; lessons count: ${lessonsCount}`);

  //const course: Course = {title, subtitle, lessonsCount}
  return {title, subtitle, lessonsCount};
}

const result = createCourse(
  'Typescript Bootcamp',
  'Learn the language fundamentals, build practical projects',
  100
);

console.log(typeof createCourse);
