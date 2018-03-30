function listItems() {
    var selection = document.getElementById("list").value;
    var html = "<table border = '1'>";
    if (selection == 0) {
        for (var i = 0; i < allStudents.length; i++) {
            html += "<tr>";
            html += "<td>" + allStudents[i].firstName + "</td>";
            html += "<td>" + allStudents[i].lastName + "</td>";
            html += "<td>" + allStudents[i].grade + "</td>";
            html += "</tr>";
        }
        html += "</table>";
        document.getElementById("listOutput").innerHTML = html;
    }
    if (selection == 1) {
        for (var i = 0; i < allTeachers.length; i++) {
            html += "<tr>";
            html += "<td>" + allTeachers[i].firstName + "</td>";
            html += "<td>" + allTeachers[i].lastName + "</td>";
            html += "<td>" + allTeachers[i].subject + "</td>";
            html += "</tr>";
        }
        html += "</table>";
        document.getElementById("listOutput").innerHTML = html;
    }
    if (selection == 2) {
        for (var i = 0; i < allSections.length; i++) {
            html += "<tr>";
            html += "<td>" + allSections[i].name + "</td>";
            html += "<td>" + allSections[i].count + "</td>";
            html += "</tr>";
        }
        html += "</table>";
        document.getElementById("listOutput").innerHTML = html;
    }
}
function addStudent(){
    var firstName = document.getElementById("StudentFirstName").value;
    var lastName = document.getElementById("StudentLastName").value;
    var grade = document.getElementById("StudentGrade").value;
    allStudents.push(new Student(firstName,lastName,grade));
    console.log(allStudents);
    document.getElementById("Confirmed").innerHTML = "Student Added To Program";
    clear();
}

function addTeacher(){
    var firstName = document.getElementById("TeacherFirstName").value;
    var lastName = document.getElementById("TeacherLastName").value;
    var subject = document.getElementById("TeacherSubject").value;
    allTeachers.push(new Teacher(firstName,lastName,subject));
    console.log(allTeachers);
    document.getElementById("Confirmed1").innerHTML = "Teacher Added To Program";
    clear();
}

function addSection(){
    var name = document.getElementById("SectionName").value;
    var count = document.getElementById("SectionCount").value;
    allSections.push(new Section(name,count));
    console.log(allSections);
    document.getElementById("Confirmed2").innerHTML = "Section Added To Program";
    clear();
}
function StudentSelectList(){
    var html="";
    for (var i = 0; i < allStudents.length; i++) {
        html += "<option value='" + allStudents[i].id  + "'>  " +
            allStudents[i].firstName + " " +
            allStudents[i].lastName + "</option>"
    }
document.getElementById("studentList").innerHTML=html;
}
function TeacherSelectList(){
    var html="";
    for (var i = 0; i < allTeachers.length; i++) {
        html += "<option value='" + allTeachers[i].id + "'>  " +
            allTeachers[i].firstName + " " +
            allTeachers[i].lastName + "</option>"
    }
    document.getElementById("teacherList").innerHTML=html;
}
function SectionSelectList(){
    var html="";
    for (var i = 0; i < allSections.length; i++) {
        html += "<option value= '" + allSections[i].id + "'> " +
            allSections[i].name + "" +
            allSections[i].count + "</option>"
    }
    document.getElementById("sectionList").innerHTML=html;
    document.getElementById("sectionList1").innerHTML=html;
    document.getElementById("sectionList2").innerHTML=html;
    document.getElementById("sectionList3").innerHTML=html;
}
function studentById(StudentId){
    for (var i=0; i < allStudents.length; i++){
        if (allStudents[i].id == StudentId){
            return allStudents[i];
        }
    }
}
function sectionById(SectionId){
    for (var i=0; i < allSections.length; i++){
        if (allSections[i].id == SectionId){
            return allSections[i];
        }
    }
}
function teacherById(TeacherId){
    for (var i=0; i < allTeachers.length; i++){
        if (allTeachers[i].id == TeacherId){
            return allTeachers[i];
        }
    }
}

function addStudentToSection(){
          var student = studentById(document.getElementById("studentList").value);
          var section = sectionById(document.getElementById("sectionList").value);
          section.students.push(student);
          document.getElementById("studentInSection").innerHTML = "You have added this student"
}
function addTeacherToSection(){
    var teacher = teacherById(document.getElementById("teacherList").value);
    var section = sectionById(document.getElementById("sectionList").value);
    section.teachers.push(teacher);
    document.getElementById("teacherInSection").innerHTML = "You have added this teacher"
}
function listStudentsInSection(){
    var sectionId= document.getElementById("sectionList3").value;
    var section = sectionById(sectionId);
    for(var i = 0; i < section.students.length; i++){
        document.getElementById("listStudents").innerHTML += '<p>' + section.students[i].firstName
        + " " + section.students[i].lastName + " " + section.students[i].grade + '<p>'
    }
}
function listTeachersInSection(){
    var sectionId= document.getElementById("sectionList3").value;
    var section = sectionById(sectionId);
    for(var i = 0; i < section.teachers.length; i++){
        document.getElementById("listTeachers").innerHTML += '<p>' + section.teachers[i].firstName
            + "" + section.teachers[i].lastName + "" + section.teachers[i].subject + '<p>'
    }
}
function clear() {
    var elements = document.getElementsByTagName("input");
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].type == "text") {
            elements[i].value = "";
        }
    }
}
