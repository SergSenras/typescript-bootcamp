
// primitive types: number
const lessonsCount: number = 10;
const total: number = lessonsCount + 10;
console.log('total = ', total);

// primitive types: string
const title = 'Typescript Bootcamp';
const subtitle = 'Learn the language fundamentals, build practical projects';
const fullTitle = `Full title: ${title}: ${subtitle} `;
//console.log('type before', typeof fullTitle);
//fullTitle = 10;
//console.log('type after', typeof fullTitle);
console.log('Full title: ', fullTitle);

// primitive types: boolean
const published = true;
if (published) {
  console.log('The course is published');
}

//
printCourse(title, subtitle, lessonsCount);
function printCourse(title:string, subtitle:string, lessonsCount:number) {
  let fullTitle = title + subtitle;
}

// primitive types: objects
const course = {
  title: 'Typescript Bootcamp',
  subtitle: 'Learn the language fundamentals, build practical projects',
  lessonsCount: 10,
  author: {
    firstName: 'Serg',
    lastName: 'Senras'
  }
}

console.log('type of course is ', typeof course);
