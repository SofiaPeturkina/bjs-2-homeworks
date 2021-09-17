function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
  return this.subject[subjectName];
}

Student.prototype.addMark = function(mark) {
  if (this.marks) {
    this.marks.push(mark);
  } else {
    this.marks = [mark];    
  }
}

Student.prototype.addMarks = function(...marks) {
  if (this.marks) {
    this.marks.push(...marks);
  } else {
    this.marks = [...marks];    
  }
}

Student.prototype.getAverage = function() {
  let sum = 0;

  for (let mark of this.marks) {
    sum += mark;
  }
  return sum / this.marks.length;
}

Student.prototype.exclude = function(reason) {
  this.excluded = reason;

  delete this.subject;
  delete this.marks;
}

let student1 = new Student("Tony", "male", 37);
student1.setSubject("Algebra");
student1.addMark(5);
student1.addMark(4);
student1.addMark(5);
console.log(student1.getAverage());

console.log(student1);

let student2 = new Student("Buzz", "female", 35);
student2.setSubject("Geometry");
student2.addMark(2);
student2.addMark(3);
student2.addMark(2);
student2.exclude('low grades')

console.log(student2)