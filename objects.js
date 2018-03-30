var id = 1;
function Student(firstname,lastname,grade) {
    this.firstName = firstname;
    this.lastName = lastname;
    this.grade = grade;
    this.id = id ++;
}
function Teacher(firstName,lastName,subject) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.subject = subject;
    this.id = id ++;

}
function Section(name,count) {
    this.name = name;
    this.count = count;
    this.students = [];
    this.teachers = [];
    this.id = id ++;
}
