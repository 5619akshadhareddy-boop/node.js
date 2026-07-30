let Classroom={
    classname:"section A",
    totalstudents:2,
    studentslist:[
    { name:"ramu", rollno:101},
    { name:"raju", rollno:102}
]
};
console.log(Classroom.classname);
console.log(Classroom.studentslist[0].name);
let classroomstig= 
JSON.stringify(Classroom);
console.log(classroomstig);
