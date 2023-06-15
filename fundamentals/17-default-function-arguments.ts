function printCourse(
  title: string = 'TITLE',
  subtitle: string = 'SUBTITLE',
  lessonsCount: number = 0) {
    console.log(`Title: ${title}, Subtitle: ${subtitle}, lessons count: ${lessonsCount}`);
}

printCourse(
  'Typescript Bootcamp',
  'Learn the language fundamentals, build practical projects',
  10);

printCourse(
  'Typescript Bootcamp v2',
  'Learn the language fundamentals, build practical projects');

printCourse();