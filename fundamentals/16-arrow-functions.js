function saveCourse(course, callback) {
    this.course = course;
    setTimeout(function () {
        var _a, _b;
        callback((_b = (_a = this.course) === null || _a === void 0 ? void 0 : _a.title) !== null && _b !== void 0 ? _b : 'unknown course');
    }, 1000);
}
var cb = function (title) { return console.log(title); };
saveCourse({ title: 'Typescript Bootcamp' }, cb);
