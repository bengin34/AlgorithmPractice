//!create a function called getStudents(classroom)
//! if  hasTeacherAssistant is true add taht person if its false add just teacher and students

function getStudents(classroom){
    let {hasTeachingAssistant, classList} = classroom;
    let teacher, teachingAssistant, students;

   if(hasTeachingAssistant)  {
    [teacher, teachingAssistant, ...students] = classList
   } else {
    [teacher, ...students] = classList
   }
   return students;
}

console.log(
    getStudents({
        hasTeachingAssistant: false,
        classList: ["Rashida", "John", "Roman", "Lisa", "Omair", "Lukas"]
    })
);