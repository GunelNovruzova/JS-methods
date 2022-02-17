/* //First
if(confirm()){
    var color=document.getElementById("color")
color.style.backgroundColor="black"
}
*/

 /* //  Second
 let age=prompt("Enter your age")
  if(age<18)
 {
     alert("Person under 18 are not allowed")
  }
  else{
     alert("Welcome")
  }
 */ 

// Third
class Information { }
var person = {
    firstName: "Gunel",
    lastName: "Novruzova",
    password: "dark-blue*",
   get fullName() {
        return this.firstName + " " + this.lastName;
    },
    showInfo(){
        document.write(this.fullName.toUpperCase())
    
      }
}

person.showInfo();




