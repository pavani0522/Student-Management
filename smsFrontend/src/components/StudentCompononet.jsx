import React, { useEffect, useState } from 'react'
import { createStudent, editStudent, getStudent } from '../services/StudentService'
import { useNavigate, useParams } from 'react-router-dom'
const StudentComponent = () => { 

    

   const [id, setId]= useState('') 
     const [firstname, setFirstName]= useState('')
     const [lastname, setLastName]= useState('')
     const [email, setEmail]= useState('')

   

    const [errors, setErrors] = useState({

      id: '',  
        firstname : '',
        lastname : '',
        email : ''

    })

    

     const navigator= useNavigate ();

 

 function addStudent(e){
     e.preventDefault();

    
   if (validateForm){
    const student ={  id , firstname, lastname, email}
    console.log(student)

        createStudent(student).then((respone) => { 
            console.log(respone.data);
            navigator('/students')
           })
    }
    

   
}

   

   function validateForm(){
    let valid = true;
    const errorsCopy = {... errors}  

    if(id.trim()){
      errorsCopy.id = '';
    }
    else 
     errorsCopy.id = 'id is required';
      valid = false;
     
     if(firstname.trim()){
        errorsCopy.firstname = '';
      }
      else 
       errorsCopy.firstname = 'firstname is required';
        valid = false;

     
     if(lastname.trim()){
        errorsCopy.lastname = '';
      }
      else 
      {
       errorsCopy.lastname = 'lastname is required';
        valid = false;
      }

     
     if(email.trim()){
        errorsCopy.email = '';
      }
      else 
      {
       errorsCopy.email = 'email is required';
        valid = false;
      }

     setErrors(errorsCopy);
     return valid;
    }


   return (
     <div className='container'>
        <br/> 
         <div className='row'>
            <div className='card col-md-12 offset-md-12 offset-md-12' >
                <h2 className='text-center'>Add Student</h2>
                <div className='card-body'>
                    <form>
                     
                    <div className='form-group mb-2' >
                          <label className='form-label'>Id:</label>
                           <input type='text'
                            placeholder='Enter Student Id'
                           name= 'id'
                           value={id}
                           className= {` form-control ${errors.id ? 'is-invalid': ''}`}
                            //onChange={handleFirstName}
                            onChange={(e)=> setId(e.target.value)}
                           ></input>
                           {errors.id && <div className='invalid-feedback'> {errors.id}
                            </div>}

                            </div>

                    
                        <div className='form-group mb-2' >
                          <label className='form-label'>First Name:</label>
                           <input type='text'
                            placeholder='Enter Student First Name'
                           name= 'firstname'
                           value={firstname}
                           className= {` form-control ${errors.firstname ? 'is-invalid': ''}`}
                            //onChange={handleFirstName}
                            onChange={(e)=> setFirstName(e.target.value)}
                           ></input>
                           {errors.firstname && <div className='invalid-feedback'> {errors.firstname}
                            </div>}

                         </div> 
                         <div className='form-group mb-2' >
                           <label className='form-label'> Last Name:</label>
                            <input type='text'
                           placeholder='Enter Student Last Name'
                           name= 'lastname'
                            value={lastname}
                            className= {` form-control ${errors.lastname ? 'is-invalid': ''}`}
                            //onChange={handleLastName}
                            onChange={(e) => setLastName(e.target.value)}
                            ></input>
                            {errors.lastname && <div className='invalid-feedback'> {errors.lastname}
                            </div>}

                         </div> 
                         <div className='form-group mb-2' >
                          <label className='form-label'> Email:</label>
                            <input type='text'
                            placeholder='Enter Student Email'
                            name= 'email'
                            value={email}
                            className={` form-control ${errors.email ? 'is-invalid': ''}`}
                            //onChange={handleEmail}
                            onChange={(e) => setEmail(e.target.value)}
                            ></input>
                            {errors.email && <div className='invalid-feedback'> {errors.email}
                            </div>}
                            
                        </div> 
                         <button
                         className='btn btn-success' onClick={addStudent} > Submit </button>

                     </form>

                 </div>
             </div>

         </div>
         
     </div>
  )
 }

export default StudentComponent