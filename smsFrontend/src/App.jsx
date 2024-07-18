
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import ListStudentComponent from './components/ListStudentComponent'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import UpdateStudentComponent from './components/UpdateStudentComponent'
import StudentComponent from './components/StudentCompononet'
import 'bootstrap/dist/css/bootstrap.css';



function App() {
  
  return (
    <main className='container mt-5'>
    <BrowserRouter>
    <HeaderComponent/>
    <Routes>
      {/* // http://localhost:3000 */}
      <Route path='/' element= { <ListStudentComponent/>}></Route>
      {/* // http://localhost:3000/Students */}
      <Route path='/students' element = { <ListStudentComponent/> }> </Route>
      {/* // http://localhost:3000/add-employee */}
       <Route path='/addStudent' element= { <StudentComponent/> }> </Route> 
       {/* // http://localhost:3000/editemployee/1 */}
        <Route path='/updateStudent/:id' element= { <UpdateStudentComponent/> }> </Route> 
        
    </Routes>
     </BrowserRouter>
      
    </main>
  )
}

export default App
