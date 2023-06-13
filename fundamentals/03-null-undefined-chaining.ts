
//let title: string = null;
const course = {
  textFields: {
    title: 'Typescript Bootcamp'
  }
};
const title = course?.textFields?.title ?? 'No title found'
//console.log('title = ', title);

logCourseTitle(course);

function logCourseTitle(course) {
  if (!course?.textFields) {
    console.log("textFields not defined");
    return;
  }
  if (course.textFields.title) {
    console.log(`The title is ${course.textFields.title}`);
  }
}
