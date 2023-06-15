interface Course {
  title: string;
  subtitle: string;
  stats: {
    lessonsCount: number;
  }
}

let course: Course = {
  title: 'Typescript Bootcamp',
  subtitle: 'Learn the language fundamentals, build practical projects',
  stats: {
    lessonsCount: 10
  }
}

const newCourse = {
  title: course.title,
  subtitle: course.subtitle,
  stats:  course.stats
}

const newCourse2 = {...course};

console.log('Before', newCourse2);
course.stats.lessonsCount = 100;
console.log('After', newCourse2);