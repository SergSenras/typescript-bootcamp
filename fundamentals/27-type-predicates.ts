interface Course {
  readonly title: string,
  subtitle: string,
  lessonsCount?: number
}

const course: unknown = {
  title: 'Typescript Bootcamp',
  subtitle: 'Learn the language fundamentals',
  lessonsCount: 10
};

if (isCourse(course)) {
  
}

isCourse(course);
function isCourse(value: unknown): value is Course {
  const coure = value as Course;
  return course?.title !== null && course?.subtitle !== null;
  /*if (typeof value === 'object' && value !== null) {
    if (Object.keys(value)[0] === 'title' &&
        Object.keys(value)[1] === 'subtitle') {
          console.log('Is Course', true)
          return true;
       }
  }*/
}
