import './App.css'
import Course_Name from './Components/Course_name/Course_Name'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header/Header'

function App() {
  

  return (
    <>
    <Header></Header>
    <div className='md:flex'>
      <Courses></Courses>
      <Course_Name></Course_Name>
    </div>
    </>
  )
}

export default App
