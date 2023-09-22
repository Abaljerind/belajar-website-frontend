// contoh object dengan methods, method adalah function yang berada didalam sebuah object.
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullname: function () {
    return this.firstName + " " + this.lastName;
  },
};
// this dibaris return, mengacu pada object person itu sendiri

// cara mengakses data dari sebuah object
let firstname = person.firstName;
let lastname = person.lastName;
let fullname = person.fullname();
