class Student {
  fullName: string;
  constructor(public firstName: string, public middleName: string, public lastName: string){
    this.fullName = firstName + " " + middleName + " " + lastName;
  }
}
interface User {
  firstName: string,
  lastName: string
}
function greeter(user: User) {
  return "hello" + " " + user.firstName + " " + user.lastName;
}

//let user = { firstName: "Jaby", lastName: "Koay" };
let user = new Student("Jaby", "the", "Koay")
document.body.innerHTML = greeter(user)
