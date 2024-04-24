import { useState } from 'react'
import './App.css'
import Courses_Name from './Components/Courses_name/Courses_Name'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header/Header'

function App() {
    const [addCourses,setaddCourses]=useState([])

    const handleAddCourse=(name)=>{
      const newCourseName = [...addCourses,name]
      setaddCourses(newCourseName)
    }
    

  return (
    <>
    <Header></Header>
    <div className='md:flex'>
      <Courses handleAddCourse={handleAddCourse}></Courses>
      <Courses_Name addCourses={addCourses}></Courses_Name>
    </div>
    </>
  )
}

export default App
