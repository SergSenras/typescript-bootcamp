// primitive types: number
var lessonsCount = 10;
var total = lessonsCount + 10;
console.log('total = ', total);
// primitive types: string
var title = 'Typescript Bootcamp';
var subtitle = 'Learn the language fundamentals, build practical projects';
var fullTitle = "Full title: ".concat(title, ": ").concat(subtitle, " ");
console.log('type before', typeof fullTitle);
fullTitle = 10;
console.log('type after', typeof fullTitle);
console.log('Full title: ', fullTitle);
// primitive types: boolean
var published = true;
if (published) {
    console.log('The course is published');
}
//
printCourse(title, subtitle, lessonsCount);
function printCourse(title, subtitle, lessonsCount) {
    var fullTitle = title + subtitle;
}
// primitive types: objects
var course = {
    title: 'Typescript Bootcamp',
    subtitle: 'Learn the language fundamentals, build practical projects',
    lessonsCount: 10
};
console.log('type of course is ', typeof course);
