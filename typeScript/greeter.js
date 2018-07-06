var Student = /** @class */ (function () {
    function Student(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleName + " " + lastName;
    }
    return Student;
}());
function greeter(user) {
    return "hello" + " " + user.firstName + " " + user.lastName;
}
//let user = { firstName: "Jaby", lastName: "Koay" };
var user = new Student("Jaby", "the", "Koay");
document.body.innerHTML = greeter(user);
