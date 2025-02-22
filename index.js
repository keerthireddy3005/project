const express = require('express');
const app = express();
app.use(express.json());
let students=[
    {id:"1",name:"Raj",branch:"IT"},
    {id:"2",name:"Ram",branch:"CSE"},
    {id:"3",name:"Ria",branch:"ECE"}
];

// app.get("/students",(req,res)=>{
//     res.json(students)
//     app.get("/student/:id")
// })  
// app.get("/student/:id",(req,res)=>{
//     const id=req.params.id
//     let student=students.find(s=>s.fd===id)
//     if(student){
//         res.status(200).json({
//             "message":"studentfound","student":"student"})
//         }
//     else{
//         res.status(404).json({"message":"student not founf"})
//     }
// })






// app.delete('/deletestudents/:id', (req, res) => {
//     const Id = req.params.id

//     let stud = students.find(s => s.id == id)
//     console.log(stud)
//     if (stud) { 
//       student=students.filter(s => s.id == id); 
//       res.status(200).json({
//              "message":"deleted sucessfully","students":students
//       })
//     }else {     
//       res.status(404).json({"message":"Student not found"})
//     }
//   });



app.post("/addstudents/:id", (req, res) => {
  let student = req.body
  students.push(newStudent);
  
  res.status(201).json(newStudent);
});



// app.put('/students/:id', (req, res) => {
//     const studentId = parseInt(req.params.id);
  
//     const studentIndex = students.findIndex(s => s.id === studentId);
  
//     if (studentIndex !== -1) {
//       students[studentIndex].name=req.body.name
//       students[studentIndex].major=req.body.major

//       res.status(200).send(`Student with ID ${studentId} updated`);
//     } else {
//       console.log(`Student with ID ${studentId} not found`); 
//       res.status(404).send('Student not found');
//     }
//   });



  app.listen(3000,()=>{
    console.log('server is running on http://localhost:3000')
});