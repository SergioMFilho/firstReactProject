import './style.css';
import React, {useState} from 'react';  // State is important when we want to store values and be used in the interface
import {Card} from '../../components/Card';



function Home() {                             // Initial value Sérgio that changes when writing characters
  const [studentName, setStudentName] = useState(); // The first is the variable that stores, the second is the function that updates this state
  const [students, setStudents] = useState([]);

  function handleAddStudent() {
    const newStudent = {
      name : studentName,
      time : new Date().toLocaleDateString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
    };

    setStudents(prevState => [...prevState, newStudent]); // Creating a new student and keeping the one already created
  }

  return (
    <div className="container">  
    <h1>Attendance List</h1>
    <input 
    type="text" 
    placeholder="Enter name here..."
    onChange={e => setStudentName(e.target.value)}  // Get the value and write it to the console
    />

    <button type="button" onClick={handleAddStudent}>Add</button>
    {                           // When we use the keys inside the return, we want to use the contents of a variable (object)
    students.map(student => <Card name= {student.name} time= {student.time}/> )            
    
    }
    </div>
  )
}

export default Home;
