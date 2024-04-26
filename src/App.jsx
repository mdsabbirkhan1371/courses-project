import { useState } from 'react'
import './App.css'
import Courses_Name from './Components/Courses_name/Courses_Name'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header/Header'

function App() {
    const [addCourses,setaddCourses]=useState([])
    const [remainingHr,setRemainingHr]=useState([20])

    const handleAddCourse=(name,credit_hr)=>{
      console.log(name,credit_hr)
      if(remainingHr<=0 ){
           return alert('Your Credit is Up,You cant Add More Credit')
      }

      const newCourseName = [...addCourses,name]
        setaddCourses(newCourseName)
      
      const newRemainingHr = remainingHr - credit_hr;
      if(newRemainingHr<=0){
        setRemainingHr(0)
      }else{
        setRemainingHr(newRemainingHr)
      }
      
    }
    
  return (
    <>
    <Header></Header>
    <div className='md:flex'>
      <Courses handleAddCourse={handleAddCourse}></Courses>
      <Courses_Name remainingHr={remainingHr} addCourses={addCourses}></Courses_Name>
    </div>
    </>
  )
}

export default App
