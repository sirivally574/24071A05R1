const express = require('express');
const app = express();

app.use(express.json());

let students = [];

// CREATE
app.post('/students', (req, res) => {
    const student = req.body;
    students.push(student);
    res.send("Student Added");
});

// READ
app.get('/students', (req, res) => {
    res.json(students);
});

// UPDATE
app.put('/students/:id', (req, res) => {
    const id = req.params.id;
    students[id] = req.body;
    res.send("Student Updated");
});

// DELETE
app.delete('/students/:id', (req, res) => {
    const id = req.params.id;
    students.splice(id,1);
    res.send("Student Deleted");
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});