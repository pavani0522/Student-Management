import React,{useEffect, useState} from 'react'
import { deleteStudent, listStudents } from '../services/StudentService'
import { useNavigate } from 'react-router-dom'
import {FaEdit, FaEye, FaTrashAlt} from "react-icons/fa";

const ListStudentComponent = () => {
  const [studnets,setStudents] = useState([])
  
  const navigator = useNavigate();
  useEffect(()=> {
    getAllStudents();

  },[]
)

function getAllStudents(){
    listStudents().then((response) => {
        setStudents(response.data);
    }).catch(error => {
        console.error(error);
    })
}

function addNewStudent(){
    navigator('/addstudent')
}
 function updateStudent(id){
     navigator(`/updateStudent/${id}`)
 }
 function delStudent(id){
    console.log(id);

    deleteStudent(id).then((response) =>{ 
        getAllStudents();
    }).catch(error => {
        console.error(error);
    })
}

  return (
    <div >
        <h2 className='text-center'>List of Students</h2>
        <button className='btn btn-primary mb-2' onClick={addNewStudent}> Add Student</button>
        <table className='table table-striped table-bordered text-center '>
            <thead>
                <tr>
                    <th>Student Id</th>
                    <th>Student FirstName</th>
                    <th>Student LastName</th>
                    <th>Student Email</th>
                    <th colSpan="2">Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    studnets.map(student => 
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.firstname}</td>
                            <td>{student.lastname}</td>
                            <td>{student.email}</td>
                           
                            <td className='mx-2'>
                            <button
                             className='btn btn-warning' 
                              onClick={ () => updateStudent(student.id)}> 
                            
                                <FaEdit/>
                            </button>
                            </td>
                            <td className='mx-2'>
                                <button className='btn btn-danger' onClick={ () => delStudent(student.id)}>
                                <FaTrashAlt></FaTrashAlt>  
                                </button>
                                
                                </td>

                        </tr>
                    )
                }

            </tbody>
        </table>


    </div>
  )
}

export default ListStudentComponent